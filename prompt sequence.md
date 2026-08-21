# Prompt Sequence — Portfolio Dzaki (Capstone FlyRank AI Fluency)

File ini adalah **peta prompt lengkap** untuk mengeksekusi project portfolio dari awal (proof statement) sampai akhir (launch + capstone), mengikuti program resmi [aifluency.flyrank.ai](https://aifluency.flyrank.ai/).

## Cara pakai file ini

- Prompt di bawah disusun **berurutan per fase** (Setup → Minggu 1–10 → Capstone). Jangan lompat fase — setiap fase punya deliverable yang jadi input fase berikutnya.
- Yang ada `{kurung kurawal}` = **ganti dengan jawaban/data kamu sendiri** sebelum dipaste. Yang sudah terisi teks Dzaki = langsung bisa dipakai atau tinggal dikonfirmasi.
- Setiap kali mulai chat baru dengan AI, **paste dulu Blok Konteks** (bagian 1) supaya AI tidak mulai dari nol (ini pengganti fitur "AI workspace/Project/Gem" kalau tool-mu tidak punya).
- Ini adalah **sequence**, bukan daftar bebas: output tiap prompt disimpan dan dipakai ulang di prompt berikutnya. Simpan jawaban penting (proof statement, voice card, style note, case studies) di satu dokumen terpusat.

---

## 1. Blok Konteks (paste di awal SETIAP chat baru)

```
Kamu adalah build partner saya untuk membangun website portfolio pribadi saya
sebagai capstone program FlyRank AI Fluency Internship. Ini konteks yang harus
kamu pegang di seluruh sesi:

TENTANG SAYA:
- Nama: Dzaki Akmal Rabbani Alqadrie (tampil di web sebagai "Dzaki Alqadrie")
- Role: Front-end AI Engineering Intern di FlyRank AI (Juni 2026–sekarang)
- Pendidikan: Mahasiswa Informatika, Universitas Sebelas Maret (2022–2026)
- Lokasi: Pontianak, Kalimantan Barat / berbasis di Surakarta, Jawa Tengah
- Email: dzakirabbania@gmail.com · LinkedIn: linkedin.com/in/alqadrie28

KLAIM YANG HARUS DIBUKTIKAN (proof statement, DRAFT — ini yang kita pertajam):
"Saya membangun aplikasi web AI-native dari nol sampai live, memakai AI sebagai
mitra kerja, untuk hiring manager di startup yang butuh frontend engineer yang
paham workflow AI-assisted development."

WORK NYATA (untuk case study, semua benar-benar ada):
1. Langganin (langganin.vercel.app) — subscription tracker khusus Indonesia,
   capstone magang saya di FlyRank AI. Live.
2. Merpati Solo Bakery — Admin Panel (product management, order tracking,
   customer engagement). Next.js + React + TypeScript, desain mandiri di Figma.
3. KulinerKita (github.com/kulinerkita) — capstone Bangkit Academy, cloud
   infrastructure + REST API (Node.js/Express) + ML integration di GCP.

STACK & DESAIN (SUDAH DIPUTUSKAN, jangan diubah):
- Next.js (App Router) + TypeScript strict + Tailwind CSS v4 (CSS-first config)
- No component library — semua komponen hand-built
- Framer Motion (hanya untuk scroll-reveal), Lucide React untuk ikon
- Font: Space Grotesk (heading) + Plus Jakarta Sans (body) via next/font
- Style: claymorphism (terracotta) + glassmorphism — identitas visual Langganin

REFERENSI WAJIB (baca sebelum menulis kode desain):
Ada folder `from_claude_mds/` berisi instruksi desain lengkap. Jika saya minta
kamu bikin UI/komponen baru, baca dulu file-file ini dan IKUTI persis:
- 00-CAPSTONE-BRIEF.md  (requirement resmi program 10 minggu)
- 01-DESIGN-TOKENS.md   (warna, font, radius, shadow — source of truth visual)
- 02-COMPONENT-PATTERNS.md (resep clay/glass, pola button/card/badge/navbar)
- 03-PAGE-STRUCTURE.md  (struktur section + requirement claim/CTA)
- 04-ANIMATIONS-INTERACTIONS.md (scroll-reveal, hover, focus)
- 05-TECH-STACK.md      (stack + Netlify/Formspree)
- 06-CONTENT-OUTLINE.md (konten Dzaki: proof statement, voice card, case study)

ATURAN INTERAKSI (SANGAT PENTING — baca bagian "Mode Interview" di bawah):
- Jangan pernah mengarang data personal saya, pengalaman, prestasi, atau angka.
- Kalau kamu butuh informasi yang belum saya berikan, BERHENTI dan TANYA saya
  (mode interview: satu pertanyaan tajam per giliran), jangan menebak.
- AI menginterview & memberi opsi; SAYA yang memutuskan.
- Jangan tulis copy final sebelum kamu interview saya tentang bagian itu.
```

**Cara pengganti AI workspace (kalau tool tidak punya Project/Gem):** simpan blok di atas jadi satu file misal `context.md`, lalu paste di awal setiap chat. Kalau tool punya fitur Project (Claude/ChatGPT) atau Gem (Gemini), tempel blok ini sebagai **custom instructions** di sana (sekali set, dipakai 10 minggu).

---

## 2. Mode Interview — instruksi untuk AI (dipakai di semua fase)

Tempel bagian ini **bersama Blok Konteks**, atau aktifkan kapan pun kamu butuh AI "ngelotok" jawaban dari kamu alih-alih ngarang:

```
MODE INTERVIEW — aktif untuk seluruh sesi kecuali saya bilang berhenti:
1. Kamu adalah interviewer, bukan penulis. Tugas utama kamu bukan langsung
   menghasilkan copy/kode final, tapi MENARIK jawaban asli dari saya.
2. Tanya SATU pertanyaan tajam per giliran. Jangan menumpuk banyak pertanyaan.
3. Kalau jawaban saya masih kabur/generik/berusaha membuktikan banyak hal,
   TOLAK dengan sopan dan tanya ulang lebih spesifik. Jangan langsung menerima.
4. Setelah sekitar 6–8 pertanyaan, kalau sudah cukup, RANGKUM pemahamanmu dan
   konfirmasi ke saya: "ini yang saya tangkap, benar?" sebelum lanjut.
5. JANGAN mengarang pencapaian, angka, atau pengalaman yang tidak saya sebutkan.
6. Bedakan dengan jelas: mana yang FAKTA dari saya, mana yang masih DUGAAN agar
   bisa saya koreksi.
7. Di akhir tiap topik, tanyakan "ada yang mau dikoreksi atau ditambah?" sebelum
   saya lanjut ke fase berikutnya.
```

**Aturan emasnya (dari program):** *"Do not ask AI to write your site. Ask it to interview you."* Kalau kamu mendapati AI langsung nulis bio/about yang enak tapi generik, itu tanda kamu salah pakai — ulangi dengan Mode Interview.

---

## FASE 0 — Setup (sebelum Minggu 1)

**Tujuan:** siapkan workspace + pahami semua materi referensi.

**Langkah & prompt:**

1. Buat AI workspace (Project/Gem) atau `context.md` berisi **Blok Konteks** bagian 1 + **Mode Interview** bagian 2.
2. Minta AI baca dan ringkas semua file referensi, supaya kamu yakin AI paham konteks:

```
Baca semua file di folder `from_claude_mds/` (00 sampai 06, dan README).
Ringkas dalam poin-poin pendek: (a) apa program capstonenya dan apa saja
deliverable/gatenya, (b) apa identitas visualnya (warna, font, material clay vs
glass), (c) apa stack yang dipakai dan kenapa, (d) apa konten portofolio saya
(proof statement, case study 3 proyek). Setelah itu, tanya saya apakah ada yang
kurang jelas sebelum kita mulai Minggu 1.
```

---

## FASE 1 — MINGGU 1: Decide What You're Proving

**Deliverable:** satu paragraf proof statement + alasan "kenapa ini perlu ada", sketsa sitemap, screenshot AI workspace + hasil pressure-test.

**Prompt 1.1 — Narrowing interview (menemukan klaim/person/action asli kamu):**

```
I am switching into {frontend/AI engineering} and building a portfolio whose only
job is to prove I can do one thing well, so someone will hire or work with me.
Interview me to find three things: the ONE claim I am proving, the ONE specific
person I am proving it to, and the ONE action I want them to take. Ask me one
sharp question at a time, push back when I am vague or trying to prove more than
one thing, and after about eight questions propose a one-paragraph proof
statement. Start with your first question.
```

> Isi `{...}` dengan bidang kamu. Draft awal proof statement sudah ada di `06-CONTENT-OUTLINE.md` — tapi JANGAN langsung pakai draft itu; jalankan interview dari nol, lalu bandingkan hasilnya dengan draft.

**Prompt 1.2 — Pertajam statement yang masih terlalu lebar (jalankan setelah 1.1):**

```
Here is my draft proof statement: {paste_draft_statement}. It still feels generic.
Give me three sharper versions that each name ONE claim, ONE specific person who
could hire me, and ONE action. For each, point out the exact word that was too
broad and what you replaced it with. Do not invent achievements I did not
mention. Then ask me the one question that would make it sharper still.
```

**Prompt 1.3 — Buat sitemap (minta AI bantu sketch):**

```
Berdasarkan proof statement saya tadi, bantu saya bikin sitemap kecil: halaman
apa saja (seminimal mungkin) yang cukup untuk membawa satu orang saya dari
landing → percaya saya bisa → mengambil satu action saya. Untuk tiap halaman,
jelaskan kenapa halaman itu pantas ada (atau kenapa harus dibuang). Tolak ide
menambah halaman cuma karena "website lain punya". Default-nya single-page
scroll, kecuali kamu beri alasan kuat kenapa butuh lebih dari satu halaman.
```

**Prompt 1.4 — Pressure-test sitemap terhadap klaim + action:**

```
This is my proof statement: {paste_proof_statement}. This is my sitemap:
{paste_sitemap}. Does this sitemap walk my one person from landing, to believing
me, to taking my one action, and does it actually prove my claim? Tell me which
pages earn their place, which are wasted, and what is missing. Be specific, not
encouraging.
```

> Catatan minimal satu hal yang akan kamu ubah dari hasil pressure-test ini (ini bagian dari deliverable Minggu 1).

---

## FASE 2 — MINGGU 2: Frame Your Work (case study 3-beat)

**Deliverable:** voice card + case study lengkap untuk tiap proyek yang diminta sitemap + satu before/after (baris AI generik vs versi editan kamu).

**Prompt 2.1 — Set voice card dulu (standing instruction):**

```
Here is my voice card. Use it for everything you draft for me: {direct, warm,
plain, specific, no buzzwords}. Short sentences. No "passionate,"
"results-driven," or "dynamic." A few words that are mine:
{three_words_that_sound_like_you}. If a line sounds like a generic AI bio,
rewrite it the way a real person would say it to a friend. Confirm you have it,
then we will start.
```

> Contoh kata yang "milik kamu" bisa diambil dari style kamu sendiri — diskusikan dengan AI di sini kalau belum yakin. Draft voice card sudah ada di `06-CONTENT-OUTLINE.md` sebagai titik awal.

**Prompt 2.2 — Interview diri tentang SATU proyek (ulangi untuk tiap proyek: Langganin, Merpati, KulinerKita):**

```
I want to turn one real project into a case study. Interview me before you write
anything. The project: {one_line_on_what_it_is}. Who needs to be convinced:
{your_one_person_from_week_1}. Ask me one question at a time: what problem or
goal it started from, what I actually did and decided, what I tried that did not
work, what the result was (even small), and what I would do differently. Do not
write yet. Start.
```

> ⚠️ PENTING: proyek Langganin adalah proyek magang (kemungkinan tim). Pastikan kamu menjawab **kontribusi spesifik yang KAMU kerjakan sendiri**, bukan "tim mengerjakan ini". Case study harus "hanya bisa menggambarkan kamu", bukan generik.

**Prompt 2.3 — Bentuk jadi 3-beat (jalankan setelah 2.2, per proyek):**

```
Using my answers above and my voice card, write this project as a short case in
three beats: the problem, what I did and decided, and what came of it (keep my
honest, even small, result). Use only what I told you, do not inflate anything,
and keep my words where you can. End with one line on what I would do
differently next time. Then list any spot where you had to guess, so I can fix
it.
```

**Prompt 2.4 — Draft bio + baris contact/CTA (jalankan setelah semua case study):**

```
Write a two-sentence bio and a one-line contact prompt for my portfolio, in my
voice card style. My proof statement: {paste_proof_statement}. My one action:
{your_one_action, e.g. email me to talk}. The bio should say what I do and who
for, not list adjectives. Give me three options, plain and human, no buzzwords.
I will pick one.
```

> Wajib sebelum finalisasi: **read every line out loud**, potong yang tidak akan kamu ucapkan. Ini "before/after" yang jadi deliverable Minggu 2.

---

## FASE 3 — MINGGU 3: Map It & Give It a Face

**Deliverable:** one-line claim + content map + identity kit + set gambar final (dengan catatan satu gambar yang ditolak).

> ⚠️ **CATATAN KHUSUS:** identitas visual kamu SUDAH dikunci di `from_claude_mds/01-DESIGN-TOKENS.md` (claymorphism terracotta, Space Grotesk + Plus Jakarta Sans). Jadi JANGAN pakai prompt "pilih palette dari nol". Cukup jalankan: one-line claim, content map, dan **cek kontras pada palette yang sudah ada**, lalu kunci jadi style note.

**Prompt 3.1 — One-line claim (10 opsi, kamu pilih 1):**

```
Berdasarkan proof statement saya, beri saya 10 versi one-line claim (satu kalimat
yang harus diingat visitor). Tulis dalam gaya saya (voice card). Nilai ke-10-nya
menurut kriteria: apakah orang asing langsung paham apa yang saya kerjakan dan
untuk siapa, dalam hitungan detik? Yang mana yang paling dekat dengan klaim asli
saya, dan kenapa? Saya yang akan memilih dan mempertajam satu.
```

**Prompt 3.2 — Content map (section per halaman + CTA + daftar yang belum punya):**

```
Berdasarkan sitemap (Minggu 1) dan case study (Minggu 2), bantu saya buat
content map: untuk tiap halaman, urutan section-nya, case study mana yang duduk
di mana (lead dengan yang terkuat = Langganin), dan CTA yang jelas untuk tiap
section — semuanya harus mengerucut ke SATU action dari proof statement saya.
Lalu buat daftar "still need to gather": screenshot, link demo/repo, angka,
testimoni, atau apa pun yang belum saya punya dan akan memblokir minggu build.
Format: tabel per halaman.
```

**Prompt 3.3 — Cek kontras palette yang SUDAH ada (bukan pilih baru):**

```
Check my color choices for readability before I commit. Text color: #1F2024 on
background: #F2EFEC, and my link/accent color: #E26B43. Is the contrast strong
enough to read comfortably, including for someone with low vision? Flag anything
that is too light or hard to read on a phone in sunlight, and suggest a safer
hex if so. Plain language, no jargon.
```

**Prompt 3.4 — Kunci jadi style note (dari token yang sudah ada, bukan dari nol):**

```
Saya sudah punya design tokens (di from_claude_mds/01-DESIGN-TOKENS.md dan
02-COMPONENT-PATTERNS.md). Baca file itu, lalu tulis SINGKAT "style guide"
satu layar yang bisa saya tempel ulang tiap kali bikin section: font & ukuran
(heading/body/small label), hex untuk text/background/accent, kapan pakai clay
vs glass, dan berapa jarak napas (spacing) antar elemen. Ringkas, satu layar,
langsung bisa dipakai sebagai instruksi build.
```

**Prompt 3.5 — Kurasi gambar (list kebutuhan + catatan gambar yang ditolak):**

```
Berdasarkan content map, buat daftar gambar yang benar-benar dibutuhkan
portfolio ini. Untuk karya: pakai screenshot ASLI (Langganin, admin panel Merpati,
KulinerKita) — bersih, ter-crop, legible. Untuk "connective tissue": boleh
generate, tapi harus satu gaya konsisten; kalau ada yang kelihatan "AI slop"
(fake-glass leleh, abstrak generik), katakan itu harus DITOLAK dan kenapa. Untuk
foto diri: foto asli, bukan generate. Buat saya daftar final + satu catatan
gambar yang saya tolak dan alasannya.
```

---

## FASE 4 — MINGGU 4: Pick the Stack (+ "empty but live")

**Deliverable:** rationale stack tertulis (yang dipilih + 2 alternatif + kenapa, termasuk "bisa saya maintain?") + URL live kosong + screenshot.

> ⚠️ Stack sudah diputuskan (Next.js + Tailwind v4). Tapi program tetap minta rationale "3 opsi + trade-off". Jalankan prompt 4.1 untuk menghasilkan rationale yang valid (bisa dipakai di write-up capstone), lalu lanjut 4.3 untuk "empty but live".

**Prompt 4.1 — Minta 3 opsi (untuk dokumentasi rationale):**

```
Help me choose a stack for my portfolio. Do not pick for me, give me options.
My constraints: free tools only, I am {a learner who must be able to maintain
and explain it}. What it needs to do: {paste_sitemap_and_content_map}. How my
work must be shown: {live demos + project links + a real contact form}. Does
anything need to be dynamic at launch (a contact form), yes or no? Give me three
options, simplest to most powerful, each with: how I would build it, where I
would host it free, whether it needs a backend, how well it shows my kind of
work, and the real trade-off. End with the one you would pick for me and why.
Then I will decide.
```

> Catatan: jawaban AI untuk ini hanya bukti kamu mempertimbangkan opsi. Keputusan final tetap Next.js + Tailwind v4 (alasannya sudah ada di `05-TECH-STACK.md`).

**Prompt 4.2 — Defend pilihan (bahan write-up capstone):**

```
I am leaning toward this option: {Next.js + Tailwind CSS v4, deployed free}.
Before I commit, explain it to me like I will have to defend the choice to
someone: what each part does, what I will have to learn, what could trip up a
beginner, and what it would cost me to switch later if I outgrow it. Then ask me
two questions to make sure it really fits my work.
```

**Prompt 4.3 — Setup sampai "empty but live":**

```
I have chosen this stack: {Next.js + Tailwind v4, hosted free — Netlify
recommended, Vercel as alternative}. Walk me through setting it up from zero,
one step at a time, waiting for me to confirm each step works before the next.
The goal for today is small and specific: a blank page that shows just my name,
live on a free URL. Tell me exactly what to click or paste, and how to check
each step worked. Assume I have never done this before.
```

> Kalau deploy ke Netlify: homepage harus file `index.html` di root folder yang di-drag (atau pastikan output build Next.js menghasilkan itu). Lihat `05-TECH-STACK.md` bagian deployment.

---

## FASE 5 — MINGGU 5: Ship the Ugly Version

**Deliverable:** URL live dengan semua halaman reachable + catatan reaksi 1 orang nyata + daftar "still ugly".

**Prompt 5.1 — Build SATU section (ulangi per section dari content map):**

```
We are building my portfolio now, one section at a time. My stack: Next.js +
Tailwind v4. My identity: {paste_style_note / point_ADN ke from_claude_mds}. Sebelum
nulis kode, BACA file `from_claude_mds/01-DESIGN-TOKENS.md` dan
`02-COMPONENT-PATTERNS.md` dan ikuti nilai/nilainya persis (warna brand, radius
pill/card, shadow clay/glass, pola button/card/badge/navbar). Start with the
{which_section, e.g. hero}. Here is the content: {paste_content}. Write clean,
simple code for just this section, matching my identity. After the code, explain
the main parts in plain language so I could re-explain them. Keep it
beginner-readable, no clever tricks. Then tell me where to paste it and how to
see it.
```

> Urutan build disarankan: Hero → About → Projects → Skills → Experience → Contact/CTA → Footer. Ikuti `03-PAGE-STRUCTURE.md`. Jangan minta "build seluruh website sekaligus" — section per section.

**Prompt 5.2 — Perbaiki satu hal spesifik (sering dipakai saat build):**

```
Something looks off in this section and I will describe it in plain words, no
jargon: {describe_it, e.g. the spacing is cramped and one image is too big}.
Here is the code: {paste_the_section_code}. Make the smallest change that fixes
just this, do not redesign the rest. Show me only what changed and explain why in
one line, so I understand the fix and can do it myself next time.
```

> Setelah semua section live: kirim link ke **satu orang nyata** (idealnya di bidangmu) dan minta mereka lihat. Catat: apa yang mereka sadari, apa yang membingungkan, apakah karyanya "nendang". Ini deliverable Minggu 5, bukan Minggu 7.

---

## FASE 6 — MINGGU 6: Explain Your Build

**Deliverable:** penjelasan 1 bagian build dengan kata-katamu sendiri.

**Prompt 6.1 — Belajar 1 bagian build-mu sendiri:**

```
Teach me this one piece of my own build: {the_part, e.g. how the layout centers
my cards / how Tailwind clay shadow works / how the nav smooth-scroll connects}.
Explain it like I will have to teach it to a friend tomorrow. Use my actual code:
{paste_the_snippet}. Then ask me two questions to check I understood, and
correct me.
```

> Pilih bagian yang **benar-benar membingungkanmu** saat build Minggu 5, bukan topik yang sudah kamu kuasai. Output yang kamu tulis ulang dengan kata sendiri = deliverable.

---

## FASE 7 — MINGGU 7: Make It Real (⚠️ CHECKPOINT 1 — gate wajib lulus)

**Deliverable:** URL live + fix log (before/after) + hasil review (must-fix/nice-to-have) + bukti must-fix sudah diperbaiki. **Tidak lanjut ke Minggu 8 sebelum lulus.**

**Prompt 7.1 — Audit section (mobile/readability/speed/broken):**

```
Audit this section of my live portfolio for problems. Here is the code:
{paste_the_code} and the live URL: {your_live_url}. Check four things and list
concrete fixes, most important first: mobile (what breaks or looks wrong on a
narrow phone screen), readability (is text big enough, spacing comfortable,
contrast strong enough), speed (anything heavy slowing it down), and breaks (any
broken links, including my demo or repo). For each fix, tell me what to change
and why, in plain language. Targeted fixes, not a rewrite.
```

> Jangan cuma resize browser — buka di **HP asli**. Ukur di 360px, 768px, 1280px.

**Prompt 7.2 — Tes 10 detik pada diri sendiri (sebelum dikasih ke reviewer):**

```
You are a {your_one_person, e.g. tech lead at a small startup} seeing my
portfolio for the first time, with ten seconds. Here is the live page:
{your_live_url}. Answer honestly: in one sentence, what do I do? Do you believe
I am good at it? What is the first thing that confused you or made you want to
leave? Be blunt, I would rather hear it from you than lose the job.
```

**Prompt 7.3 — Tulis ulang hero supaya klaim landing cepat (kalau 7.2 gagal):**

```
My hero does not say what I do clearly enough. My proof statement:
{paste_proof_statement}. My current hero text: {paste_current_hero}. Give me
three hero versions (a headline plus one supporting line) that make a stranger
understand what I do and who for within a few seconds, in my plain voice, no
buzzwords. Tell me which you would pick and why. I will decide.
```

> Kemudian: kirim untuk review (mentor/peer), tanya 2 hal: "10 detik = saya ngapain?" dan "percaya nggak saya jago?". Kumpulkan feedback **tanpa membela diri**, sortir must-fix vs nice-to-have, perbaiki must-fix **di situs live**, balas dengan daftar yang sudah diubah.

---

## FASE 8 — MINGGU 8: Wire One Real Thing

**Deliverable:** bukti 1 fitur nyata berfungsi end-to-end (test submission sampai ke inbox) + explainer data flow dengan kata sendiri.

> ⚠️ Tepat SATU fitur. Untuk portofolio ini = contact form, pakai Netlify Forms (kalau host Netlify) atau Formspree. Jangan bikin server/API sendiri (over-engineering = gagal kriteria).

**Prompt 8.1 — Tambah contact form:**

```
Help me add a working contact form to my portfolio using a free service that
needs no server (recommend one for my stack: {your_stack}). Walk me through it
step by step: the form to paste, matching my identity; how to connect it so
submissions email me; and how to test that a real submission reaches my inbox.
Then explain in plain words where a submitted message goes, so I can explain it
too.
```

**Prompt 8.2 — Buat gagal dengan anggun (empty/invalid/success):**

```
My contact form works on the happy path, but I want it to behave well when
things go wrong. Here is the form code: {paste_the_form_code}. Add clear,
friendly handling for an empty submission, a missing email, and a successful
send (a short "thanks, I will be in touch" message). Keep it simple and matching
my identity, and explain each change in one line so I understand what it does.
```

> Explainer final (dengan kata sendiri) harus menjawab: "apa itu backend, apa yang dilakukan fiturku, bagaimana alur datanya (form → service → inbox)".

---

## FASE 9 — MINGGU 9: Break It Then Launch It (⚠️ CHECKPOINT 2 — gate wajib lulus)

**Deliverable:** daftar "where it breaks" (fix-now vs known-limitation) + bukti fix-now diperbaiki + custom domain HTTPS + analytics + graduate badge + plan "keep building". **Tidak launch sebelum lulus.**

**Prompt 9.1 — Coba rusak situs sendiri:**

```
Help me break my own portfolio before anyone else does. My live URL:
{your_live_url}. Give me a checklist: submit my form empty and with garbage, open
the site in a browser or device I have not tested, click everything including
demo and repo links, submit twice fast. For each, tell me what a well-behaved
site should do, so I can spot where mine misbehaves. Then give me the basic SEO
and meta I need before launch (a page title, a description, a social-share
preview).
```

**Prompt 9.2 — Pasang share preview + meta:**

```
Help me set the share preview so my link looks intentional when someone pastes
it into a chat or a post. My stack: {your_stack}. My proof statement:
{paste_proof_statement}. Give me the exact page title, meta description, and Open
Graph tags (title, description, image) to add, written so they say what I do,
plus where to paste them and how to preview the card before I share it.
```

**Prompt 9.3 — Launch ke custom domain:**

```
I am launching my portfolio on a custom domain: {yourname.com}, hosted on
{your_host}. Walk me through it, step by step for a beginner: pointing the
domain at my site and confirming HTTPS works; confirming the share preview,
favicon, and page titles are right on the real address; and adding free,
privacy-friendly analytics. After each step, tell me how to confirm it worked.
Then give me a final pre-launch checklist to run on my phone.
```

> Badge graduate FlyRank dipasang di footer (link ke halaman verifikasi) — slot layout-nya sudah dialokasikan di `03-PAGE-STRUCTURE.md` bagian Footer.

**Prompt 9.4 — Setup kebiasaan keep-building:**

```
I want my portfolio to keep growing after this. Based on how we built it, write
me a short "add a new case study" checklist I can follow in 30 minutes whenever
I finish a project, reusing my three-beat shape and my existing layout. Then help
me name the very next real piece of work I should add:
{a_project_you_have_coming_up}, and suggest a concrete reminder to do it.
```

> Sortir temuan 9.1 dengan jujur: **fix-now** (diperbaiki sekarang) vs **known limitation** (diakui, tidak disembunyikan). Known limitation yang jujur itu profesional, bukan cacat.

---

## FASE 10 — MINGGU 10: Send the Link (CAPSTONE)

**Deliverable (`package`):** domain custom live + demo 3–5 menit + build write-up + honest build-in-public story. Submit ke FlyRank showcase.

**Prompt 10.1 — Tulis launch story yang jujur:**

```
Help me write a short, honest "how I built my portfolio with AI" post, not a
brag. Interview me first: what did I make and why, what is the one thing AI did
that I could not have done alone, and what is the one thing that broke and what
I learned. Ask me one question at a time. Then draft the post in my voice
{paste_your_voice_card}, 200 to 300 words, honest about where AI helped. Start.
```

**Prompt 10.2 — Susun build write-up (bagian dari package):**

```
Bantu saya susun build write-up singkat untuk capstone, dari pekerjaan yang sudah
kita lakukan: (1) stack yang saya pilih dan kenapa — termasuk dua opsi yang TIDAK
saya pilih (dari rationale Minggu 4), (2) hal tersulit yang pernah rusak dan
bagaimana saya memperbaikinya (dari fix log Minggu 7 & 9), (3) apa yang akan saya
bangun selanjutnya (dari plan Minggu 9). Tulis berdasarkan fakta dari sesi-sesi
kita, jangan mengarang.
```

**Prompt 10.3 — Susun naskah demo 3–5 menit:**

```
Bantu saya susun script demo 3–5 menit untuk capstone. Strukturnya: (1) buka
situs live dan jelaskan klaim utama dalam 10 detik, (2) tunjukkan SATU fitur yang
benar-benar berfungsi (contact form) secara live, (3) tunjukkan SATU tempat di
mana AI melakukan heavy lifting dalam proses build, (4) tutup dengan langkah
berikutnya. Tulis dalam gaya bicara saya, santai tapi teknis.
```

> Setelah package selesai: pasang graduate badge (kalau belum) + submit ke FlyRank showcase + simpan AI workspace (context doc) supaya "keep building" bisa lanjut.

---

## Cheatsheet: urutan ringkas

| Tahap | Prompt inti | Output yang disimpan |
|---|---|---|
| 0 Setup | Blok Konteks + Mode Interview + baca referensi | context.md / Project |
| W1 | 1.1 → 1.2 → 1.3 → 1.4 | Proof statement + sitemap |
| W2 | 2.1 → 2.2 → 2.3 (×3 proyek) → 2.4 | Voice card + 3 case study |
| W3 | 3.1 → 3.2 → 3.3 → 3.4 → 3.5 | Claim + content map + style note + gambar |
| W4 | 4.1 → 4.2 → 4.3 | Rationale stack + URL live kosong |
| W5 | 5.1 (per section) → 5.2 (fix) → kirim ke orang nyata | Situs live (ugly) + reaksi orang |
| W6 | 6.1 | Penjelasan 1 bagian build |
| W7 | 7.1 → 7.2 → 7.3 → review → fix | Fix log + lulus Checkpoint 1 |
| W8 | 8.1 → 8.2 | Contact form bekerja + explainer |
| W9 | 9.1 → 9.2 → 9.3 → 9.4 | Lulus Checkpoint 2 + domain + badge |
| W10 | 10.1 → 10.2 → 10.3 | Capstone package + submit showcase |

## Catatan penting

- **Jangan mengarang data.** Setiap angka/pencapaian/yang ditulis di copy harus benar-benar punyamu. Lebih baik "known limitation" jujur daripada klaim yang runtuh saat dicek reviewer.
- **AI memberimu opsi, kamu yang memutuskan.** Ini berlaku untuk proof statement, palette, stack, hero copy, dan seterusnya.
- **Konsisten dengan design system.** Setiap kali minta AI bikin komponen/UI, pastikan promptnya menyebut "baca `from_claude_mds/01-DESIGN-TOKENS.md` & `02-COMPONENT-PATTERNS.md` dan ikuti persis" — biar tidak melenceng dari identitas Langganin (claymorphism terracotta + glassmorphism).