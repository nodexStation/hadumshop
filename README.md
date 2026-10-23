# HADUM — Website

One-page website for **HADUM (হ্যাডাম)**, a premium lifestyle brand based in Khulna, Bangladesh.

Positioning: *Rooted in heritage. Designed for modern life.* — heritage craft, modern minimal design, premium craftsmanship.

## Files
| File | Purpose |
|---|---|
| `index.html` | Hero, Our Story, The Craft, Collection (coming-soon teasers), How to Order, FAQ, contact |
| `styles.css` | Warm cream / espresso / gold styling, responsive, no frameworks |
| `script.js` | Mobile menu, contact-form validation + mailto compose to hadumshop@gmail.com, footer year |
| `animations.js` | GSAP hero intro, floating-card drift, scroll reveals (progressive enhancement) |
| `favicon.svg` | HADUM "H" mark |

## Design
- Palette: cream `#faf6ef`, espresso `#1c1917`, gold `#a67c2e` / `#926820`, soft gold `#c9a24b`, line `#ddcdb4` — same family as the @hadumshop Instagram relaunch slides.
- Type: Fraunces (serif display, heritage feel) + Inter (modern body).
- Hero visual: hand-built inline SVG — heritage arches inside slowly turning rings, gold H core, floating info cards. CSS/SVG + GSAP only. **No Three.js / WebGL** (Ahmed's standing preference).
- Honesty rule: no invented products, prices, testimonials, delivery or payment terms. Collection section is a coming-soon teaser; ordering steps say payment/delivery are confirmed personally in the Instagram DM — exactly as the shop operates today.
- Order CTA: Instagram DM deep link `https://ig.me/m/hadumshop`.

## Run locally
```bash
cd ~/workspace/hadumshop-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Contact
- Instagram: https://www.instagram.com/hadumshop/
- Email: hadumshop@gmail.com
- Based in: Khulna, Bangladesh
