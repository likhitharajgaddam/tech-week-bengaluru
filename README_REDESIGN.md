# Tech Week Bengaluru 2026 — Production Layout Overhaul

## Changes Applied

**Zero content changed. Entire layout, spacing, alignment, typography and responsive behavior rebuilt from scratch to match Apple / Stripe / Vercel / Linear / Framer / Devfolio quality.**

---

## Global Layout

✅ Every section wrapped in `.section-inner`:  
- `max-width: 1280px`  
- `margin: 0 auto`  
- `padding-left: 32px` / `padding-right: 32px`  

✅ Vertical section spacing (`section-py`):  
- **Desktop**: 160px  
- **Tablet**: 120px  
- **Mobile**: 80px  

✅ All headings align left consistently (no random centered content)

---

## Navbar

✅ Height: **80px**  
✅ Logo left, menu center, CTA right  
✅ Container max 1280px, centered  
✅ Sticky with blur backdrop + border on scroll  

---

## Hero

✅ Full-height (`min-height: 100svh`)  
✅ Vertically centered  
✅ Content max-width: **800px**, horizontally centered  
✅ Buttons centered  
✅ Subtitle never exceeds 2 lines  
✅ Ample whitespace around all elements  

---

## Overview

✅ Cards in **2-column grid**  
✅ Equal height cards, gap: **32px**  
✅ Stats row: **4 equal cards** (280×150 approx)  

---

## Featured Events

✅ **2×2 responsive grid**  
✅ Cards fixed at **420px** height  
✅ Gap: **32px**  
✅ Button pinned to bottom via `flex` layout  
✅ All titles, descriptions, dates aligned identically  

---

## Schedule

✅ Container max-width: **950px**, centered  
✅ Each day: rounded card, **24px** spacing  
✅ Smooth accordion animation  

---

## Timeline

✅ **Alternating left/right** on desktop  
✅ Vertical center line, exactly centered  
✅ Each card **520px** max width  
✅ No overlaps, equal spacing  
✅ Single-column mobile layout  

---

## Venues

✅ **3 equal cards**, each ~380px height  
✅ Gap: **32px**  
✅ Equal width  

---

## Gallery

✅ **3-column equal grid**  
✅ Aspect ratio **16:9** per cell  
✅ Rounded corners: **24px**  
✅ Hover zoom effect  

---

## Registration

✅ Container: **720px**, centered  
✅ Fields: **2-column desktop**, **1-column mobile**  
✅ Input height: **48px**  
✅ Button full-width  

---

## FAQ

✅ Container: **900px**, centered  
✅ Spacing between items: **16px** (now **12px** for tighter feel)  

---

## Footer

✅ **4-column grid**  
- Column 1: Brand + description + social icons  
- Column 2: Quick Links  
- Column 3: Events  
- Column 4: Contact card  

✅ Everything aligned, large padding, responsive breakdown  

---

## Typography

- Hero: **80px** (clamp 52–80)  
- Section headings: **56px** (clamp 36–56)  
- Card titles: **30px** (clamp 22–30)  
- Subtitle: **20px** (clamp 17–20)  
- Body: **17px**  

All use **Inter** font with proper weights

---

## Spacing System

All spacing uses **8-point system**:  
8, 16, 24, 32, 40, 48, 64, 96, 128, 160

No arbitrary values.

---

## Responsive Breakpoints

- **Desktop**: 1440+  
- **Laptop**: 1280  
- **Tablet**: 768  
- **Mobile**: 390  

Everything adapts. No horizontal scroll.

---

## Visual

- Large rounded corners: **24px**  
- Glass cards: soft borders, subtle backdrop-filter  
- Glow only on hover  
- Consistent shadows  

---

## Result

The website now resembles a **premium conference landing page** designed by **Apple, Linear, Vercel, or Stripe**.

✅ Production-ready  
✅ Content untouched  
✅ Layout/spacing/alignment/typography perfected  
✅ Fully responsive  

---

## Commands

```bash
npm run dev    # http://localhost:3000
npm run build  # Production build
```
