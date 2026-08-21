# Page Structure — Portfolio

Struktur ini setara dengan landing page Langganin (`app/[locale]/page.tsx`), diadaptasi untuk konten portfolio personal. Single-page scroll dengan section-section, mirip pola landing page SaaS — bukan multi-page dashboard.

**Requirement proses (lihat `00-CAPSTONE-BRIEF.md`)**: setiap section di bawah bukan cuma keputusan visual, tapi harus melayani satu proof statement Dzaki (`06-CONTENT-OUTLINE.md`). Uji setiap halaman dengan pertanyaan program: *"Dalam 10 detik, apakah orang asing tahu Dzaki mengerjakan apa, dan apakah mereka percaya dia bagus di bidang itu?"* Kalau jawabannya tidak, section itu belum selesai — bukan soal kurang indah, tapi soal klaim belum landing.

## Urutan section (top to bottom)

### 1. Navbar (fixed/sticky)
- `glass-panel-strong`, fixed di top, z-index tinggi
- Kiri: logo/monogram nama (bisa pakai pola `BrandLogo` — tile `bg-clay-100` dengan initial huruf nama)
- Tengah/kanan: nav links (About, Projects, Skills, Experience, Contact) — scroll ke section dengan smooth scroll
- Paling kanan: CTA pill button — **harus mengarah ke the one action** dari proof statement (`06-CONTENT-OUTLINE.md`), bukan label generik. Contoh sesuai draft Dzaki: "Hubungi Saya" / "Get In Touch", bukan "Resume" (karena satu action-nya adalah dihubungi, bukan CV didownload)
- Mobile: collapse ke hamburger → `glass-drawer` mobile menu

### 2. Hero
- Layout 2 kolom di desktop (`grid lg:grid-cols-2`), stack di mobile
- Kiri: headline besar (`font-display`, weight 700, ukuran besar misal `text-5xl lg:text-6xl`) — nama + role/tagline singkat
- **Wajib memuat one-line claim** (lihat proof statement di `06-CONTENT-OUTLINE.md`): headline + subheadline harus lolos tes 10 detik program — orang asing yang baru landing harus langsung tahu Dzaki mengerjakan apa (contoh arah: "Frontend AI Engineer" sebagai role + tagline yang menyebutkan "AI-native product" secara konkret, bukan "passionate developer" yang generik)
- Subheadline (`text-text-muted`) — 1 kalimat pendek, konkret, bisa sebut satu bukti nyata (misal: Langganin sudah live) supaya klaim langsung didukung fakta, bukan cuma jargon
- 2 CTA button: primary mengarah ke the one action ("Hubungi Saya"), secondary mengarah ke evidence terdekat ("Lihat Langganin" atau "Lihat Proyek Saya") — bukan sekadar "View My Work" generik
- Kanan: elemen visual — foto profil dalam frame clay, ATAU mockup card gaya `ProductPreview` yang menampilkan preview Langganin (project unggulan) sebagai bukti visual langsung di hero
- Background: 2 blob terracotta blur besar diposisikan absolute di belakang hero (bukan fixed — supaya tidak mengganggu section lain)

### 3. Social proof / Trust strip (opsional)
- Kalau ada logo perusahaan tempat bekerja/klien/tech stack favorit: pill glass horizontal berisi row logo, scroll-reveal animated
- Kalau tidak relevan untuk portfolio personal, section ini bisa di-skip atau diganti dengan strip angka statistik (misal: "5+ Years Experience", "20+ Projects Completed", "10+ Happy Clients") dalam format `tabular-nums`

### 4. About
- Card besar `rounded-card bg-surface shadow-md`, 2 kolom: foto/ilustrasi di satu sisi, teks bio di sisi lain
- Bisa tambah quick-facts list (lokasi, role, availability status pakai badge success/warning)

### 5. Projects (bento grid — pola Features Langganin)
- Grid asymmetric ala bento: `sm:grid-cols-2 xl:grid-cols-3`, **Langganin sebagai project unggulan span 2 kolom** (ini capstone magang FlyRank AI, live di langganin.vercel.app — bukti paling kuat untuk klaim Dzaki), Merpati Solo Bakery dan KulinerKita mengisi kolom sisanya
- Tiap card project: `clay-gradient` + `shadow-clay`, hover lift + `shadow-clay-hover`
- **Isi card mengikuti pola case study 3-beat** (bukan sekadar screenshot + judul, lihat `06-CONTENT-OUTLINE.md` dan `00-CAPSTONE-BRIEF.md`): thumbnail/screenshot project asli (rounded di dalam card), judul (`font-display`), lalu ringkasan 1-2 kalimat yang memuat *problem* singkat dan *outcome* (bukan cuma deskripsi fitur teknis) — detail 3-beat lengkap (problem/what I did/outcome) bisa expand di card besar (Langganin) atau di halaman detail `/projects/[slug]` jika dibuat
- Badge tech stack (pola badge dari `02-COMPONENT-PATTERNS.md`), link ke live demo/repo (icon Lucide `ExternalLink`/`Github`) — pastikan semua link ini benar-benar berfungsi sebelum Checkpoint 1 (Minggu 7)

### 6. Skills
- Bisa pakai dot-grid background (`bg-dots`) seperti section "Built for Indonesia" di Langganin, untuk variasi visual antar section
- Grid badge skill dikelompokkan per kategori (Frontend, Backend, Tools, dll), tiap grup dalam glass card atau clay card
- Alternatif: progress bar / level indicator per skill kalau user mau tampilkan proficiency

### 7. Experience / Timeline (opsional, bisa gabung dengan About)
- Vertical timeline, tiap entry dalam clay card kecil, garis penghubung `border-clay-200`
- Isi: role, perusahaan, durasi, deskripsi singkat

### 8. CTA section (penutup sebelum footer)
- Meniru CTA section Langganin: card glass besar di tengah, headline singkat ("Let's build something together"), satu CTA pill button ke contact/email

### 9. Footer
- Sederhana, border-top saja, TANPA glass/clay (lihat pola di `02-COMPONENT-PATTERNS.md`)
- Kiri: nama + tagline singkat
- Kanan: social links (GitHub, LinkedIn, Email) sebagai icon Lucide — sesuai kontak nyata Dzaki di `06-CONTENT-OUTLINE.md`
- **Slot graduate badge (Minggu 9–10, `00-CAPSTONE-BRIEF.md`)**: siapkan tempat kecil di footer (misal baris terpisah di bawah social links, atau pojok kanan bawah) untuk badge FlyRank yang link ke halaman verifikasi — jangan dibangun sekarang, tapi alokasikan ruang di layout supaya tidak perlu re-desain footer saat launch

## Halaman tambahan (opsional, jika portfolio multi-page)

Jika user ingin lebih dari satu halaman (bukan single-page scroll):
- `/projects/[slug]` — halaman detail project, layout mirip auth page Langganin: card terpusat `rounded-card bg-surface shadow-md` untuk konten utama, tapi lebih lebar (max-w-4xl)
- `/blog` (jika ada) — list card artikel dengan pola card yang sama seperti project card

Default rekomendasi: **single-page scroll** dulu, sesuai gaya landing page Langganin. Tambah halaman detail project hanya jika user memang punya banyak project yang perlu dijelaskan detail.

## Responsive strategy

Sama seperti Langganin: mobile-first, breakpoint `sm:` (640px) dan `lg:` (1024px) saja. Uji di 360px, 768px, 1280px.
