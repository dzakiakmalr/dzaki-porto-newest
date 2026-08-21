# Content Outline — Dzaki Akmal Rabbani Alqadrie

Konten ini disusun mengikuti kerangka resmi program (lihat `00-CAPSTONE-BRIEF.md`): proof statement dulu, baru semua konten lain diturunkan darinya. Data di bawah diambil dari CV dan LinkedIn Dzaki yang sudah dikonfirmasi (`CV_Dzaki.txt`, `Profile1.txt`) — bukan karangan. Bagian yang masih draft/perlu dipertajam ditandai `[DRAFT — pertajam lewat AI-interview]`.

## Data dasar (sumber: CV & LinkedIn)

- **Nama**: Dzaki Akmal Rabbani Alqadrie
- **Role saat ini**: Front-end AI Engineering Intern di **FlyRank AI** (Juni 2026–sekarang)
- **Status pendidikan**: Mahasiswa Informatika, Universitas Sebelas Maret (2022–2026, lulus 2026)
- **Lokasi**: Pontianak City, Kalimantan Barat, Indonesia (saat ini domisili kerja: Surakarta, Jawa Tengah)
- **Email**: dzakirabbania@gmail.com
- **LinkedIn**: linkedin.com/in/alqadrie28
- **Telepon**: +62 898-1391-372

## Proof statement (Minggu 1)

> `[DRAFT — pertajam lewat AI-interview, lihat prompt "narrowing interview" di 00-CAPSTONE-BRIEF.md]`

**Draft awal:**

Saya membangun aplikasi web AI-native dari nol sampai live — memakai AI sebagai mitra kerja, bukan cuma alat ngetik kode lebih cepat — untuk seorang hiring manager di startup/tech company kecil yang butuh frontend engineer yang paham workflow AI-assisted development modern, sehingga mereka mau menghubungi saya untuk ngobrol/interview.

- **Satu klaim**: bisa mengambil ide produk (subscription tracker, admin panel, culinary recommendation app) sampai jadi aplikasi yang benar-benar jalan di production, dengan AI sebagai co-worker di setiap tahap (desain, kode, deploy).
- **Satu audience**: hiring manager / tech lead di startup atau tim engineering kecil yang sedang mencari frontend engineer entry-level yang sudah fasih bekerja dengan AI tools (bukan "semua orang", bukan "recruiter besar" — target realistis untuk fresh grad/intern).
- **Satu action**: menghubungi Dzaki via email/LinkedIn untuk ngobrol lebih lanjut atau menawarkan interview/magang lanjutan.

**Kenapa ini perlu ada (yang tidak bisa dibuktikan CV/LinkedIn saja)**: CV cuma bisa bilang "pernah pakai Next.js dan AI workflow" — portofolio ini menunjukkan *hasil jadinya secara langsung*: Langganin bisa dicoba live, kode dan keputusan desainnya bisa dijelaskan, dan prosesnya (termasuk yang gagal/dibongkar ulang) diceritakan jujur.

`[TODO: jalankan prompt "Start the narrowing interview" dari 00-CAPSTONE-BRIEF.md dengan AI untuk mempertajam audience — apakah "startup kecil" sudah cukup spesifik, atau perlu dipersempit lagi misal "startup SaaS Indonesia yang produknya dipakai orang awam (bukan developer)"?]`

## Voice card (Minggu 2)

`[DRAFT — 5-7 kata untuk gaya bicara Dzaki, konfirmasi/revisi bersama Dzaki]`

Draft: **langsung, jujur soal proses, teknikal tapi tidak sombong, rendah hati soal skill "Beginner"**.

- Hindari buzzword generik: "passionate", "results-driven", "dynamic", "leverage" (meskipun ini muncul di CV asli — versi portofolio harus lebih personal/manusiawi daripada bahasa CV formal)
- Boleh menyebutkan skill masih level "Beginner" (n8n, Prompt Engineering) secara terbuka — ini justru menunjukkan kejujuran yang dihargai program ("known limitation" lebih dipercaya daripada klaim berlebihan)
- Kalimat pendek, konkret, sebut angka/detail nyata kalau ada (durasi magang, jumlah bulan project, teknologi spesifik)

## Case study 3-beat per project (Minggu 2)

Program mewajibkan tiap project ditulis dalam 3 beat: **problem → what I did (+ keputusan) → outcome**. Berikut kerangka untuk 3 project nyata Dzaki, siap dipertajam lewat AI-interview (prompt "Interview yourself about one project" di file program).

### 1. Langganin — case study utama (capstone magang FlyRank AI)

