# Minimalist AV — Visual Design System
> Adapted from the V7 Go (v7labs.com) visual language for a luxury home cinema & smart home specialist brand. All values below are authoritative. Override any prior styling that contradicts this document.

---

## 1. Design Philosophy

Two alternating worlds — **Near-Black** and **Warm Off-White** — carry the entire page. No grays, no mid-tones used as backgrounds. Cards are barely-there dark panels on dark sections; clean white panels on light sections. Every surface uses border contrast, not shadow. Typography is the hero: a large-scale serif display type commands attention while a geometric sans handles all readable body copy.

---

## 2. Color System

### Dark Canvas (hero, CTA, testimonials, pain points)
| Token | Value | Use |
|---|---|---|
| `--dark-bg` | `#080a0c` | Section background |
| `--dark-surface` | `rgba(255,255,255,0.03)` | Card / panel fill |
| `--dark-border` | `rgba(255,255,255,0.08)` | Card border, dividers |
| `--dark-border-hover` | `rgba(255,255,255,0.18)` | Card border on hover |
| `--dark-text` | `#ffffff` | Primary headings |
| `--dark-muted` | `rgba(255,255,255,0.45)` | Body copy, subtitles |
| `--dark-faint` | `rgba(255,255,255,0.22)` | Captions, fine print |
| `--accent-dot` | `#f97316` | Orange accent dot, icon highlight |
| `--accent-gold` | `#C8A97A` | Warm gold — slider indicators, attribution rule |

### Light Canvas (bridge, services, process, FAQ, accreditation)
| Token | Value | Use |
|---|---|---|
| `--light-bg` | `#f8f7f4` | Section background |
| `--light-surface` | `#ffffff` | Card fill |
| `--light-border` | `rgba(0,0,0,0.08)` | Card border |
| `--light-border-hover` | `rgba(0,0,0,0.18)` | Card border on hover |
| `--light-text` | `#111111` | Primary headings |
| `--light-muted` | `#6b7280` | Body copy, subtitles |
| `--light-rule` | `rgba(0,0,0,0.07)` | Divider lines (FAQ) |

---

## 3. Typography

### Typefaces
| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / Headings | Martina Plantijn | Light (300) | All `<h1>`–`<h3>`, large statements |
| Display / Emphasis | Martina Plantijn | Medium (500) | Bold callouts, stat numbers |
| Body / UI | Plus Jakarta Sans | 300–500 | All body copy, labels, buttons, inputs |

> **Font files needed:** Martina Plantijn Medium (500) weight. Please upload the `.woff2` file to add it alongside the existing Light weight.

### Scale
| Role | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|
| Hero display | `clamp(3.4rem, 6vw, 5.8rem)` | 300 | `-0.03em` | `1.06` |
| Section heading | `clamp(2.4rem, 4.5vw, 4rem)` | 300 | `-0.025em` | `1.1` |
| Card heading | `clamp(1.3rem, 2vw, 1.55rem)` | 300 | `-0.02em` | `1.25` |
| Body copy | `1rem` (16px) | 300 | `-0.01em` | `1.85` |
| Label / eyebrow | `0.68rem` | 400 | `0.2em` | `1.4` |
| Caption / fine-print | `0.75rem` | 400 | `0.05em` | `1.5` |
| Button | `0.9375rem` (15px) | 500 | `0.04em` | `1` |
| Nav links | `0.8rem` | 400 | `0.12em` | `1` |

### Italic display quotes
Testimonials and pain-point quotes use `font-style: italic`, Martina Plantijn Light, `1.15rem`–`1.8rem`, `line-height: 1.65`.

---

## 4. Spacing & Layout

| Token | Value |
|---|---|
| Section vertical padding | `py-20 lg:py-36` (80px → 144px) |
| Section horizontal padding | `px-5 lg:px-16` |
| Content max-width | `max-w-[1400px] mx-auto` |
| Card gap | `gap-4` (16px) |
| Card padding (regular) | `p-7 lg:p-8` |
| Card padding (compact) | `p-6` |
| Base radius | `8px` (rounded-[8px] or rounded-lg) |

---

## 5. Components

### 5.1 Section Eyebrow Label (dark)
```
• LABEL TEXT
```
- Orange dot `#f97316` (1.5×1.5 rounded-full) + `text-white/45 text-[0.68rem] uppercase tracking-[0.2em] font-sans`
- Bottom margin: `mb-6`

### 5.2 Section Eyebrow Label (light)
```
— Label text.
```
- Short `w-6 h-px bg-[#C8A97A]` horizontal rule + `text-[#6b7280] text-sm font-sans font-light`
- Bottom margin: `mb-6`

### 5.3 Card — Dark Panel
```
bg: rgba(255,255,255,0.03)
border: 1px solid rgba(255,255,255,0.08)
border-radius: 8px
padding: 28px–32px
```
- Hover: border transitions to `rgba(255,255,255,0.18)` at 300ms `cubic-bezier(0.16, 1, 0.3, 1)`
- No shadow. No background change on hover.
- Inner content transforms: `scale(1.01) translateY(-2px)` on parent hover

### 5.4 Card — Light Panel
```
bg: #ffffff
border: 1px solid rgba(0,0,0,0.08)
border-radius: 8px
padding: 28px–32px
```
- Hover: border → `rgba(0,0,0,0.18)`, `box-shadow: 0 4px 20px rgba(0,0,0,0.06)` at 300ms

### 5.5 Image Container (inside card)
- `overflow-hidden rounded-[8px]` — images are flush to card edges; no internal padding around image
- Image `object-cover w-full h-full`
- No overlay gradient unless text is placed over image
- On hover: `opacity` 0.75→0.95 + `scale` 1.0→1.04 at 500ms ease-out

