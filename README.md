# Ilham Arifin — Portofolio

Portofolio personal yang dibangun dengan React + Vite dan Tailwind CSS. Menampilkan proyek-proyek, pengalaman kerja dan organisasi, serta teknologi yang dikuasai.

**Tentang**

- Nama: Ilham Arifin
- Peran: Fullstack Developer & Tech Enthusiast

Katalog ini berisi ringkasan proyek yang pernah dikerjakan (UI, landing page, aplikasi React, dan backend Laravel), pengalaman kerja/magang, serta keterampilan teknis.

**Sorotan Proyek**

- Redesign & CMS Website Umaroh (2025) — React + Laravel + REST API
- ORMIK Explore 2025 – Event Landing Page (2025) — React + TypeScript
- Movie App (2024) — React + TMDB API
- SIPEKA — Sistem Informasi Kesehatan Anak (2024) — Laravel + MySQL

Beberapa proyek memiliki demo live dan/atau repositori — lihat folder `src/utils/data/projects.js` untuk daftar lengkap.

**Pengalaman & Organisasi**

- PKL / Operator Komputer — SMKN 1 Padangsidimpuan
- Magang Fullstack & Landing Page Builder — beberapa perusahaan (lihat `src/utils/data/experiences.js`)
- Anggota organisasi kampus seperti GDGOC dan MUDENG (lihat `src/utils/data/experiences.js`)

**Teknologi Utama**

- Frontend: React, Tailwind CSS, TypeScript (beberapa proyek)
- Backend: Laravel, PHP, REST API
- Alat & Lainnya: Vite, MySQL, Git, Figma, Vercel

**Menjalankan Proyek Secara Lokal**

Persyaratan: Node.js (LTS), npm atau yarn.

Instal dependensi:

```bash
npm install
# atau
yarn
```

Menjalankan server pengembangan:

```bash
npm run dev
# atau
yarn dev
```

Build untuk produksi:

```bash
npm run build
# atau
yarn build
```

Preview hasil build:

```bash
npm run preview
# atau
yarn preview
```

**Variabel Lingkungan**

- Jika ingin menguji formulir kontak, siapkan file `.env` dengan variabel yang digunakan di `src/pages/Contact.jsx`:
  - `VITE_EMAIL_ACCESS_KEY` — kunci akses ke layanan email
  - `VITE_BASE_URL_EMAIL` — endpoint API pengiriman email

**Deployment**

- Konfigurasi untuk deployment menggunakan Vercel sudah disertakan (`vercel.json`). Anda dapat meng-deploy langsung ke Vercel untuk preview atau produksi.

**Sumber Data**

- Daftar proyek: `src/utils/data/projects.js`
- Daftar pengalaman: `src/utils/data/experiences.js`
- Daftar skill: `src/utils/data/skills.js`

**Kontribusi**

- Jika Anda ingin berkontribusi atau mengajukan perbaikan, buat issue atau pull request pada repositori GitHub.

Lisensi: lihat file LICENSE jika tersedia.

---

File ini sudah diadaptasi untuk menggambarkan isi portofolio yang ada di kode sumber proyek.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