- **Live**: langganin.vercel.app
- **The problem**: `[DRAFT]` Orang Indonesia (dan luar negeri) sering kena "surprise charges" dari subscription/trial yang lupa dibatalkan — tidak ada satu tempat untuk lihat semua subscription aktif, kapan tanggal renewal, dan berapa total pengeluaran bulanan, apalagi yang mendukung metode pembayaran lokal (GoPay, OVO, DANA, ShopeePay, QRIS).
- **What I did (+ keputusan)**: `[DRAFT — perlu detail kontribusi spesifik Dzaki di tim, karena ini kemungkinan proyek magang/tim, bukan solo]` Berkontribusi sebagai Front-end AI Engineering Intern membangun antarmuka Langganin — dashboard spending, kalender renewal, tracking subscription per kategori, dan integrasi fitur "Ask AI" untuk tanya jawab soal subscription. Dibangun dengan Next.js + TypeScript + Tailwind, dengan workflow AI-assisted development (bukan cuma "AI nulis kode" — ada keputusan desain/arsitektur yang diambil sendiri).
- **What came of it**: `[DRAFT — isi dengan hasil nyata: apakah sudah ada user asli, angka konkret, atau memang masih fase awal?]` Aplikasi live dan bisa dicoba publik di langganin.vercel.app, mendukung Rupiah + multi-currency, localization Bahasa Indonesia/English, dan reminder via Email/WhatsApp/Google Calendar.
- **Apa yang akan dilakukan berbeda next time**: `[TODO — isi setelah refleksi jujur, misal soal testing, soal scope fitur, dll]`

`[TODO: jalankan prompt interview 3-beat dari 00-CAPSTONE-BRIEF.md bersama Dzaki untuk mengisi bagian kontribusi spesifik — bagian mana dari Langganin yang benar-benar dikerjakan Dzaki sendiri vs tim, biar case study ini "hanya bisa menggambarkan Dzaki", bukan generik.]`

### 2. Merpati Solo Bakery — Admin Panel (Frontend Developer, Sep 2025–Mei 2026)

- **The problem**: Merpati Solo Bakery butuh sistem digital untuk mengelola produk, tracking pesanan, dan customer engagement — sebelumnya kemungkinan manual/tidak terpusat.
- **What I did (+ keputusan)**: Merancang user persona dan desain high-fidelity secara mandiri dari nol di Figma (bukan pakai template), lalu membangun frontend architecture-nya dengan Next.js, React.js, TypeScript, memakai AI-native development workflow untuk mempercepat prototyping tanpa mengorbankan kualitas kode.
- **What came of it**: Drastis memperpendek durasi development lifecycle, sambil tetap menjaga kode bersih dan UX yang mulus (klaim dari CV — `[TODO: pertajam dengan angka/bukti konkret kalau ada, misal "dari estimasi X minggu jadi Y minggu"]`).
- **Apa yang akan dilakukan berbeda**: `[TODO]`

### 3. KulinerKita — Capstone Bangkit Academy (Cloud Computing Cohort, Sep–Des 2024)

- **The problem**: Wisatawan dan warga Surakarta butuh rekomendasi kuliner yang dipersonalisasi (bukan sekadar daftar generik), sekaligus mendukung ekosistem UMKM kuliner lokal.
- **What I did (+ keputusan)**: Membangun cloud infrastructure dan server-side logic — deploy aplikasi serverless modular di Google Cloud (Cloud Run + App Engine), membangun REST API dengan Node.js/Express untuk filter tempat kuliner berdasarkan kecamatan/rentang harga/kondisi cuaca, mengelola database Cloud SQL (MySQL), dan mengintegrasikan model machine learning untuk rekomendasi real-time.
- **What came of it**: Aplikasi mobile capstone selesai dan open-source di github.com/kulinerkita.
- **Apa yang akan dilakukan berbeda**: `[TODO]`

**Catatan penempatan di portofolio**: Langganin sebagai project unggulan (span 2 kolom di bento grid, sesuai `03-PAGE-STRUCTURE.md`), Merpati Solo Bakery dan KulinerKita sebagai pendukung. Ini menunjukkan rentang: AI-native frontend product (Langganin), real client work (Merpati), dan cloud/backend/ML capability (KulinerKita) — ketiganya memperkuat klaim "bisa mengambil ide sampai jadi aplikasi yang benar-benar jalan", bukan cuma satu sisi skill.

## Hero

- **Nama tampilan**: Dzaki Alqadrie (atau "Dzaki Akmal Rabbani Alqadrie" penuh — pilih sesuai preferensi personal branding)
- **Role/title**: Frontend AI Engineer (sesuai konfirmasi Dzaki — bukan "Frontend Developer" generik dari CV, karena AI-native workflow adalah bagian dari klaim utama)
- **Tagline**: diturunkan dari proof statement setelah dipertajam, contoh arah `[DRAFT]`: "Saya membangun produk AI-native dari ide sampai live — bukan cuma demo." — `[TODO: jalankan prompt "Rewrite the hero" di Minggu 7 setelah proof statement final]`
- **Foto profil**: `[TODO: minta foto profesional dari Dzaki, atau pakai foto LinkedIn yang sudah ada]`

