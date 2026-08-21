# Portfolio Website — AI Design Instructions

Direktori ini berisi instruksi lengkap untuk AI (atau developer) dalam membangun website portfolio pribadi Dzaki Akmal Rabbani Alqadrie untuk **capstone FlyRank AI Fluency Internship** (aifluency.flyrank.ai), yang menggunakan **bahasa desain yang sama persis** dengan website Langganin (SaaS subscription tracker — juga project capstone magang Dzaki di FlyRank AI). Tujuannya: portfolio ini harus terlihat seperti "produk saudara" dari Langganin — konsisten dalam warna, tipografi, bentuk komponen, dan gaya interaksi — sekaligus memenuhi requirement proses resmi program (proof statement, case study, checkpoint review, capstone package).

## Cara memakai dokumen ini

Baca file-file berikut secara berurutan sebelum mulai membangun apa pun:

0. **[00-CAPSTONE-BRIEF.md](./00-CAPSTONE-BRIEF.md)** — requirement resmi program 10 minggu FlyRank: proof statement, checkpoint gate (Minggu 7 & 9), dan capstone package (Minggu 10). Sumber kebenaran untuk **proses & deliverable**, dibaca pertama sebelum keputusan visual apa pun.
1. **[01-DESIGN-TOKENS.md](./01-DESIGN-TOKENS.md)** — warna, tipografi, radius, shadow, spacing. Sumber kebenaran (source of truth) untuk semua nilai visual. **Copy nilai-nilai ini persis**, jangan menebak atau mengira-ngira.
2. **[02-COMPONENT-PATTERNS.md](./02-COMPONENT-PATTERNS.md)** — resep claymorphism & glassmorphism, pola button/card/badge/navbar, kapan pakai clay vs glass.
3. **[03-PAGE-STRUCTURE.md](./03-PAGE-STRUCTURE.md)** — struktur section untuk halaman portfolio (hero, about, projects, skills, experience, contact, footer) yang setara dengan struktur landing page Langganin, sudah disesuaikan dengan requirement one-line claim & CTA satu action dari program.
4. **[04-ANIMATIONS-INTERACTIONS.md](./04-ANIMATIONS-INTERACTIONS.md)** — aturan animasi scroll-reveal, hover/press states, micro-interactions.
5. **[05-TECH-STACK.md](./05-TECH-STACK.md)** — stack teknis yang direkomendasikan agar konsisten (Next.js, Tailwind v4, Framer Motion, Lucide, font), plus proses pemilihan 3-opsi ala Minggu 4 dan setup Netlify/Formspree untuk Minggu 8.
6. **[06-CONTENT-OUTLINE.md](./06-CONTENT-OUTLINE.md)** — konten portfolio Dzaki: proof statement, voice card, dan case study 3-beat untuk 3 project nyata (Langganin, Merpati Solo Bakery, KulinerKita), diambil dari CV & LinkedIn asli.

## Prinsip inti yang WAJIB dipegang

- **Bukan template generik.** Ini bukan portfolio Tailwind biasa dengan warna biru/ungu gradient khas AI-generated site. Identitas visual Langganin adalah **claymorphism (warm terracotta) + glassmorphism**, bukan flat design atau neubrutalism.
- **Satu signature visual**: radial glow terracotta (`rgba(226,107,67,0.18)`, blur 60px) di belakang panel glass. Ini elemen yang membuat desain "dikenali".
- **Dua material, jangan dicampur di elemen yang sama**:
  - **Clay** = elemen yang "disentuh/diklik" (button, card project, badge skill, toggle) → soft dual-shadow, radius besar/pill, TANPA border 1px.
  - **Glass** = elemen yang "melayang" (navbar, modal, dropdown) → frosted blur + border putih 1px tipis.
- **Tidak ada dark mode** di desain asli Langganin — portfolio boleh tetap light-mode only kecuali user memutuskan lain.
- **Font**: Space Grotesk (heading) + Plus Jakarta Sans (body) — WAJIB sama, ini bagian besar dari identitas.
- **Ikon**: Lucide React saja, ukuran kecil (14–22px), jangan default 24px.
- **Radius besar, tanpa border tajam**: card 24px, button/badge pill (9999px). Tidak ada kotak bersudut tajam.
- **Animasi minimal dan purposeful**: scroll fade-up sekali saat masuk viewport, hover lift halus. Bukan animasi berlebihan/flashy.

## Perbedaan konten vs Langganin

Portfolio ini **bukan** SaaS dashboard, jadi:
- Tidak perlu sidebar/topbar dashboard, tidak perlu chart/table transaksi.
- Fokus ke landing-page-style single page (atau multi-page ringan): Hero, About, Projects, Skills, Experience, Contact.
- Elemen dashboard Langganin (sidebar glass, topbar search) TIDAK relevan untuk portfolio — cukup ambil pola navbar landing page (`LandingNav`) dan section-section landing page sebagai referensi struktural.

## Requirement proses (bukan cuma visual)

Selain bahasa desain di atas, portofolio ini terikat pada gate & deliverable resmi program FlyRank AI Fluency (lihat `00-CAPSTONE-BRIEF.md`):
- **Checkpoint 1 (Minggu 7)** — design review, situs harus lulus tes mobile + tes klaim 10 detik sebelum lanjut.
- **Checkpoint 2 (Minggu 9)** — hardening review, situs harus lulus self-break-test sebelum custom domain final.
- **Capstone (Minggu 10)** — live di custom domain, demo 3–5 menit, build write-up, honest build-in-public story, graduate badge terpasang.

Keputusan visual di file 01–05 tidak berubah karena gate ini — gate ini menambah lapisan verifikasi "apakah portofolio benar-benar berfungsi dan membuktikan klaim", bukan mengubah bahasa desain claymorphism/glassmorphism itu sendiri.
