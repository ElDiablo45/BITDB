---
name: RadixRef
description: Tabla ASCII interactiva 0–255 con conversores bin/oct/dec/hex en HUD azul oscuro.
colors:
  signal-blue: "#4d8dff"
  action-navy: "#2456d6"
  action-edge: "#6ea1ff"
  diazo-ground: "#060b16"
  panel-night: "#0a1222"
  raised-bench: "#0e1830"
  bit-off-steel: "#1a2742"
  paper-ink: "#e8eef9"
  pure-white: "#ffffff"
  muted-steel: "#93a1c0"
  dim-engraving: "#8b9bc4"
  sky-confirm: "#7dd3fc"
  fault-red: "#f87171"
  hairline: "rgba(148, 184, 255, 0.16)"
  veil: "rgba(6, 11, 22, 0.92)"
typography:
  display:
    fontFamily: "'Chakra Petch', 'JetBrains Mono', ui-monospace, monospace"
    fontSize: "clamp(34px, 5vw, 58px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "0.01em"
  readout:
    fontFamily: "'Chakra Petch', 'JetBrains Mono', ui-monospace, monospace"
    fontSize: "88px"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.14em"
  meta:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
  field:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
  input:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "15px"
    fontWeight: 400
  marker:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "18px"
    fontWeight: 400
  cellglyph:
    fontFamily: "'Chakra Petch', 'JetBrains Mono', ui-monospace, monospace"
    fontSize: "22px"
    fontWeight: 600
  subtitle:
    fontFamily: "'Chakra Petch', 'JetBrains Mono', ui-monospace, monospace"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.15
  bitindex:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "9px"
    fontWeight: 400
rounded:
  sharp: "0px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "28px"
components:
  button-primary:
    backgroundColor: "{colors.action-navy}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.sharp}"
    padding: "11px 16px"
  button-primary-hover:
    backgroundColor: "{colors.signal-blue}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.muted-steel}"
    rounded: "{rounded.sharp}"
    padding: "9px 12px"
  input-field:
    backgroundColor: "{colors.panel-night}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.sharp}"
    padding: "11px 12px"
---

# Design System: RadixRef

## Overview

**Creative North Star: "The Blue Register Bench"**

RadixRef looks like a laboratory bench for bytes: a deep diazo-blue ground etched with a dot graticule, steel-blue hairline panels, engraved uppercase labels and one signal blue that only ever means "live". Density is high but ordered — a register map you can scan at speed, with a single readout module that holds the selected value at display scale. No marketing hero, no decoration: the tool is the surface.

The system refuses the generic white ASCII doc and the neon-hacker terminal. Dark is forced by the scene (debugging in a dim room, screen as lamp), blue is the user's pinned constraint translated from lime/green refs, and every decorative urge is spent in exactly one place: the digit cross-fade on selection.

**Key Characteristics:**
- Bench-instrument density with HUD registration marks (`+` corners, title block).
- One accent, two jobs: selection + live state, nowhere else.
- Engineered type pairing: Chakra Petch readout over JetBrains Mono data.
- Flat, square, hairline-ruled; depth comes from tonal layering, never shadows.

## Colors

Restrained strategy: tinted blue-black neutrals plus one signal blue; action navy is the AA-safe working end of the same hue.

