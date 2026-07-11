# SAGANZAM — Project Guide

Website for the fur/coat atelier "Саган Зам" (Sagan Zam). React frontend implementing a Figma design.

## Source of Truth

The Figma file is the **single source of truth** for all visual decisions — layout, spacing, typography, color, and imagery.

- File: 🌐 SAGAN ZAM 2026 (САЙТ)
- URL: https://www.figma.com/design/GHGNw1Up8cK0cesUz1CdQg/
- File key: `GHGNw1Up8cK0cesUz1CdQg`
- Page: "Дизайн сайта" → frame **"Website"** (there are two near-duplicate Website frames in the file — confirm with the designer which is canonical before building a section if unsure)
- Style guide: "Design system" frames on the same page (color palette, type scale, spacing rules, button/icon/card specs)

## Hard Rules

1. **Never redesign.** Build exactly what's in Figma. Don't "improve," simplify, or add opinions on layout.
2. **Never change spacing.** Use the values pulled from Figma (see below), not approximations.
3. **Never change typography.** Font families, sizes, weights, tracking, and line-height must match Figma exactly.
4. **Never change colors.** Use the documented palette only — no substituting "close enough" colors.
5. **Never replace images.** Use the actual image assets exported from Figma, not placeholders or stock substitutes.
6. **If anything is unclear or missing from the design, ask before implementing.** Don't guess at undefined states (hover, empty, error, mobile) — ask.
7. **Build reusable components.** Don't duplicate markup for repeated patterns (buttons, product cards, section headings, form inputs) — extract a component the first time a pattern repeats.
8. **Desktop first.** Build and get the desktop layout approved before touching responsive/mobile behavior.
9. **Responsive only after desktop is approved.** Do not add breakpoints preemptively.
10. **After each section, compare the implementation against Figma before continuing** — pull a screenshot of the built section and the Figma frame side by side and check spacing, type, and color before starting the next section.

## Design Tokens (from Figma "Design system" pages)

### Colors

| Token | Hex | Usage |
|---|---|---|
| Background | `#FFFBEF` | Page background |
| Text | `#491A0A` | Primary text |
| Text secondary | `#A48B7C` | Muted text, large Cormorant headings |
| Text secondary (alt) | `#E4D9CC` | Second muted tone — swatch/label mismatch in the source doc, confirm in Figma before use |
| Product card background | `#FFFFFF` | Product cards |
| Button border | `#491A0A` in the built component (written spec says `#1C1B1A`) — confirm which is correct with the designer |

No bright accent color — palette is neutral/warm; photography (chocolate/sable brown, beige/cashmere, monochrome black) carries most of the color weight.

### Typography

Two families: **Cormorant Garamond** (italic, display/editorial) and **Manrope** (UI/body).

| Style | Font | Size | Tracking | Line-height | Use |
|---|---|---|---|---|---|
| H1 | Cormorant Garamond Italic | 60–80px | -3% | 90% | Hero headline |
| H2 | Manrope Regular | 48px | -4% | 115% | Large section titles |
| H3 | Manrope Regular | 36px | -2% | 120% | Sub-block titles |
| H4 | Cormorant Garamond Medium Italic | 32px | -3% | 90% | Decorative block names |
| H5 | Manrope Medium | 20px | -2% | 115% | Subtitles, buttons |
| Body | Manrope Regular/Medium | 18–20px | 0% | ~123–130% | Main copy |
| Body small | Manrope Regular | 14px | 0% | 130% | Fine print |

### Spacing

- Desktop grid: 1440px frame, 12 columns, content width 1240px, side margins 100px
- Space below an H2: 120px
- Space between major sections: 240px (notes also mention 160–200px between some blocks — confirm which applies per section if ambiguous)
- Text container max-width: 580px (~5 columns) — long copy never exceeds this
- Section/step numbering: `(01)`, `(02)` in Manrope

## Reusable Components to Build

- `Button` — pill, bordered, optional icon (Default / Variant2 / Variant3 from Figma)
- `SectionHeading` — center/left alignment variants
- `TextInput` — underline style, label above, optional trailing icon
- `Icon` — bag, like, place, phone, telegram
- `ProductCard` — image + name + price
- `ProductGrid` — 4-up grid wrapper
- `FeatureTile` — icon/image + short caption
- `BestsellerBadge` — decorative bestseller mark
- `SiteHeader` — logo + nav + CTA
- `SiteFooter` — logo + nav columns + CTA
- `ConsultationForm` — inputs + submit + consent checkbox
- `Section` — enforces the standard grid/margin/spacing rules so individual sections don't redeclare them

## Workflow

1. Pull the relevant Figma frame/section before implementing it.
2. Implement desktop layout only.
3. Screenshot the built section and compare against the Figma frame (spacing, type, color, imagery).
4. Flag any mismatch or ambiguity before moving to the next section.
5. Only after all desktop sections are approved, implement responsive breakpoints.
