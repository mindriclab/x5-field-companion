# Setup-Planner — Eingabefelder & Entscheidungslogik

## Grundprinzip

Kein einzelner riesiger Lookup-Table (Vorhaben × Tageszeit × Umgebung × Montage = zu viele Kombinationen). Statt dessen ein **Layered-Rules-System**: mehrere kleine Regel-Tabellen, die zur Laufzeit zu einem Ergebnis kombiniert werden. Leichter zu pflegen, leichter zu testen, leichter zu erweitern.

```
Output = Layer1(Tageszeit, Umgebung)
       + Layer2(Vorhaben)   // überschreibt/ergänzt Layer 1 wo nötig
       + Layer3(Montage)    // ergänzt Stativ/Stabilisierungs-Hinweise
       → Combiner mergt alles zu einem finalen Ergebnis-Objekt
```

---

## Eingabefelder (UI)

### Frage 1 — Vorhaben (Single-Select)
- Bike-Tour / Action-Sport
- Konzert / Event
- Natur & Landschaft
- Architektur & Innenraum
- Sternenhimmel / Astro
- Interview / Vlog / Talking-Head
- Straßenszene / Street
- Wasser / Strand / Pool

### Frage 2 — Tageszeit (Single-Select)
- Tageslicht
- Dämmerung / Golden Hour
- Nacht

**Sonderfall:** Wenn Vorhaben = "Sternenhimmel / Astro" → Tageszeit automatisch auf "Nacht" setzen, Frage ausblenden oder deaktivieren.

### Frage 3 — Umgebung (Single-Select)
- Outdoor
- Indoor

**Sonderfall:** Wenn Vorhaben = "Sternenhimmel / Astro" → automatisch "Outdoor", Frage ausblenden.

### Frage 4 — Montage / Bewegung (Single-Select)
- Stativ (statisch)
- Handheld
- Helm-Mount
- Brust-Mount
- Lenker-Mount (Bike)
- Unsichtbarer Selfie Stick

**Sonderfall:** Wenn Vorhaben = "Sternenhimmel / Astro" und Montage ≠ "Stativ (statisch)" → Warnhinweis im Ergebnis anzeigen: "Stativ ist hier praktisch zwingend, sonst werden Aufnahmen unbrauchbar."

---

## Layer 1 — Basis-Settings nach Tageszeit + Umgebung

(Basiert auf der bestehenden Szenen-Logik des Guides, hier verfeinert inkl. PureVideo-Hinweis)

| Tageszeit + Umgebung | Modus | Auflösung | ISO | Verschlusszeit | Weißabgleich | Sonstiges |
|---|---|---|---|---|---|---|
| Tageslicht + Outdoor | Auto/Manuell | 8K | Auto (bleibt niedrig) | Auto | Auto / 5500K | FlowState an |
| Tageslicht + Indoor | Manuell empfohlen | 8K | 400–1600 | 1/30–1/60s | Manuell je Lichtquelle | Anti-Flicker an |
| Dämmerung/Golden Hour + Outdoor | Manuell | 8K oder PureVideo (5.7K) | max. 1600 manuell | 1/30–1/60s | 4000–5000K | Stativ erhöht Qualität deutlich |
| Dämmerung/Golden Hour + Indoor | Manuell | 8K | 400–1600 | 1/30–1/60s | Manuell je Lichtquelle | Anti-Flicker an |
| Nacht + Outdoor | Manuell, PureVideo (5.7K) empfehlen | 5.7K (PureVideo) oder 8K | 800–3200 | 1/15–1/4s | 3200–4000K | Stativ praktisch Pflicht |
| Nacht + Indoor | Manuell | 8K | 400–1600 | 1/30–1/60s | 3200–4500K je Lichtquelle | Anti-Flicker zwingend an |

---

## Layer 2 — Vorhaben-Overlay (überschreibt/ergänzt Layer 1)

