# Guide-Content — Neue Sektionen & Korrekturen

Basis ist der bestehende Anfänger-Guide (Aufnahme, Szenerien, Studio, Export, DaVinci, Cheatsheet). Diese Datei beschreibt nur das, was **neu dazukommt** oder **korrigiert** wird. Bestehende Inhalte (Auflösung, Stitching, Datei-Formate, DaVinci-Workflow, Export-Presets) bleiben wie sie sind, sofern hier nichts anderes vermerkt ist.

---

## 1. NEUE SEKTION: Bedienung — Manuelle Werte einstellen

Fehlt komplett im bestehenden Guide. Zeigt nicht nur WAS man einstellen sollte, sondern WO und WIE.

**Über die Kamera direkt:**
1. Von Auto- auf **Pro/Manuell-Modus** wechseln (Moduswahl auf dem Touchscreen)
2. Auf dem Kamera-Display **nach rechts wischen** → öffnet das Aufnahmeparameter-Panel (ISO, Verschlusszeit, Weißabgleich)
3. Gewünschten Wert antippen → per Touch/Scroll einstellen

**Über die Insta360 App (komfortabler, größerer Screen):**
App öffnen → Live-Vorschau der Kamera → **Pro-Mode-Symbol** antippen → identisches Parameter-Panel, ISO/Shutter/WB einzeln einstellbar.

**Tipp-Box:** Auto-ISO geht bis 1600. Im manuellen Modus möglichst zwischen 400–800 bleiben, wenn Stativ oder Zusatzlicht vorhanden ist.

**Weitere Bedienungs-Quickrefs für diese Sektion:**
- SD-Karte formatieren: Einstellungen → SD-Karte → Formatieren (an der Kamera)
- Firmware-Update: über App, Benachrichtigung bei Verfügbarkeit, Anweisungen am Bildschirm befolgen
- Moduswechsel Video/Foto: Quick-Switch-Taste/Geste am Touchscreen

---

## 2. KORREKTUR/ERGÄNZUNG: PureVideo-Modus (betrifft Dämmerung & Nacht)

Fehlt komplett im bestehenden Guide — wichtige Ergänzung, da sie die bisherigen Dämmerung/Nacht-Empfehlungen teilweise ersetzt.

**Was es ist:** KI-gestützter Lowlight-Modus, nutzt den dreifachen AI-Chip der X5. Verbessert Belichtung, reduziert digitales Rauschen, optimiert Farben in Echtzeit.

**Wichtige Einschränkung:** PureVideo läuft **nicht in 8K**. Nur verfügbar bis 5.7K.

**Settings-Empfehlung bei PureVideo:**
| Einstellung | Wert |
|---|---|
| Auflösung | 5.7K (nicht 8K möglich) |
| FPS | 60 für beste Lichtempfindlichkeit |
| Wann nutzen | Sehr dunkle Szenen, wo 8K + manuelles ISO nicht mehr ausreicht |
| Wann NICHT nutzen | Wenn maximale Auflösung wichtiger ist als Lowlight-Qualität |

**Info-Box für die Szenen "Dämmerung" und "Nacht":** Ergänzen mit Hinweis: "Alternative zu manuellem ISO-Hochziehen: PureVideo-Modus testen (5.7K, kein 8K). Oft saubereres Ergebnis bei sehr wenig Licht als 8K + hohes ISO."

---

## 3. NEUE SEKTION: Einzelobjektiv-Modus (Single-Lens)

Komplett neu, fehlt im bestehenden Guide. Besonders relevant für Action/Bike-Content.

**Was es ist:** X5 nimmt mit nur einem Objektiv auf wie eine normale Weitwinkelkamera. Kein 360°-Stitching, kein Reframing nötig.

**Specs:**
| Modus | Auflösung | FOV |
|---|---|---|
| Single-Lens Standard | bis 4K 60fps | normal |
| FreeFrame Video + MaxView | bis 4K 30fps | bis 170° |

**Vorteile gegenüber 360°-Modus:**
- Kein Qualitätsverlust durch Reframing (volle Auflösung bleibt erhalten, kein "8K verteilt auf 360° → nur ~2K nach Reframe")
- Keine Stitching-Naht, die sichtbar werden kann
- Direkt fertiges Flat-Video, kein Insta360-Studio-Schritt nötig

**Wann nutzen statt 360°:**
- Lenker-/Helm-Montage bei Bike-Touren, wenn die Blickrichtung klar feststeht (kein nachträgliches Reframing in eine andere Richtung nötig)
- Bei gutem Licht (sieht am besten bei hellem Tageslicht aus)
- Wenn Workflow-Geschwindigkeit wichtiger ist als 360°-Flexibilität

**Wann 360°-Modus trotzdem besser ist:**
- Wenn du in der Nachbearbeitung noch nicht weißt, welche Blickrichtung/welcher Ausschnitt der beste ist
- Bei Tiny-Planet- oder Reveal-Effekten

---

## 4. NEUE SEKTION: Montage & Bike-Setup

Komplett neu — direkt für den Haupt-Use-Case (tägliche Bike-Touren) relevant.

