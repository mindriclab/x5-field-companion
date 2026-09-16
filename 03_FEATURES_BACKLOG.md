# Features-Backlog — Priorisierung

## v1 (gehört in den ersten Launch — Free Gimmick)

| Feature | Beschreibung |
|---|---|
| Guide (erweitert) | Siehe `01_GUIDE_CONTENT.md` — alle neuen/korrigierten Sektionen |
| Setup-Planner | Regelbasiert, siehe `02_PLANNER_LOGIC.md` |
| Packlisten-Generator | Pro gewähltem Vorhaben (aus dem Planner) wird eine kurze Checkliste generiert: Akkus/Ersatzakku, SD-Karte(n), Stativ-Typ falls relevant, Filter/Zubehör, Mounting-Teil. Einfache Lookup-Tabelle pro Vorhaben-Kategorie, kein eigenes Eingabeformular nötig — hängt direkt am Planner-Ergebnis. |
| Post-Shoot-Checkliste | Statische Checkliste (kein Input nötig): Footage sichten, in Stock-taugliche vs. freie Clips sortieren (Bezug zur neuen Guide-Sektion "Footage für Stock & freien Content"), grobe Keywording-Vorschläge je nach gewähltem Vorhaben aus dem Planner. |

## v2 (nachschieben, falls Resonanz gut ist — ggf. Basis für Paid-Version)

| Feature | Beschreibung | Hinweis |
|---|---|---|
| Golden-Hour-Rechner | Standort + Datum → Sonnenstand/Golden-Hour-Zeitfenster | Echte API nötig, aber simple Wetter/Sonnenstand-Daten (z.B. sunrise-sunset.org), **kein LLM** — unproblematisch fürs Kostenmodell |
| Export als druckbare Setup-Karte / PDF | Planner-Ergebnis als kompakte Karte exportierbar, für Handy/Ausdruck während des Drehs | Reine Client-seitige PDF-Generierung, kein Server nötig |
| Tour-Log | Persönliches Journal: Strecke, Bedingungen, was funktioniert hat | localStorage, keine Account-Pflicht |

## v3 / Explore (nur prüfen, nicht automatisch bauen)

| Feature | Beschreibung | Wichtiger Hinweis |
|---|---|---|
| "Ask AI"-Layer für Freitext-Eingabe & Troubleshooting-Chat | Statt feste Kategorien: freie Beschreibung des Vorhabens, oder Chat für ungewöhnliche Fragen | **Business-Model-Problem:** Live-LLM-Calls bedeuten laufende Kosten pro Nutzung. Bei einem kostenlos verteilten Gimmick zahlt Rico jede Anfrage. Nur sinnvoll, wenn: (a) Kunde bringt eigenen API-Key mit, oder (b) das Tool wird zu einem bezahlten/gehosteten Produkt mit eigenem Kostenmodell (Abo statt Einmalkauf — anderes Geschäftsmodell als die bisherigen mindricS-Produkte). Vor Umsetzung explizit mit Rico klären, nicht einfach einbauen. |
| QR-Code/Direktlink für Setup-Karte aufs Handy während des Drehs | Schnellzugriff auf das aktuelle Planner-Ergebnis ohne erneute Eingabe | Nice-to-have, kein Blocker |

## Nicht im Scope (zur Klarheit)

- Keine Account-/Login-Funktion
- Keine Cloud-Synchronisation in v1/v2
- Keine Insta360-API-Integration (gibt es ohnehin nicht offiziell) — alles basiert auf manuell eingegebenen Daten