| Vorhaben | Überschreibt/Ergänzt |
|---|---|
| Bike-Tour / Action-Sport | Modus → **Einzelobjektiv** (statt 360°) bei gutem Licht; FPS → 60 für Slow-Mo-Option; FlowState → an, wichtigster Faktor; Verschlusszeit → 1/250–1/1000s für Bewegungsschärfe |
| Konzert / Event | Falls Nacht/Indoor: PureVideo erwägen; Anti-Flicker zwingend an (Bühnenlicht); FOV-Hinweis: 90° Linear für natürliche Perspektive |
| Natur & Landschaft | 360°-Modus meist sinnvoll (Flexibilität beim Reframing); FOV 80–95°; bei Wasser/Reflexionen EV-Korrektur erwägen |
| Architektur & Innenraum | 360°-Modus für Raumwirkung; Weißabgleich besonders wichtig bei Mischlicht (Fenster + Kunstlicht); FOV niedrig halten (<100°) gegen Verzerrung |
| Sternenhimmel / Astro | Modus → **Foto (RAW/.insp)**, nicht Video; Verschlusszeit 10–25s; Stativ zwingend; Hinweis: Stitching-Naht bei Sternenhimmel oft sichtbar, kaum vermeidbar |
| Interview / Vlog / Talking-Head | Einzelobjektiv-Modus; Sprachverbesserung (Audio) aktivieren; FOV 80–90° |
| Straßenszene / Street | 360°-Modus für nachträgliche Blickrichtungswahl; bei Nacht: Anti-Flicker wegen Straßenlaternen zwingend an |
| Wasser / Strand / Pool | Auf Lichtreflexionen achten, EV-Korrektur -0.3 bis -0.7 erwägen; bei Unterwasser-Anteilen: AquaVision-Hinweis einblenden |

---

## Layer 3 — Montage-Overlay (ergänzt Stativ-/Stabilisierungs-Empfehlung)

| Montage | Ergänzung im Ergebnis |
|---|---|
| Stativ (statisch) | Keine zusätzliche Stabilisierung nötig. FlowState kann ggf. aus bleiben. |
| Handheld | FlowState zwingend an. |
| Helm-Mount | FlowState an. Hinweis: mehr Mikro-Bewegung als Brust-Mount, Direction Lock erwägen. |
| Brust-Mount | FlowState an. Ruhigeres Bild als Helm. |
| Lenker-Mount (Bike) | FlowState an. Hinweis: Vibrationen vom Untergrund — Einzelobjektiv-Modus reduziert zusätzlichen Qualitätsverlust durch Reframing. |
| Unsichtbarer Selfie Stick | Nur im 360°-Modus sinnvoll — falls Vorhaben aus Layer 2 einen anderen Modus vorschlägt, Konflikthinweis anzeigen ("Diese Montage funktioniert nur im 360°-Modus"). |

---

## Output-Struktur (Ergebnis-Objekt)

**Hinweis Mehrsprachigkeit:** Alle Text-Werte unten (Strings) existieren als DE/EN-Paar, nicht als reiner String — z.B. `weißabgleich: { de: "Manuell 3200–4000K", en: "Manual 3200–4000K" }`. Numerische/technische Werte (ISO-Range, fps) sind sprachunabhängig und müssen nicht doppelt gepflegt werden.

```
{
  aufnahmemodus: string,        // "360°" | "Einzelobjektiv" | "Foto/Langzeitbelichtung"
  auflösung: string,
  fps: string,
  iso_range: string,
  verschlusszeit: string,
  weißabgleich: string,
  anti_flicker: boolean,
  flowstate_hinweis: string,
  stativ_empfehlung: string,
  fov_empfehlung: string | null,
  warnhinweise: string[],       // z.B. Sternenhimmel ohne Stativ, Selfie-Stick-Konflikt
  tipps: string[]                // 2-4 kombinierte Tipps aus allen drei Layern
}
```

## UI-Darstellung des Ergebnisses

Gleiches Karten-Layout wie die bestehende Szenen-Detailansicht im Guide (Settings-Grid + Tipps-Liste + ggf. Warn-Box). Konsistenz zwischen Guide und Planner beibehalten — fühlt sich wie ein Tool an, nicht wie zwei verschiedene.
