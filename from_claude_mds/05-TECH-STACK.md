# Tech Stack Rekomendasi

Agar konsisten dengan cara Langganin dibangun (bukan cuma tampilannya), pakai stack yang sama atau setara.

## Proses pemilihan (Minggu 4, lihat `00-CAPSTONE-BRIEF.md`)

Program secara eksplisit meminta stack dipilih dengan cara "3 opsi + trade-off", bukan menerima 1 rekomendasi begitu saja. Next.js + Tailwind v4 di bawah ini adalah **pilihan yang sudah diputuskan** (karena Dzaki sudah familiar coding dan sedang magang sebagai Frontend AI Engineer — konsisten dengan skill di CV), tapi tetap dokumentasikan alasan "kenapa bukan dua opsi lain" agar rationale Minggu 4 valid:

| Opsi | Ringkasan | Kenapa dipilih/tidak |
|---|---|---|
| **No-code (Carrd/Framer)** | Drag-and-drop, publish cepat | Ditolak — Dzaki sudah bisa coding dan portofolio ini juga jadi bukti skill Next.js/TypeScript yang diklaim di CV; no-code tidak menunjukkan itu |
| **Plain HTML/CSS + AI, host gratis** | Paling sederhana, tanpa build step | Ditolak sebagai utama — tapi ini rute default program untuk pemula; Dzaki melewatinya karena sudah punya pengalaman Next.js nyata dari Merpati Solo Bakery & Langganin |
| **Next.js + Tailwind v4 (dipilih)** | Framework yang sama dengan Langganin, konsisten dengan CV | Cocok karena: (1) bisa di-maintain — Dzaki sudah pakai stack ini di 2 project nyata, (2) menampilkan kerja dengan cara yang tepat (component architecture, bukan cuma HTML statis), (3) portofolio itu sendiri jadi bukti tambahan skill Next.js |

**Catatan jujur**: pilih Next.js di sini agak lebih "powerful daripada perlu" untuk sekadar portofolio statis — trade-off yang diterima karena portofolio ini sekaligus jadi demonstrasi skill Next.js yang relevan dengan role Frontend AI Engineer, bukan cuma tempat menaruh konten.

## Wajib (untuk konsistensi visual/DX)

| Layer | Pilihan |
|---|---|
| Framework | Next.js (App Router) — versi terbaru stabil |
| Bahasa | TypeScript, strict mode |
| Styling | **Tailwind CSS v4**, CSS-first config (`@theme`/`@utility` di `globals.css`) — JANGAN buat `tailwind.config.js/ts` terpisah |
| Component library | **Tidak pakai shadcn/ui atau library komponen apa pun.** Semua komponen hand-built di `components/ui/*`, konsisten dengan filosofi Langganin ("punya design system sendiri") |
| Animasi | Framer Motion — dipakai sparingly, hanya untuk scroll-reveal (lihat `04-ANIMATIONS-INTERACTIONS.md`) |
| Ikon | Lucide React |
| Font | `next/font/google` — Space Grotesk + Plus Jakarta Sans, self-hosted |

## Opsional (sesuaikan kebutuhan portfolio)

- **i18n**: Langganin pakai `next-intl` (id/en). Portfolio bisa skip ini kecuali user butuh multi-bahasa.
- **Form/contact (Minggu 8, wajib dikerjakan)**: program mewajibkan tepat **satu** fitur dinamis yang benar-benar berfungsi end-to-end — untuk portofolio ini, kandidat paling jelas adalah contact form. Pakai `react-hook-form` + `zod` untuk validasi (konsisten dengan pola Langganin), lalu kirim submission ke salah satu layanan gratis tanpa server:
  - **Netlify Forms** — kalau deploy di Netlify, cukup tambah atribut `data-netlify="true"` di tag `<form>`, tidak perlu daftar layanan lain. Perlu diingat: form hanya terdeteksi setelah di-deploy (tidak jalan di localhost).
  - **Formspree** — alternatif kalau host bukan Netlify: form arahkan ke endpoint Formspree, submission masuk ke email.
  - Jangan bangun API route/database sendiri untuk ini — program secara eksplisit bilang "you do not have to build a server for that", dan over-engineering form kontak akan gagal kriteria "exactly one feature, working, understood" di Minggu 8.
- **CMS untuk project**: jika project list ingin dinamis (bukan hardcoded), pertimbangkan MDX lokal atau headless CMS ringan — tapi untuk portfolio personal, hardcoded array data project di file TS/JSON biasanya cukup dan lebih simpel.
- **Deployment**: program secara resmi merekomendasikan **Netlify** (drag-and-drop paling cepat menuju "empty but live" di Minggu 4, built-in forms untuk Minggu 8, custom domain + HTTPS gratis untuk Minggu 9). Vercel tetap valid sebagai alternatif (natural fit untuk Next.js, dan konsisten dengan Langganin yang sudah live di Vercel) — pilih satu host dan sebutkan alasannya di rationale Minggu 4. Kalau pakai Netlify, pastikan output build Next.js (`next export` atau adapter statis) menghasilkan `index.html` di root folder yang di-drag.

## Struktur folder yang disarankan

Ikuti pola Langganin:
```
app/
  layout.tsx          # setup font variable, blob background
  page.tsx            # single-page portfolio (semua section)
  globals.css         # @theme + @utility tokens (lihat 01-DESIGN-TOKENS.md)
components/
  ui/
    Button.tsx
    Badge.tsx
    Card.tsx
    Reveal.tsx
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Experience.tsx
    ContactCTA.tsx
lib/
  fonts.ts
  data/
    projects.ts       # array data project (title, desc, tags, links, image)
    skills.ts
    experience.ts
public/
  images/
```

## Yang TIDAK perlu di-porting dari Langganin

- Supabase, Drizzle ORM, auth flow — tidak relevan untuk portfolio statis kecuali ada fitur backend spesifik (misal form kontak yang simpan ke DB)
- Sidebar/topbar dashboard pattern — portfolio pakai navbar landing page saja
- Recharts (chart library) — tidak relevan