## About

- **Bio singkat**: `[DRAFT, dari Summary LinkedIn, sudah dipersonalisasi]` Mahasiswa Informatika UNS (lulus 2026) yang sedang magang sebagai Front-end AI Engineer di FlyRank AI. Tertarik pada aplikasi AI-native dan percaya teknologi harus terasa effortless, bukan cuma "berfungsi". Sebelumnya membangun Admin Panel untuk Merpati Solo Bakery dan capstone cloud/ML di Bangkit Academy.
- **Lokasi**: Pontianak City, Kalimantan Barat / saat ini berbasis di Surakarta, Jawa Tengah
- **Status availability**: `[TODO: konfirmasi ke Dzaki — "Currently interning at FlyRank AI" + "Open to opportunities after graduation 2026"?]`

## Skills (dari CV & LinkedIn, dikelompokkan)

- **Frontend**: Next.js, React.js, TypeScript, Tailwind CSS, Vue.js
- **Backend/Cloud**: Node.js, Express, Google Cloud (Cloud Run, App Engine, Cloud SQL/MySQL)
- **Design**: Figma (user persona, high-fidelity design)
- **AI/Automation**: Prompt Engineering *(Beginner)*, n8n *(Beginner)*, AI-native development workflow
- **Platform lain**: Shopify
- **Networking** *(pendukung, dari CCNA/TA)*: Cisco networking fundamentals — opsional ditampilkan, relevansi ke klaim utama rendah, pertimbangkan taruh di "Certifications" saja bukan section Skills utama

**Catatan jujur (`known limitation`, sesuai filosofi program Minggu 9)**: n8n dan Prompt Engineering ditandai "Beginner" di CV asli — jangan di-upgrade jadi "Intermediate" di portofolio hanya demi terlihat bagus. Kejujuran level skill lebih dipercaya daripada klaim berlebihan.

## Experience (timeline, dari CV & LinkedIn — sudah lengkap, tidak perlu ditanyakan lagi)

1. **Front-end AI Engineering Intern** — FlyRank AI · Juni 2026–sekarang · Indonesia (remote/global program)
2. **Frontend Developer** — Merpati Solo Bakery, Surakarta · September 2025–Mei 2026
3. **Teaching Assistant, Computer Networks** — Universitas Sebelas Maret · Maret–Juni 2025
4. **Cloud Computing Cohort** — Bangkit Academy (Google, Tokopedia, Gojek, Traveloka) · September–Desember 2024

## Certifications (opsional ditampilkan sebagai badge kecil, bukan section besar)

- Menjadi Google Cloud Engineer
- CCNA: Introduction to Networks
- Introduction to Cybersecurity
- Certificate of completion: Claude 101
- Belajar Dasar AI
- Google Cloud Computing Foundations Certificate

## Contact

- **Email**: dzakirabbania@gmail.com
- **LinkedIn**: linkedin.com/in/alqadrie28
- **GitHub**: `[TODO: konfirmasi username GitHub personal Dzaki — yang tersedia di CV cuma github.com/kulinerkita (repo tim, bukan akun personal)]`
- **CV/Resume**: `[TODO: siapkan versi PDF final untuk didownload dari situs, pastikan konsisten dengan konten portofolio]`

## Statistik (opsional, untuk strip angka di hero/about)

Berdasarkan data nyata yang sudah ada, hindari mengarang angka:

- "3+ real projects shipped" (Langganin, Merpati Admin Panel, KulinerKita)
- "9 months" pengalaman frontend developer nyata (Merpati Solo Bakery)
- "2026" tahun lulus Informatika UNS

`[TODO: jangan tambah angka lain (misal "X+ years experience") kecuali ada data pendukungnya — program secara eksplisit menghukum klaim yang tidak bisa dibuktikan]`

---

## Catatan proses untuk AI yang membangun ini

- Bagian yang masih `[DRAFT]` atau `[TODO]` **wajib dikonfirmasi ke Dzaki** sebelum jadi copy final — jangan langsung diisi otomatis oleh AI, sesuai prinsip "AI menginterview, manusia memutuskan" dari `00-CAPSTONE-BRIEF.md`.
- Kontribusi spesifik Dzaki di project **Langganin** adalah yang paling penting untuk dipertajam duluan, karena ini project unggulan/capstone magang — case study yang generik ("saya bantu bangun ini") akan gagal kriteria evaluasi Minggu 2 ("could only describe your project, not anyone's").
- Setelah proof statement final (Minggu 1), semua konten lain (hero tagline, urutan project, tone bio) harus diturunkan darinya — jangan menulis konten section lain sebelum proof statement dikonfirmasi.