**Montage-Optionen im Vergleich:**
| Montage | Vorteil | Nachteil | Empfehlung |
|---|---|---|---|
| Lenker-Mount | Stabil, POV-Perspektive | Vibrationen vom Asphalt/Trail | Einzelobjektiv-Modus + FlowState an |
| Brust-Mount | Ruhigeres Bild als Lenker | Körperbewegung sichtbar | Gut für Vlog-artigen Content |
| Helm-Mount | Blickrichtung folgt Kopf | Mehr Mikro-Bewegung | Action-orientiert |
| Unsichtbarer Selfie Stick | 360°-Modus, Stick wird in der Aufnahme automatisch "wegrechnet" | Nur sinnvoll im 360°-Modus | Gut für klassische Reveal-Shots, weniger für reine Bike-POV |

**Unsichtbarer-Selfie-Stick-Workflow (kurz erklären):** Im 360°-Modus mit Stick aufnehmen → in Insta360 Studio wird der Stick durch die Stitching-Logik automatisch unsichtbar, wenn FOV/Reframing korrekt gesetzt ist (LINEAR-Projektion, Stick liegt typischerweise in der Stitching-Naht-Zone).

**Akku & Wärme bei Dauerbetrieb (lange Bike-Touren):**
- Bei langen Sessions: AI-Highlights-Funktion deaktivieren (spart Akku, reduziert Wärmeentwicklung)
- Bildschirm-Auto-Sleep kürzer einstellen
- Realistische Akkulaufzeit: ca. 185 Minuten unter normalen Bedingungen — bei 8K/Dauerbetrieb deutlich weniger. Für mehrstündige Touren: Ersatzakku oder Power Bank über USB-C einplanen.

---

## 5. NEUE SEKTION: Audio-Einstellungen

Fehlt komplett — relevant sobald Ton bei Outdoor-Aufnahmen eine Rolle spielt.

| Einstellung | Wann nutzen |
|---|---|
| Windreduzierung | Immer bei Outdoor/Fahrtwind aktivieren |
| Sprachverbesserung | Bei Vlog-artigem Talking-Head-Content, reduziert Hintergrundgeräusche |
| Insta360 Mic Air/Pro (optional, externes Zubehör) | Wenn deutlich bessere Tonqualität gewünscht ist als das interne Mikrofon liefert |

---

## 6. NEUE SEKTION: SD-Karten-Kompatibilität

Kurze Referenztabelle, häufige Anfängerfrage.

| Anforderung | Wert |
|---|---|
| Geschwindigkeitsklasse | UHS-I, mindestens V30 |
| Format | exFAT |
| Max. Kapazität | bis 1 TB getestet |
| Empfohlene Hersteller | SanDisk, Lexar |
| Wartungstipp | Regelmäßig in der Kamera oder App formatieren, um Schreibfehler zu vermeiden |

---

## 7. NEUE SEKTION: Troubleshooting

Fehlt komplett im bestehenden Guide.

| Problem | Lösung |
|---|---|
| Kamera wird sehr warm | Normal bei 8K/Dauerbetrieb. AI-Highlights deaktivieren, Bildschirm-Timeout verkürzen. Kein Defekt. |
| Sichtbare Stitching-Naht | Objekte nicht direkt seitlich an der Kamera platzieren — dort liegen die Nähte. Bei Sternenhimmel kaum vermeidbar. |
| Kamera lässt sich nicht einschalten | Akku-Ladezustand und Kontakte prüfen. Forced Restart: Power-Taste >8 Sekunden gedrückt halten. |
| Dateiübertragung schlägt fehl | Nur offizielles USB-C-Kabel nutzen — Drittanbieter-Kabel verursachen oft Kompatibilitätsprobleme. |
| App verbindet nicht | WLAN-Netzwerk der Kamera am Smartphone "vergessen" und neu verbinden. Beide auf aktueller Firmware/App-Version prüfen. |
| Speicherkartenfehler | UHS-I/V30-Anforderung und exFAT-Format prüfen (siehe SD-Karten-Sektion). |

---

## 8. NEUE SEKTION: Footage für Stock & freien Content

Komplett neu — speziell relevant für Ricos Adobe-Stock-Pläne, kein Standard-Anfänger-Content.

**Grundunterscheidung beim Sichten von Footage:**
| Kriterium | Geeignet für Stock | Eher freier Content |
|---|---|---|
| Erkennbare Personen/Gesichter ohne Release | Nein (Lizenzproblem) | Ja, unproblematisch |
| Erkennbares fremdes Privateigentum/Marken | Nein | Meist unproblematisch |
| Stabiler Horizont, sauberes B-Roll | Ja | — |
| Sehr spezifischer, lokal gebundener Moment (eigene Story) | Eher nicht | Ja |

**Praxis-Hinweise:**
- GPS-Metadaten in den Clips bleiben erhalten — hilfreich für spätere Orts-Keywording, sollte aber vor Stock-Upload geprüft werden (manche Plattformen erwarten/ignorieren das, kein Pflichtfeld, aber gut für die eigene Sortierung)
- Stock-Keywording-Grundmuster für Natur/Bike-Clips: Motiv + Aktivität + Tageszeit + Landschaftstyp + Stimmung (z.B. "cyclist forest trail morning light mist sport")
- Klare Trennung beim Anlegen: ein Footage-Ordner-Tag-System (Stock-taugliche vs. freie Clips) spart später Zeit — Details dazu gehören eigentlich in den separaten Footage-Workflow, der laut Content-Strategie erst gebaut wird, wenn genug Rohmaterial da ist. Hier nur als Faustregel beim Sichten direkt nach dem Dreh.
