// Headless screenshot capture for X5 Field Companion product images.
// Drives Chrome/Edge via the DevTools Protocol (no external deps).
const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const os = require("os");

const URL = "http://127.0.0.1:5179/X5-Field-Companion.html";
const OUT = path.join(__dirname, "product-shots");
const PORT = 9333;

const BROWSERS = [
  path.join(process.env["ProgramFiles"] || "", "Google/Chrome/Application/chrome.exe"),
  path.join(process.env["ProgramFiles(x86)"] || "", "Microsoft/Edge/Application/msedge.exe"),
  path.join(process.env["ProgramFiles"] || "", "Microsoft/Edge/Application/msedge.exe"),
];
const browser = BROWSERS.find(p => p && fs.existsSync(p));
if (!browser) { console.error("No Chrome/Edge found"); process.exit(1); }

const DESK = { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false };
const MOB  = { width: 390,  height: 844, deviceScaleFactor: 2, mobile: true };

// state setup helpers (run in page context)
const L = (lang, theme) =>
  `state.lang='${lang}';state.theme='${theme}';localStorage.setItem('x5_lang','${lang}');localStorage.setItem('x5_theme','${theme}');`;
const PLAN = `state.planner={vorhaben:'bike',tageszeit:'day',umgebung:'outdoor',montage:'handlebar'};`;

const shots = [
  { name: "01_guide_dark_de", dev: DESK,
    setup: L("de","dark") + `state.route='guide';state.sceneOpen=null;renderAll();window.scrollTo(0,0);` },
  { name: "02_planner_input_de", dev: DESK,
    setup: L("de","dark") + `state.route='planner';${PLAN}state.sceneOpen=null;renderAll();window.scrollTo(0,0);` },
  { name: "03_planner_result_de", dev: DESK,
    setup: L("de","dark") + `state.route='planner';${PLAN}renderAll();var r=document.querySelector('.result');window.scrollTo(0,r?r.offsetTop-24:0);` },
  { name: "04_planner_packlist_de", dev: DESK,
    setup: L("de","dark") + `state.route='planner';${PLAN}renderAll();var pk=[...document.querySelectorAll('#content .card')].find(c=>/🎒/.test(c.textContent));window.scrollTo(0,pk?pk.offsetTop-24:0);` },
  { name: "05_scenes_grid_dark", dev: DESK,
    setup: L("de","dark") + `state.route='guide';state.sceneOpen=null;renderAll();var s=document.getElementById('sec-scenes');window.scrollTo(0,s?s.offsetTop-20:0);` },
  { name: "06_scene_detail_night", dev: DESK,
    setup: L("de","dark") + `state.route='guide';state.sceneOpen='nacht';renderAll();var s=document.getElementById('sec-scenes');window.scrollTo(0,s?s.offsetTop-20:0);` },
  { name: "07_cheatsheet_dark", dev: DESK,
    setup: L("de","dark") + `state.route='cheatsheet';state.sceneOpen=null;renderAll();window.scrollTo(0,0);` },
  { name: "08_postshoot_de", dev: DESK,
    setup: L("de","dark") + `state.planner.vorhaben='bike';state.route='postshoot';renderAll();window.scrollTo(0,0);` },
  { name: "09_guide_light_en", dev: DESK,
    setup: L("en","light") + `state.route='guide';state.sceneOpen=null;renderAll();window.scrollTo(0,0);` },
  { name: "10_mobile_planner", dev: MOB,
    setup: L("de","dark") + `state.route='planner';${PLAN}renderAll();var r=document.querySelector('.result');window.scrollTo(0,r?r.offsetTop-12:0);` },
  { name: "11_mobile_guide", dev: MOB,
    setup: L("de","dark") + `state.route='guide';state.sceneOpen=null;renderAll();window.scrollTo(0,0);` },
];

function getJSON(url) {
  return new Promise((res, rej) => {
    http.get(url, r => { let d = ""; r.on("data", c => d += c); r.on("end", () => res(JSON.parse(d))); }).on("error", rej);
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function waitPort() {
  for (let i = 0; i < 60; i++) {
    try { return await getJSON(`http://127.0.0.1:${PORT}/json/version`); }
    catch { await sleep(250); }
  }
  throw new Error("browser debug port never came up");
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const userDir = fs.mkdtempSync(path.join(os.tmpdir(), "x5shot-"));
  const proc = spawn(browser, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars",
    `--remote-debugging-port=${PORT}`, `--user-data-dir=${userDir}`,
    "--no-first-run", "--no-default-browser-check", "about:blank",
  ], { detached: false, stdio: "ignore" });

  try {
    await waitPort();
    const targets = await getJSON(`http://127.0.0.1:${PORT}/json`);
    const page = targets.find(t => t.type === "page");
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.addEventListener("open", res); ws.addEventListener("error", rej); });

    let id = 0; const pending = {}; const evl = [];
    ws.addEventListener("message", ev => {
      const m = JSON.parse(ev.data);
      if (m.id && pending[m.id]) { pending[m.id](m); delete pending[m.id]; }
      else if (m.method) evl.slice().forEach(l => l(m));
    });
    const send = (method, params = {}) => new Promise(res => { const i = ++id; pending[i] = res; ws.send(JSON.stringify({ id: i, method, params })); });
    const waitEvent = method => new Promise(res => { const l = m => { if (m.method === method) { evl.splice(evl.indexOf(l), 1); res(m); } }; evl.push(l); });

    await send("Page.enable");
    await send("Runtime.enable");

    for (const s of shots) {
      await send("Emulation.setDeviceMetricsOverride", s.dev);
      const loaded = waitEvent("Page.loadEventFired");
      await send("Page.navigate", { url: URL });
      await loaded;
      await send("Runtime.evaluate", {
        expression: `(async()=>{ try{ ${s.setup} }catch(e){console.log('setup err',e.message)} if(document.fonts&&document.fonts.ready){try{await document.fonts.ready}catch(e){}} await new Promise(r=>setTimeout(r,250)); return 'ok'; })()`,
        awaitPromise: true,
      });
      await sleep(550);
      const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
      fs.writeFileSync(path.join(OUT, s.name + ".png"), Buffer.from(shot.result.data, "base64"));
      console.log("saved", s.name + ".png");
    }
    ws.close();
  } finally {
    try { proc.kill(); } catch {}
  }
}
main().then(() => { console.log("DONE"); process.exit(0); }).catch(e => { console.error("FAIL", e); process.exit(1); });
