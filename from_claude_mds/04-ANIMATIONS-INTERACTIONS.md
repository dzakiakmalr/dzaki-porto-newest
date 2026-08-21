# Animations & Interactions

Prinsip Langganin: animasi **minimal dan purposeful**, bukan showcase animasi berlebihan. Portfolio boleh sedikit lebih ekspresif (karena tujuannya menunjukkan skill/kreativitas), tapi tetap pertahankan karakter "halus, tidak berlebihan" ini sebagai default sebelum menambah animasi ekstra.

## Scroll reveal (Framer Motion)

Satu komponen reusable `Reveal.tsx`, dipakai untuk semua section saat masuk viewport:

```tsx
"use client";
import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
}: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

Untuk grid card (misal project bento grid), stagger tiap card dengan `delay={i * 0.05}`.

**Aturan**: `viewport={{ once: true }}` — animasi hanya sekali saat pertama masuk viewport, tidak berulang setiap scroll naik-turun.

## Hover micro-interactions (CSS/Tailwind, bukan JS)

- Card & button: `hover:-translate-y-1` (card) atau `hover:-translate-y-[1px]` (button), dipasangkan dengan shadow escalation (`shadow-clay` → `shadow-clay-hover`)
- Durasi transisi: 200–300ms, `ease-out`
- Transition property spesifik, bukan `transition-all`: `transition-[transform,box-shadow]`

## Pressed/active state

Shadow berubah jadi inset (`shadow-pressed`) alih-alih perubahan warna — mempertahankan kesan fisik "ditekan ke dalam clay":
```
active:shadow-pressed active:translate-y-0
```

## Loading skeleton (jika ada data fetching, misal CMS untuk project)

```css
@utility animate-shimmer {
  animation: shimmer 1.5s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```
Diterapkan pada elemen `bg-clay-200` dengan gradient sweep diagonal, dibentuk mengikuti layout asli (bukan skeleton generik kotak-kotak).

## Focus states (accessibility, wajib)

Semua elemen interaktif harus punya visible focus ring:
```
focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none
```

## Aturan hover di touch device

Hover state hanya untuk desktop. Di touch device, elemen interaktif harus tetap punya tap state yang jelas (misal langsung ke `shadow-pressed` on `:active`) tanpa bergantung pada hover.

## Yang TIDAK boleh dipakai

- Parallax scroll berlebihan
- Animasi infinite loop yang mencolok (kecuali shimmer skeleton dan chat-dot-style indicator jika relevan)
- Cursor-follow effect / custom cursor yang mengganggu
- Page transition yang lambat (>400ms) saat navigasi antar section/halaman
