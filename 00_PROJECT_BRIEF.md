# X5 Field Companion — Projekt-Brief

## Was wird gebaut

Ein neues mindricS Creator-Tool für Insta360 X5 Besitzer, bestehend aus zwei Modulen in einem Tool:

1. **Guide** — erweiterte und korrigierte Version eines bestehenden Anfänger-Guides
2. **Setup-Planner** — Eingabe (Vorhaben, Tageszeit, Umgebung, Montage) → regelbasierte Setup-Empfehlung

## Strategie

- Start als **kostenloses Gimmick**, nicht als Paid-Produkt in v1.
- Neue Zielgruppe für mindricS (Insta360/Action-Cam-Nutzer, nicht identisch mit der bisherigen AI-Creator-Audience) — erst validieren ob Nachfrage besteht, bevor in eine Paid-Version investiert wird.
- Distribution: Linktree, Pinterest, ggf. Insta360-Communities/Reddit. **Nicht** über Etsy/Gumroad in v1.
- Falls gute Resonanz: v2 als "Pro"-Version mit mehr Funktionsumfang (siehe `03_FEATURES_BACKLOG.md`) — dann ggf. doch als Paid-Produkt.

## Zielgruppe

Insta360 X5 Besitzer (Einsteiger bis Fortgeschrittene), die schnelle, verlässliche Antworten wollen statt YouTube-Tutorials zu durchsuchen. Bewusste Portfolio-Erweiterung in eine neue Nische, kein Ersatz für die bisherige mindricS-Produktlinie.

## Tech-Constraints (wichtig für Claude Code)

- **Kein Live-API-Call in v1.** Der Setup-Planner ist ein regelbasiertes System (Decision-Logik in JavaScript), kein LLM-Aufruf.
  - Begründung: Kostenkontrolle (Gimmick = kostenlos verteilt, kein laufendes Budget pro Nutzung), Offline-Fähigkeit, Konsistenz mit dem bestehenden mindricS-Produktstandard ("offline-fähig, keine externen Abhängigkeiten").
- Kernfunktion muss **ohne Internetverbindung** funktionieren.
- Ziel-Auslieferung: ein eigenständiges, distributionsfähiges Paket — idealerweise eine HTML-Datei oder ein kleines statisches Bundle, das sich wie die bisherigen mindricS-Tools als ZIP verteilen lässt (HTML + README.txt + COPYRIGHT.txt, ASCII-only Textdateien). Wenn eine modernere App-Struktur (z.B. Vite/React-Build) sinnvoller ist — okay, aber der Build-Output muss sich am Ende 1:1 wie eine statische Seite verteilen lassen.
- Kein Tracking, keine Analytics-Pflicht, keine Logins.
- Lokale Speicherung (z.B. für das Tour-Log aus dem v2-Backlog) darf normales Browser-Storage (localStorage) nutzen. Das ist eine eigenständige App, keine Claude.ai Artifact-Umgebung — die dortige localStorage-Einschränkung gilt hier nicht.

## Bezug zum bestehenden Material

Es existiert bereits ein Anfänger-Guide (HTML, von Perplexity gebaut). Grundidee der UI: Sidebar-Navigation + Tab-Pages + Karten-Layout + Szenen-Auswahl + Cheatsheet-Tabelle. Diese UI-Struktur hat sich bewährt und sollte als Vorlage für die Komponenten-Architektur dienen — der Inhalt wird erweitert/korrigiert (siehe `01_GUIDE_CONTENT.md`), das visuelle Theme wird komplett geändert (siehe `04_DESIGN_BRAND.md`).

## Sprache

**Zweisprachig: Deutsch + Englisch mit Umschalter** — entspricht dem Pattern, das bei anderen mindricS-Tools schon genutzt wurde (gleiche Mechanik wie der bestehende Dark/Light-Toggle, nur für Sprache statt Theme).

- Alle UI-Texte, Guide-Inhalte und Planner-Ergebnisse existieren in beiden Sprachen als Strings/Objekte (kein automatisches Übersetzen zur Laufzeit, sondern feste DE/EN-Textpaare im Code).
- Umschalter sitzt im Sidebar-Bottom-Bereich, direkt neben/unter dem Theme-Toggle.
- Default-Sprache: Deutsch (Quellmaterial ist Deutsch, Erstdistribution läuft über deutschsprachige Kanäle).
- **Für Claude Code:** Architektur von Anfang an mit Sprachstruktur aufbauen (z.B. ein zentrales `strings`-/`content`-Objekt mit `de`/`en`-Keys), nicht nachträglich nachrüsten — vermeidet späteres Doppel-Maintaining von Hardcoded-Texten. Code/Variablennamen/Kommentare bleiben wie gewohnt Englisch.

## Branding

mindricS wird als Urheber genannt (kleiner Footer-Credit + Link zu linktr.ee/mindrics), aber **nicht** im Dark-Luxury-Look der Haupt-mindricS-Produkte. Eigenes visuelles System, siehe `04_DESIGN_BRAND.md`.

## Weitere Dateien in diesem Projekt

- `01_GUIDE_CONTENT.md` — alle neuen/korrigierten Guide-Inhalte
- `02_PLANNER_LOGIC.md` — Eingabefelder und Entscheidungslogik des Setup-Planners
- `03_FEATURES_BACKLOG.md` — Feature-Priorisierung v1/v2/v3
- `04_DESIGN_BRAND.md` — visuelles System, Branding-Regeln, Auslieferungsformat
