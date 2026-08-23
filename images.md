# Images Needed — Dzaki Portfolio

Daftar final gambar yang benar-benar dibutuhkan, diturunkan dari content map (sitemap Minggu 1 + case study Minggu 2).

Aturan besar:
- **Karya = screenshot ASLI.** Bersih, ter-crop, legible. Jangan generate mockup karya.
- **Connective tissue = boleh generate**, tapi satu gaya konsisten.
- **Foto diri = foto asli**, bukan generate.

---

## 1. Screenshot ASLI (karya) — WAJIB

| # | Gambar | Untuk | Ukuran yang disarankan |
|---|---|---|---|
| 1 | Screenshot landing page Langganin | Card unggulan (span 2 kolom) + thumbnail | 1200×800, crop bersih |
| 2 | Screenshot dashboard/spending Langganin (kalau ada) | Variasi dalam card Langganin | 1200×800 |
| 3 | Screenshot admin panel Merpati Solo Bakery | Card Merpati | 900×600 |
| 4 | Screenshot app/repo KulinerKita | Card KulinerKita | 900×600 |

Catatan screenshot:
- Ambil di viewport desktop lebar, scroll area utama saja.
- Ter-crop rapi, tanpa address bar, tab, atau elemen browser lain.
- Teks dalam screenshot harus legible (tidak melebar/hancur).
- Kalau satu fitur masih belum live/berfungsi (misal backend Langganin), jangan potret area kosong — potret yang memang tampil baik.

---

## 2. Foto diri — WAJIB (asli, bukan generate)

| # | Gambar | Untuk | Catatan |
|---|---|---|---|
| 5 | Foto profil | Section About (+ opsi di Hero) | Foto asli, cahaya natural, latar bersih/simpel. Bukan hasil AI. |

---

## 3. Connective tissue — boleh generate (satu gaya)

Semua elemen dekoratif ini MENGIKUTI identitas visual yang sudah dikunci: claymorphism terracotta, warm-neutral, dan tidak boleh ada elemen yang kelihatan "AI slop".

| # | Gambar | Untuk | Status |
|---|---|---|---|
| 6 | Ilustrasi/visual pendukung hero (opsional) | Mengisi sisi visual hero selain mockup | Generate |
| 7 | Ilustrasi section CTA (opsional) | Latar visual penutup | Generate |

---

## 4. GAYA WAJIB untuk semua gambar generate

Satu bahasa visual, agar tidak terlihat generik:
- **Warna**: warm terracotta-orange `#BF4D28`, warm-neutral beige `#F2EFEC`, cream.
- **Bentuk**: clay/soft blobs, rounded, bertekstur seperti tanah liat, bukan gradasi glossy.
- **Lampu**: satu arah, lembut (light from top-left).
- **Tidak boleh**: glass leleh / icemelt, krom, neon, gradasi pelangi, ilustrasi abstrak yang tidak jelas, stock-photo look.
- **Gaya label**: flat minimal illustration atau clay 3D soft — pilih SATU dan konsisten di semua gambar generate.

---

## 5. GAMBAR YANG SAYA TOLAK (dan kenapa)

**DITOLAK — semua visual "AI slop" berikut, dalam gaya apa pun:**

1. **Fake-glass leleh (icemelt/glassy blobs).** Ini pola paling umum hasil AI dan langsung bikin situs terlihat "AI-generated". Terlalu glossy, keliatan artefak render, dan nggak cocok sama claymorphism kita yang seharusnya matte dan hangat. **Kenapa ditolak:** justru melawan identitas yang sudah kita kunci (clay = matte, bukan glass meleleh). Gaya ini memakai efek glass di tempat yang harusnya clay.

2. **Abstrak generik (blob warna acak, gradasi tidak jelas, bentuk organik tanpa makna).** Terlihat seperti placeholder template, bukan keputusan desain. **Kenapa ditolak:** tidak melayani satu klaim (produk live), cuma jadi hiasan kosong. Buang napas visual yang tidak menjelaskan apa pun.

3. **Fake UI mockup yang di-generate** (dipakai sebagai "screenshot" karya). **Kenapa ditolak:** menipu. Proof statement kita berdiri di atas produk yang benar-benar live — mockup buatan AI merusak klaim itu. Screenshot karya WAJIB asli.

4. **Foto profil hasil generate / AI face.** **Kenapa ditolak:** audience-nya HRD, dan klaimnya kejujuran. Wajah buatan AI justru bikin orang nggak percaya. Foto diri harus asli.

---

## 6. Prompt siap pakai untuk gambar generate (connective tissue)

Gunakan prompt ini, ganti `[SUBJECT]` sesuai kebutuhan. Semua pakai bahasa visual yang sama (clay 3D soft, terracotta).

**Prompt umum (clay 3D soft):**
```
Soft clay 3D illustration of [SUBJECT], warm terracotta-orange (#BF4D28) and
cream beige (#F2EFEC) palette, matte clay material, rounded puffy shapes,
soft single light source from top-left, gentle drop shadow, minimal flat
background in warm neutral beige, clean composition, high quality, no text,
no glass, no chrome, no neon, no gradients rainbow, no generic abstract blobs.
```

**Contoh isi `[SUBJECT]`:**
- `a small alarm clock reminding about subscriptions` → untuk reminder multi-channel
- `a stack of credit cards and bills` → untuk visual masalah "surprise charge"
- `a hand building a simple house from clay blocks` → untuk visual "ide jadi produk live"
- `a friendly chatbot in a rounded clay bubble` → untuk visual insight AI

**Prompt versi ilustrasi flat (kalau pilih gaya flat, bukan clay 3D):**
```
Flat minimal illustration of [SUBJECT], terracotta-orange (#BF4D28) and cream
beige (#F2EFEC), simple rounded shapes, warm neutral background, no texture
clutter, no text, no glass effects, no chrome, no neon.
```

---

## 7. Struktur folder & nama file final

Folder sudah dibuat: `public/images/` untuk karya & generate. Foto profil tetap di `public/profilephoto.JPG` (sudah ada).

```
public/
├─ profilephoto.JPG          <- foto profil (sudah ada, pakai ini)
└─ images/
   ├─ langganin-hero.png      <- screenshot landing Langganin
   ├─ langganin-dashboard.png <- screenshot dashboard Langganin (opsional)
   ├─ merpati.png             <- screenshot admin panel Merpati
   ├─ kulinerkita.png         <- screenshot app/repo KulinerKita
   ├─ hero-visual.png         <- connective tissue (generate, opsional)
   └─ cta-visual.png          <- connective tissue (generate, opsional)
```

Cara pakai di kode: `/images/langganin-hero.png`, `/profilephoto.JPG`.

---

## 8. Checklist sebelum build

- [ ] 4 screenshot asli karya (Langganin ×2, Merpati, KulinerKita) — bersih & legible
- [ ] 1 foto profil asli
- [ ] 0 gambar generate untuk karya (WAJIB asli)
- [ ] Semua gambar generate (jika ada) satu gaya konsisten
- [ ] Tidak ada satupun gambar yang masuk kategori "DITOLAK" di atas
- [ ] Semua link demo/repo terverifikasi berfungsi
