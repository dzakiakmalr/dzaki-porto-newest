# Component Patterns — Claymorphism + Glassmorphism

Ini bagian paling penting dari identitas visual Langganin. Semua komponen di portfolio harus mengikuti dua sistem material ini secara konsisten.

## Aturan pemisahan Clay vs Glass

> **Clay = hal yang disentuh/diklik.** Button, card project, badge skill, toggle, item interaktif.
> **Glass = hal yang melayang.** Navbar, modal, dropdown, tooltip besar.

**Jangan pernah mencampur** clay dan glass pada elemen yang sama. Sebuah card project adalah clay (solid + soft shadow). Navbar adalah glass (translucent + blur + border tipis).

## Resep Claymorphism

Permukaan "puffy", seolah ditekan keluar dari clay. Tidak ada border 1px — pemisahan visual murni dari shadow dua arah (terang dari kiri-atas, gelap dari kanan-bawah).

```css
/* Resting state */
@utility shadow-clay {
  box-shadow: -6px -6px 16px rgba(255,255,255,0.85), 8px 8px 22px rgba(15,23,42,0.08);
}

/* Hover state — lift halus */
@utility shadow-clay-hover {
  box-shadow: -7px -7px 18px rgba(255,255,255,0.9), 10px 10px 26px rgba(15,23,42,0.10);
}

/* Active/pressed — inset, seolah ditekan masuk ke clay */
@utility shadow-pressed {
  box-shadow: inset 4px 4px 10px rgba(15,23,42,0.07), inset -4px -4px 10px rgba(255,255,255,0.7);
}

/* Gradient fill halus untuk permukaan clay */
@utility clay-gradient {
  background: linear-gradient(135deg, #f8f6f4 0%, #f1edea 100%);
}

/* Icon badge di dalam clay card — gradient brand lembut */
@utility clay-icon {
  background: linear-gradient(135deg, #fdf1ea 0%, #f6cfb6 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.85), 0 6px 14px rgba(15,23,42,0.08);
}
```

**Radius clay**: selalu besar. Card = `rounded-card` (24px). Button/badge = `rounded-pill` (9999px). Tidak pernah kotak sudut tajam.

## Resep Glassmorphism

Chrome yang melayang di atas konten, dengan blob terracotta bersinar tembus di baliknya.

```css
@utility glass-panel-sm {
  background: var(--color-glass-fill);
  border: 1px solid var(--color-glass-border);
  backdrop-filter: blur(12px) saturate(140%);
}

@utility glass-panel {
  background: var(--color-glass-fill);
  border: 1px solid var(--color-glass-border);
  backdrop-filter: blur(20px) saturate(160%);
}

@utility glass-panel-lg {
  background: var(--color-glass-fill);
  border: 1px solid var(--color-glass-border);
  backdrop-filter: blur(32px) saturate(180%);
}

/* Navbar — lebih opaque supaya konten di bawah tidak mengganggu kontrol nav */
@utility glass-panel-strong {
  background: rgba(255,255,255,0.88);
  border: 1px solid var(--color-glass-border);
  backdrop-filter: blur(20px) saturate(160%);
}

/* Dropdown di atas konten padat — solid, tidak translucent */
@utility glass-panel-solid {
  background: #ffffff;
  border: 1px solid var(--color-glass-border);
}
```

**Elemen wajib**: border 1px putih (`--color-glass-border`) di setiap panel glass. Ini yang membuat efek glass "terjual" — tanpa border ini, efek blur saja terasa kurang jelas.

## Signature move: brand-glow blob

Satu blob radial gradient terracotta opacity rendah, blur besar, diletakkan **di belakang** panel glass (navbar, hero). Efek glass akan mem-blur cahaya oranye ini sehingga warna "bersinar tembus" alih-alih dicat langsung.

```css
@utility bg-blob-a {
  position: fixed;
  top: -10%;
  left: -10%;
  width: 60vw;
  height: 60vw;
  background: var(--color-brand-glow);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
}

@utility bg-blob-b {
  position: fixed;
  bottom: -15%;
  right: -10%;
  width: 50vw;
  height: 50vw;
  background: var(--color-brand-glow);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
}
```

Pasang di root layout:
```tsx
<div className="bg-blob-a" aria-hidden />
<div className="bg-blob-b" aria-hidden />
```

Untuk hero section portfolio, blob ini diposisikan absolute (bukan fixed) di belakang konten hero — lihat `03-PAGE-STRUCTURE.md`.

## Pola Button

Tidak ada 1 komponen `Button.tsx` generik di Langganin — button di-style manual per konteks tapi dengan pola Tailwind yang konsisten. Untuk portfolio, buat komponen `Button.tsx` reusable dengan variant berikut:

**Primary CTA** (misal: "Download CV", "Hire Me", "Contact Me"):
```
rounded-pill bg-brand-500 px-7 py-3 text-sm font-bold text-white
shadow-clay transition-[transform,box-shadow] duration-200 ease-out
hover:-translate-y-[1px] hover:shadow-clay-hover
```

**Secondary/ghost** (misal: "View Projects", link nav):
```
rounded-pill px-4 py-2 text-sm font-semibold text-text-muted
hover:bg-clay-100 hover:text-text
```

**Pattern kunci**: pill radius selalu, lift halus (`-translate-y-[1px]`) DIPASANGKAN dengan shadow escalation saat hover — bukan cuma ganti warna.

## Pola Card

Untuk project card, skill card, about card:
```
rounded-card bg-surface p-6 shadow-md
```
Untuk card yang lebih "clay" (interaktif, bisa diklik untuk buka detail project):
```
rounded-card clay-gradient p-6 shadow-clay
transition-[transform,box-shadow] duration-200 ease-out
hover:-translate-y-1 hover:shadow-clay-hover
```

## Pola Badge (skill tags, tech stack tags)

Meniru `CategoryBadge` Langganin — pill dengan warna dinamis per kategori:
```tsx
<span
  className="inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-semibold"
  style={{ backgroundColor: `${color}22`, color }}
>
  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
  {label}
</span>
```
Ini pengecualian yang didokumentasikan untuk pakai inline style — dipakai karena warna per kategori (misal: React = biru, Node = hijau) dinamis dan tidak masuk akal di-hardcode sebagai utility class satu-satu.

## Pola Navbar

Meniru `LandingNav` Langganin: fixed di top, `glass-panel-strong`, isi logo di kiri, nav links di tengah/kanan, CTA button pill di paling kanan. Di mobile, collapse jadi hamburger yang membuka `glass-drawer` (background hampir solid `rgba(255,255,255,0.96)`).

## Pola Footer

Sederhana, TANPA glass/clay — cukup flex row dengan border-top saja:
```
border-t border-clay-200 py-8 flex flex-col sm:flex-row justify-between items-center gap-4
```
Logo/nama di kiri, social links (icon Lucide) di kanan.

## Ikon

**Lucide React** eksklusif. Ukuran kecil dan spesifik: `size={14}` sampai `size={22}`. Jangan pakai default 24px — ini bagian dari kesan "compact, dense UI" khas Langganin, meskipun portfolio bisa sedikit lebih lega/spacious dibanding dashboard SaaS.
