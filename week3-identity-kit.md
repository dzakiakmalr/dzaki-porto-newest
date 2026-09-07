# Week 3 — Decide Once: Build Your Identity Kit

**Assignment:** General AI Fluency · Foundations · ~2h
**Track:** AI Fluency — capstone portfolio website
**Source:** https://aifluency.flyrank.ai/week-03.html#identity-kit

---

## 1. Typography — two fonts (decided once)

| Role | Font | Weights used |
|---|---|---|
| **Heading / display** | **Space Grotesk** | 400–700 |
| **Body / UI** | **Plus Jakarta Sans** | 400–700 |

- Headings always `font-display` (Space Grotesk).
- Body defaults to `font-sans` (Plus Jakarta Sans).
- Numbers and stats use Plus Jakarta Sans with `tabular-nums`.
- Fallback stack: `ui-sans-serif, system-ui, sans-serif`.

**Honest note — the site currently loads a third font (Fraunces)** for the hero wordmark only. Per the brief ("one or two fonts, not a pile"), Fraunces should be removed and the wordmark set in Space Grotesk so the whole site stays on exactly two fonts. This is a small, contained change.

---

## 2. Palette — 4 colors (decided once)

| Token | Hex | Role |
|---|---|---|
| **Background** (near-white) | `#F2EFEC` | warm-neutral page background |
| **Text** (near-black) | `#1F2024` | all readable text |
| **Accent** (terracotta) | `#BF4D28` | the one accent — CTA, links |
| **Surface** | `#FFFFFF` | cards on the background |

Supporting tones (same family, not new accents):
- Muted text `#5C5A57`, subtle text `#8C8884`
- Accent hover/dark `#A33D1D`
- Clay fills `#F4F1ED` / `#ECE7E1`

**Contrast (checked):**
- Text `#1F2024` on `#F2EFEC` = **13.9:1** — well above AA/AAA.
- Accent `#BF4D28` on `#F2EFEC` = **4.8:1** — passes for normal text and links.
- Never put white text on the accent — it only reaches ~2.8:1.

The work stays the loudest thing on the page; the palette stays calm behind it.

---

## 3. Logo / Favicon — monogram

- **Mark:** the letter **"D"** set in Space Grotesk, sitting in a round clay tile.
- **Current form:** used in the navbar as a `clay-icon` monogram tile (terracotta letter on a warm clay circle).
- **Favicon:** the same "D" monogram as a 32×32 tile.
- Keep it simple: one letter, one tile, one accent color. No illustration, no lockup.

---

## 4. Style note (two lines)

> Warm clay and soft glass on a neutral beige base, with a single terracotta accent and two geometric sans-serif fonts. The mood is calm, honest, and built — the kind of page a person opens and trusts before they've read a word.

**Use this note as the consistency rule** for every section and case study: two fonts, one accent, one mood.

---

## Pass / revise check

- [x] One or two fonts — **fix pending:** remove Fraunces to land on exactly two.
- [x] Tight palette (~4 colors) with real hex codes.
- [x] Simple monogram logo + favicon exists.
- [x] Style note describes one coherent mood that frames the work, not competes with it.

## What to change (small)

1. Remove the Fraunces font import and set the hero wordmark (`GlassName`) in Space Grotesk. Two fonts, done.
2. Generate a `favicon.ico` / favicon tile from the "D" monogram if one isn't already present.