### 5.6 Button — Outlined Pill (dark sections)
```
border: 1px solid rgba(255,255,255,0.25)
border-radius: 9999px (pill)
padding: 12px 28px
color: #ffffff
font: Plus Jakarta Sans, 0.9375rem, weight 500
background: transparent
```
- Hover: `border-color rgba(255,255,255,0.6)`, `background rgba(255,255,255,0.05)` at 300ms
- Icon (ArrowRight, 14px): slides `translateX(3px)` on hover at 300ms

### 5.7 Button — Outlined Pill (light sections)
```
border: 1px solid rgba(0,0,0,0.2)
border-radius: 9999px
padding: 12px 28px
color: #111111
font: Plus Jakarta Sans, 0.9375rem, weight 500
background: transparent
```
- Hover: `border-color rgba(0,0,0,0.45)`, `background rgba(0,0,0,0.03)` at 300ms

### 5.8 Feature Tag / Chip
```
border: 1px solid rgba(255,255,255,0.12)   (dark) / rgba(0,0,0,0.1) (light)
border-radius: 9999px
padding: 4px 10px
font: Plus Jakarta Sans, 0.7rem, weight 400, tracking 0.05em, uppercase
color: rgba(255,255,255,0.55) (dark) / #6b7280 (light)
```

### 5.9 Form Inputs (dark)
```
background: rgba(255,255,255,0.05)
border: 1px solid rgba(255,255,255,0.09)
border-radius: 8px
padding: 14px 16px
color: #ffffff
font: Plus Jakarta Sans 15px weight 300
```
- Focus: border → `rgba(200,169,122,0.5)`, `box-shadow: 0 0 0 3px rgba(200,169,122,0.1)`

### 5.10 Navigation
```
position: fixed, top-0, full-width, z-50
initial bg: transparent
scrolled bg: rgba(8,10,12,0.97), backdrop-filter blur(12px)
logo: Martina Plantijn Light, 1.25rem, white
nav links: Plus Jakarta Sans, 0.8rem, uppercase, tracking 0.12em, white/65 → white on hover
CTA button: outlined pill (5.6 style), 12px 24px padding, text 0.8rem
transition: 400ms cubic-bezier(0.16,1,0.3,1)
```

### 5.11 Footer (dark)
```
background: #080a0c
border-top: 1px solid rgba(255,255,255,0.06)
Layout: logo + statement headline (left/top) | multi-column links (right/bottom)
Statement: Martina Plantijn Light, clamp(2rem,3.5vw,3rem), white, tracking -0.025em
CTA: outlined pill button below statement
Link columns: Plus Jakarta Sans, 0.78rem, rgba(255,255,255,0.5) → white on hover
Column headers: 0.68rem, uppercase, tracking 0.2em, white/30
```

---

## 6. Motion & Animation

### Global Easing
All interactive state transitions use: `cubic-bezier(0.16, 1, 0.3, 1)` at `300ms`.

### Scroll Reveal (viewport entry)
Every section heading, card grid, and significant block animates in on scroll:
```
initial: opacity 0, translateY 28px
final: opacity 1, translateY 0
duration: 700ms
easing: cubic-bezier(0.16, 1, 0.3, 1)
trigger: IntersectionObserver at 12% viewport intersection
once: true (disconnect after trigger)
```
Stagger grid children by `80ms` per index (cap at 6 items).

### Card Hover
```
border-color: 300ms cubic-bezier(0.16, 1, 0.3, 1)
inner transform: scale(1.01) translateY(-2px), 300ms cubic-bezier(0.16, 1, 0.3, 1)
image opacity/scale: 500ms ease-out
```

### Button Hover
```
border-color, background: 300ms cubic-bezier(0.16, 1, 0.3, 1)
ArrowRight icon: translateX(3px), 300ms cubic-bezier(0.16, 1, 0.3, 1)
```

### Testimonial Carousel
- Auto-advance every 6s
- Cross-fade: `opacity 0→1` over `1000ms cubic-bezier(0.16, 1, 0.3, 1)`
- Slide indicators: width 12px→24px + color shift at 400ms

### FAQ Accordion
- `max-height` transition: `0 → auto` via fixed large value, `500ms cubic-bezier(0.16, 1, 0.3, 1)`
- `Plus` icon rotates `0→45deg` at 300ms

---

## 7. Section Map

| Section | Canvas | Card style | Notes |
|---|---|---|---|
| Hero | Dark `#080a0c` | — | Full-bleed image, gradient overlay left side |
| Pain Recognition | Dark `#080a0c` | Dark panel | Icon + italic quote |
| Image Strip | — | — | Full-bleed photo, no overlay |
| Bridge | Light `#f8f7f4` | — | Text only, max-w 900px |
| Services | Light `#f8f7f4` | Light panel | Image top + content below |
| Process | Light `#f8f7f4` | Light panel | Image + step number overlay |
| Testimonials | Dark `#080a0c` | — | Full-bleed image carousel |
| Accreditation | Light `#f8f7f4` | — | Logo row, grayscale |
| FAQ | Light `#f8f7f4` | — | Divider-only, no card shape |
| CTA / Form | Dark `#080a0c` | — | Radial ring decoration |

---

## 8. Absolute Bans
- No drop shadows (box-shadow: none) except the subtle `0 4px 20px rgba(0,0,0,0.06)` on light card hover
- No solid filled buttons (mahogany, olive, or any opaque fill) — outlined pill only
- No gray backgrounds (no `#f0f0f0`, `#e5e5e5`, `#f8f8f8`) — only `#f8f7f4` for light and `#080a0c` for dark
- No border-radius above 8px for cards (pill shape reserved for buttons/chips only)
- No inline comments in code describing what the code does
- Sub-15px text only permitted for: eyebrow labels, chip tags, fine print / legal copy
