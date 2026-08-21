# Capstone Brief — FlyRank AI Fluency Internship

Ringkasan resmi program **AI Fluency: Solve for Your n** (FlyRank AI Internship, 10 minggu) diambil dari [aifluency.flyrank.ai](https://aifluency.flyrank.ai/). Ini adalah **source of truth untuk proses & requirement**, sejajar dengan `01-DESIGN-TOKENS.md` yang menjadi source of truth untuk visual. Baca file ini sebelum membangun apa pun — file 01–06 menjelaskan *bagaimana* portofolio ini harus terlihat, file ini menjelaskan *apa* yang harus dibuktikan dan *deliverable* apa yang wajib ada di tiap tahap.

## Inti program

Portofolio ini **bukan** proyek dekorasi. Satu-satunya tugasnya: membuat satu orang spesifik (bukan "semua orang") percaya bahwa Dzaki bisa melakukan satu hal dengan baik, dalam waktu kurang dari 30 detik (hero) sampai 5 menit (seluruh situs). Setiap section, setiap kata, harus melayani klaim itu — bukan sekadar "terlihat bagus".

Motto program: *"Do not ask AI to write your site. Ask it to interview you."* — AI dipakai sebagai mitra berpikir (interviewer, tutor, pressure-tester), bukan pengganti keputusan/suara pribadi.

## Peta 10 minggu

| Minggu | Fokus | Milestone |
|---|---|---|
| 1 | **Proof statement** — 1 klaim, 1 audience spesifik, 1 action. Sitemap awal + AI workspace | Statement + sketsa sitemap |
| 2 | **Case study 3-beat** per project nyata (problem → what I did → outcome) + voice card | Case studies terdraft |
| 3 | **Content map** (section per halaman + CTA) + identity kit (font, palette, favicon) + kurasi gambar | Style note 1 halaman |
| 4 | **Pilih stack**: minta AI beri 3 opsi dengan trade-off, jangan terima 1 jawaban. Deploy "empty but live" | URL live (masih kosong) |
| 5 | **Ship versi jelek** — semua halaman dari sitemap harus reachable, isi konten asli (bukan lorem ipsum), kirim ke 1 orang nyata untuk feedback | URL live + catatan reaksi orang nyata |
| 6 | **Jelaskan 1 bagian build** dengan kata sendiri ke AI-tutor sampai benar-benar paham (anti "mystery code") | Penjelasan tertulis 1 bagian |
| 7 | **Checkpoint 1 — Design Review** (gate wajib lulus) | Lihat detail di bawah |
| 8 | **Wire satu fitur nyata** — biasanya contact form via Formspree/Netlify Forms | Bukti submission form sampai ke inbox |
| 9 | **Checkpoint 2 — Hardening Review** (gate wajib lulus) + custom domain + analytics + graduate badge | Lihat detail di bawah |
| 10 | **Capstone**: domain final, demo 3–5 menit, build write-up, honest build-in-public story, submit ke showcase | Paket lengkap |

## Checkpoint 1 — Design Review (Minggu 7, wajib lulus sebelum lanjut)

Portofolio **tidak boleh lanjut ke Minggu 8** sampai gate ini lulus.

Checklist:
- Dicek di **HP asli** (bukan cuma resize browser): teks terbaca, gambar tidak pecah/meluber, tombol bisa di-tap
- Kontras warna lolos cek (pakai [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
- Semua link (termasuk demo & repo project) benar-benar berfungsi, tidak 404
- Reviewer (mentor/peer) ditanya 2 hal dulu: *"Dalam 10 detik, apa yang saya kerjakan? Apakah Anda percaya saya bagus di bidang itu?"*
- Feedback disortir jujur: **must-fix** (bikin bingung/rusak/menghalangi the one action) vs **nice-to-have**
- Semua must-fix **benar-benar diperbaiki di situs live**, bukan cuma dicatat

## Checkpoint 2 — Hardening Review (Minggu 9, wajib lulus sebelum launch)

Portofolio **tidak boleh "launch" (custom domain final)** sampai gate ini lulus.

Checklist:
- **Coba rusak situs sendiri**: submit form kosong/isi sampah, buka di browser/device yang belum ditest, klik semua link 2x cepat (double submit)
- SEO dasar: page title, meta description, social-share preview (cek via [OpenGraph.xyz](https://www.opengraph.xyz/))
- Speed check via [PageSpeed Insights](https://pagespeed.web.dev/)
- Temuan disortir jujur: **fix-now** vs **known limitation** (limitation yang diketahui dan diakui itu profesional, bukan cacat)
- Semua fix-now diperbaiki sebelum submit review
- Setelah lulus: custom domain + HTTPS aktif, analytics terpasang, favicon/title/share-preview benar, **graduate badge** terpasang di footer (link ke halaman verifikasi FlyRank)
- Tulis rencana "keep building": project berikutnya yang akan ditambahkan + reminder konkret

## Capstone package (Minggu 10)

Empat komponen wajib, semuanya rakitan dari minggu-minggu sebelumnya:

1. **Portofolio live di custom domain** — membuktikan satu klaim, terisi karya nyata, bisa dinavigasi orang asing dalam 5 menit
2. **Demo 3–5 menit** — jalan-jalan di situs live, tunjukkan 1 fitur nyata yang benar-benar berfungsi, tunjukkan 1 titik di mana AI melakukan "heavy lifting"
3. **Build write-up singkat** — stack yang dipilih dan alasannya, hal tersulit yang pernah rusak, apa yang akan dibangun selanjutnya
4. **Build-in-public story** — cerita jujur (bukan promosi): 1 kemenangan nyata + 1 limitasi nyata
5. Graduate badge terpasang + submit ke FlyRank showcase

## Kriteria evaluasi lintas-minggu (pola umum)

Setiap minggu dinilai pass/revise, bukan skor. Pola yang berulang di semua minggu:
- Klaim/pekerjaan bisa hanya menggambarkan **Dzaki**, bukan portofolio siapa pun
- Audience adalah **satu orang spesifik** (contoh: "hiring manager di startup AI-native kecil yang butuh frontend engineer yang paham AI workflow"), bukan "semua orang"
- Ada **satu action** yang jelas per halaman/CTA
- Feedback/kritik ditangani dengan memperbaiki, bukan membela diri
- Tidak ada "mystery code" — setiap bagian yang di-generate AI harus bisa dijelaskan ulang dengan kata sendiri
- Limitasi diakui secara jujur, bukan disembunyikan

## Referensi silang ke file lain

- Data konkret proof statement, voice card, dan case study 3-beat Dzaki → `06-CONTENT-OUTLINE.md`
- Struktur halaman yang mengimplementasikan hero-claim & CTA-satu-action → `03-PAGE-STRUCTURE.md`
- Keputusan stack (proses 3-opsi Minggu 4) → `05-TECH-STACK.md`
- Visual/komponen tetap ikuti `01-DESIGN-TOKENS.md` & `02-COMPONENT-PATTERNS.md` — checkpoint di atas tidak mengubah keputusan visual, hanya menambah lapisan "apakah ini membuktikan klaim dan berfungsi di dunia nyata".
