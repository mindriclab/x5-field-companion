# Design & Branding

## Grundprinzip

Bewusst **kein** Dark-Luxury-Look der Haupt-mindricS-Produkte (Gold/dunkles Warm-Braun/Palatino-Serif). Andere Zielgruppe (Outdoor/Action-Cam statt AI-Image-Creator), andere Erwartung. Eigenes visuelles System für diese Produktlinie — Richtung: erdig, "Field"/Outdoor-Ästhetik statt Premium-Editorial.

## Vorschlag Farbpalette

```
Hintergrund (dark):  #14201c   (dunkles Moosgrün-Schwarz)
Surface:              #1c2620
Surface 2:            #232f28
Akzent (Terracotta):  #d97757   (Trail-Marker-Orange, für Buttons/Labels/aktive States)
Akzent 2 (Sage):       #8fae8b   (sekundäre Hervorhebung, z.B. positive Badges)
Text:                  #ece6da   (warmes Off-White)
Text gedimmt:          #8a9389
Border:                rgba(255,255,255,0.08)
```

Light-Mode optional analog zur bestehenden Guide-Vorlage (die hatte schon einen funktionierenden Dark/Light-Toggle) — gleiches Prinzip übernehmen, nur Farben anpassen.

## Typografie

- Überschriften: ein technisch-robuster Sans-Serif (z.B. Space Grotesk oder Archivo) — vermittelt "Outdoor-Gear", nicht "Editorial"
- Fließtext: gut lesbarer Sans-Serif (Inter, Satoshi — beide schon einmal in der bisherigen Vorlage genutzt)
- Settings/Werte (monospace): wie bisher, z.B. JetBrains Mono oder Courier New

Self-hosted oder per Fontshare/Google Fonts CDN — bei einem kostenlos verteilten Gimmick ohne deutsche Rechtsform-Verpflichtung wie bei mindrics.de ist eine CDN-Einbindung unkritisch, muss aber nicht zwingend offline funktionieren, wenn Fonts fehlen (Fallback auf System-Sans definieren).

## Layout-Struktur (wiederverwenden)

Die bestehende UI-Struktur aus dem Perplexity-Guide hat sich bewährt — als Vorlage übernehmen, nur umgestylt:

- Sidebar-Navigation (Desktop) / Bottom-Nav (Mobile)
- Card-basierte Content-Blöcke
- Szenen-Grid mit Detail-Drilldown (für die Guide-Szenen)
- Cheatsheet-Tabelle als Referenzübersicht
- Gleiches Pattern für den neuen Setup-Planner: Eingabe-Schritte → Ergebnis-Karte im selben Stil wie die Szenen-Detailansicht (Konsistenz zwischen Guide und Planner)

## mindricS-Branding (zurückhaltend)

- Kleiner Footer-Credit im Sidebar-Bottom-Bereich (dort, wo aktuell der Theme-Toggle sitzt): "Built by mindricS" + Link zu `linktr.ee/mindrics`
- Direkt daneben/darunter: Sprach-Toggle DE/EN (siehe `00_PROJECT_BRIEF.md` — gleiche Toggle-Mechanik wie Dark/Light)
- Kein mindricS-Logo prominent im Header — das Tool soll für sich stehen, nicht wie ein Werbeträger wirken
- Keine Produktverlinkung zu anderen mindricS-Packs im Tool selbst (entspricht dem Prinzip aus den anderen Projektdateien: mindrics.de verlinkt nie einzelne Produkte direkt — gleiche Zurückhaltung gilt hier)

## Auslieferungsformat

Gleiches Grundprinzip wie bei den bestehenden mindricS-Produkten:

```
[tool-name].zip
├── [tool-name].html  (oder Build-Output, wenn Claude Code eine andere Struktur wählt)
├── README.txt        (ASCII-only)
└── COPYRIGHT.txt      (ASCII-only, freie Nutzung da Gimmick — Lizenztext entsprechend anpassen, kein Weiterverkaufsverbot wie bei Paid-Produkten nötig, aber "mindricS" als Urheber nennen)
```

Falls Claude Code eine modernere Projektstruktur baut (z.B. mit Build-Step): am Ende muss ein statischer Output stehen, der sich genauso verteilen lässt.
