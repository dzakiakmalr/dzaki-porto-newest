# Design Tokens

Diambil langsung dari `app/globals.css` project Langganin (Tailwind v4, CSS-first config via `@theme`). Gunakan nilai-nilai ini persis di project portfolio — jangan diubah kecuali diminta user secara eksplisit.

## Warna

| Token | Nilai | Kegunaan |
|---|---|---|
| `--color-brand-50` | `#FBE4D8` | wash brand paling lembut |
| `--color-brand-100` | `#F7D4C2` | background icon, hover wash |
| `--color-brand-400` | `#EE8A66` | highlight |
| `--color-brand-500` | `#E26B43` | **primary terracotta-orange** — CTA, nav aktif |
| `--color-brand-600` | `#C95A36` | hover/pressed state |
| `--color-brand-glow` | `rgba(226,107,67,0.18)` | radial glow signature di belakang glass |
| `--color-bg` | `#F2EFEC` | background halaman (warm-neutral gray) |
| `--color-bg-elevated` | `#EAE6E0` | elevasi section |
| `--color-surface` | `#FFFFFF` | background card |
| `--color-surface-soft` | `#FAF8F6` | input, search bar |
| `--color-clay-100` | `#F4F1ED` | fill interaktif clay |
| `--color-clay-200` | `#ECE7E1` | clay lebih dalam / hover |
| `--color-text` | `#1F2024` | teks utama |
| `--color-text-muted` | `#5C5A57` | teks sekunder |
| `--color-text-subtle` | `#8C8884` | placeholder/disabled |
| `--color-success` | `#2F8F5E` | status positif |
| `--color-warning` | `#C77B1E` | status peringatan |
| `--color-danger` | `#B43C2C` | status bahaya/hapus |
| `--color-info` | `#3D6FCC` | info |
| `--color-glass-fill` | `rgba(255,255,255,0.62)` | background panel glass |
| `--color-glass-border` | `rgba(255,255,255,0.75)` | border tepi glass (1px, ini yang "menjual" efek glass) |

Untuk portfolio, warna status (success/warning/danger/info) kemungkinan tidak banyak dipakai — tapi tetap definisikan agar konsisten jika perlu badge status (misal: "Available for work" = success, "In progress" = warning).

### Hierarki kedalaman 4 layer

Tidak ada hue yang sama antar layer — ini penting untuk kesan depth:
- **L1 page** → `--color-bg` (`#F2EFEC`)
- **L2 clay** → `--color-clay-100` / `--color-clay-200`
- **L3 card** → `--color-surface` (putih solid)
- **L4 glass** → putih translucent di atas blob brand-glow

## Tipografi

- **Heading/display**: `Space Grotesk`, weight 600–700, via `next/font/google`, variable `--font-space` → expose sebagai `--font-display`
- **Body/UI**: `Plus Jakarta Sans`, weight 400–500, via `next/font/google`, variable `--font-jakarta` → expose sebagai `--font-sans`
- **Angka/harga/statistik** (misal: "5+ years experience", "20+ projects"): Plus Jakarta Sans dengan class `tabular-nums`, weight 600 — supaya kolom angka rapi sejajar
- Fallback stack: `ui-sans-serif, system-ui, sans-serif`

Setup di `lib/fonts.ts` (copy pola ini):
```ts
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const fontVariables = `${space.variable} ${jakarta.variable}`;
```

Terapkan `fontVariables` di `<html className={...}>`, body pakai `font-sans`, heading pakai class `font-display` secara eksplisit.

## Border Radius

- `--radius-card: 24px` → Tailwind class `rounded-card` — dipakai untuk semua card (project card, about card, contact card)
- `--radius-pill: 9999px` → Tailwind class `rounded-pill` — dipakai untuk SEMUA button dan badge
- Radius ad-hoc lebih kecil untuk elemen kecil di dalam card: `rounded-[14px]`, `rounded-[12px]`, `rounded-[8px]`, `rounded-2xl`

**Aturan**: tidak ada sudut tajam (0px atau 4px) di mana pun. Minimal radius yang dipakai adalah `rounded-[8px]`.

## Shadow

Base shadow (netral, berbasis slate, BUKAN warna hangat/brown):
```css
--shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.04);
--shadow-sm: 0 4px 12px rgba(15, 23, 42, 0.06);
--shadow-md: 0 10px 28px rgba(15,23,42,0.08), 0 2px 6px rgba(15,23,42,0.04);
--shadow-lg: 0 24px 60px rgba(15,23,42,0.10), 0 4px 12px rgba(15,23,42,0.04);
```

Clay shadow (lihat detail resep di `02-COMPONENT-PATTERNS.md`):
```css
/* resting */
--shadow-clay: -6px -6px 16px rgba(255,255,255,0.85), 8px 8px 22px rgba(15,23,42,0.08);
/* hover */
--shadow-clay-hover: -7px -7px 18px rgba(255,255,255,0.9), 10px 10px 26px rgba(15,23,42,0.10);
/* pressed/active */
--shadow-pressed: inset 4px 4px 10px rgba(15,23,42,0.07), inset -4px -4px 10px rgba(255,255,255,0.7);
```

## Dark Mode

Tidak diimplementasikan di Langganin. Portfolio **default light-mode only**, kecuali user secara eksplisit minta dark mode ditambahkan sebagai fitur baru (bukan porting dari Langganin, karena tidak ada referensinya).

## Breakpoints

Pakai default Tailwind, tidak ada custom breakpoint:
- `sm:` 640px
- `lg:` 1024px

Target device: ≥360px (mobile kecil) sampai ≥1280px (desktop). Desain mobile-first, uji di lebar 360px, 768px, dan 1280px minimal.

## Setup di globals.css (portfolio)

Copy struktur `@theme` block ini ke `app/globals.css` project portfolio (sesuaikan nama font variable jika beda):

```css
@import "tailwindcss";

@theme {
  --color-brand-50: #FBE4D8;
  --color-brand-100: #F7D4C2;
  --color-brand-400: #EE8A66;
  --color-brand-500: #E26B43;
  --color-brand-600: #C95A36;
  --color-brand-glow: rgba(226,107,67,0.18);

  --color-bg: #F2EFEC;
  --color-bg-elevated: #EAE6E0;
  --color-surface: #FFFFFF;
  --color-surface-soft: #FAF8F6;
  --color-clay-100: #F4F1ED;
  --color-clay-200: #ECE7E1;

  --color-text: #1F2024;
  --color-text-muted: #5C5A57;
  --color-text-subtle: #8C8884;

  --color-success: #2F8F5E;
  --color-warning: #C77B1E;
  --color-danger: #B43C2C;
  --color-info: #3D6FCC;

  --color-glass-fill: rgba(255,255,255,0.62);
  --color-glass-border: rgba(255,255,255,0.75);

  --radius-card: 24px;
  --radius-pill: 9999px;

  --font-display: var(--font-space), ui-sans-serif, system-ui, sans-serif;
  --font-sans: var(--font-jakarta), ui-sans-serif, system-ui, sans-serif;
}
```

Lanjutkan dengan `@utility` block untuk shadow-clay, glass-panel, bg-blob, bg-dots, animate-shimmer — lihat `02-COMPONENT-PATTERNS.md` dan `04-ANIMATIONS-INTERACTIONS.md` untuk definisi lengkapnya.