### Primary
- **Signal Blue** (#4D8DFF): selection ring, active filter edge, live bit, focus. Used at ≤10% of any viewport; its rarity is the point.
- **Action Navy** (#2456D6, edge #6EA1FF): only solid fill carrying white text (primary button, skip link). Chosen because Signal Blue with white fails AA (3.2:1).

### Neutral
- **Diazo Ground** (#060B16): page ground with dot graticule. Never pure black — **The Tinted Black Rule.**
- **Panel Night** (#0A1222): panels, inputs, table cells.
- **Raised Bench** (#0E1830): hover layer, toast.
- **Bit-Off Steel** (#1A2742): unlit bit wells.
- **Paper Ink** (#E8EEF9): primary text.
- **Muted Steel** (#93A1C0): secondary text, values.
- **Dim Engraving** (#8B9BC4): micro-labels at 12px (raised from #5B6B8C to pass AA on Panel Night).
- **Hairline** (rgba(148,184,255,0.16)): all rules, borders, grid seams.

### Named Rules (optional, powerful)
**The One Accent Rule.** Signal Blue marks selection and live state only. It never fills illustration, never gradients, never glows.
**The Tinted Black Rule.** No `#000`, no neutral gray; every dark is blue-tinted, every gray is steel-tinted.

## Typography

**Display Font:** Chakra Petch (with JetBrains Mono fallback)
**Body Font:** JetBrains Mono (with system mono fallback)
**Label/Mono Font:** JetBrains Mono, uppercase, tracked — same family as body, distinguished by case + tracking, not a third face.

**Character:** Engineered, not editorial. The readout has an octagonal instrument voice; data stays in a workhorse mono with tabular numerals.

### Hierarchy
- **Display** (700, clamp(34px,5vw,58px), 1.02): page title only.
- **Readout** (700, 88px, 1): selected glyph in preview. Large text, 3:1 minimum.
- **Body** (400, 14px, 1.55): descriptions, values, max ~60ch.
- **Label** (500, 12px, 0.14em, uppercase): panel headers, field names, filter state. Floor is 11px; nothing functional ships below it.
- **Support roles** (same families, on-ramp): meta 11px (cell annotations, tags), field 13px (values, toast), input 15px (converter inputs), marker 18px (frame `+`), cellglyph 22px (table glyph), bitindex 9px (bit-position sublabels, exempt sub-caption).

### Named Rules (optional)
**The Two-Face Rule.** Chakra Petch for readout/display, JetBrains Mono for everything else. No third face, no Inter-as-display, no Space Mono/IBM Plex.

## Layout

Container 1180px, 28px gutters. Title block (flex, spec sheet right) → toolbar (search grows, filters wrap, live count full-width) → working grid `1fr / 340px` (table + sticky preview) → converter strip (4 columns) → footer. Breakpoints: 960px stacks preview below table and converters to 2 columns; 560px converters to 1 column, table max-height 420px. Spacing rhythm 8/12/16/28. Table is a seamless 1px-seam grid (gap over hairline ground), scrolls internally at 560px so the preview stays visible.

## Elevation & Depth

Flat by construction. No shadows anywhere — depth is conveyed by tonal layering (Ground → Panel → Raised) plus 1px hairlines and one inset selection ring. Motion is state feedback only (hover layer, focus ring, digit swap); `prefers-reduced-motion` disables it entirely.

### Named Rules (optional)
**The Flat-By-Default Rule.** Surfaces are flat at rest. Nothing lifts on hover; the bench gets lighter, never higher.

## Shapes

Square instrument language: 0px radius everywhere, 1px hairline borders, full-bleed seams inside grids, `+` registration marks pinned to the fixed frame. Bit wells are square; the readout is raw type, never badged or chipped. Sharp corners are the brand — rounding anything rounds nothing.

## Components

### Buttons
- **Shape:** square (0px), 1px stroke.
- **Primary:** Action Navy fill (#2456D6), white text, 11px padding; hover brightens. Sole white-on-color case, audited to AA.
- **Hover / Focus:** ghost buttons go Muted→Ink with Signal edge; every control shows a 2px Signal focus ring offset 2px.
- **Secondary / Ghost:** transparent, hairline stroke, Muted text; active filter takes Signal-soft fill + Signal edge + Ink text (depressed-toggle feel, no bevel).

### Chips
- **Style:** 1px hairline outline tag, Muted 11px tracked text (category tag in preview).
- **State:** static label only; selectable state lives on filter buttons, not chips.

### Cards / Containers
- No cards. Panels are flat hairline regions with engraved header rows; internal seams share the hairline token. **No nested cards, ever.**

### Inputs / Fields
- **Style:** Panel Night fill, hairline stroke, square, Ink 14–15px mono.
- **Focus:** Signal edge via focus-visible ring; invalid takes Fault Red edge + `aria-invalid`.
- **Error / Disabled:** error line under converters (`role=alert`); no disabled state in V1.

### Navigation
- In-page only: prev/next arrows in preview head, deep-links `#dec-N`, skip link. No nav bar in V1.

### Signature Component
**Readout module.** Giant Chakra Petch glyph, ID line (name + category tag), six copyable fields (DEC/HEX/OCT/BIN/CHAR/HTML), 8-cell bit diagram with bit-index sublabels, one-sentence provenance line, full-ficha copy. The bit diagram is the proof device: every value must be re-derivable from it.

### Splash Overlay
**Style:** veil scrim, square Panel Night card (430px max), animated bloub avatar at 132px, tracked kicker, subtitle line, one primary action. Shown once per 30 days via `radixref_seen_v1` cookie; Esc also dismisses. Clicking the avatar plays a squash bounce; reduced-motion freezes avatar keyframes and skips the bounce.

## Do's and Don'ts

Concrete guardrails from the built V1 and the chosen world.

### Do:
- **Do** keep Signal Blue ≤10% of any viewport — selection, live bit, focus, active edge.
- **Do** write every label in tracked uppercase mono at ≥11px (12px standard).
- **Do** prove every value twice: field + bit diagram must agree.
- **Do** copy from the exact visible string the user saw (no reformatting on copy).
- **Do** keep contrast AA: Ink/Muted/Dim on Panel/Ground, white only on Action Navy.

### Don't:
- **Don't** use pure black, neutral gray, gradients, glows, or rounded cards.
- **Don't** use Inter (any role), Space Mono, IBM Plex, or system serif/sans as display.
- **Don't** nest panels inside panels or badge the readout.
- **Don't** invent ASCII facts: control names, entities and ranges come from the table, never from decoration.
- **Don't** add motion beyond hover/focus/digit-swap; no entrances, no bounce easing.
