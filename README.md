# KonversiPDF — Aplikasi PDF Tools Modern & Cepat

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38bdf8?style=flat-square&logo=tailwindcss) ![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**KonversiPDF** adalah aplikasi manipulasi PDF berbasis web yang dibangun dengan **Next.js 14**. Aplikasi ini dirancang untuk memberikan pengalaman pengguna yang cepat, aman, dan modern dengan fokus pada privasi data (client-side processing).

Aplikasi ini menghadirkan berbagai alat PDF esensial, tampilan bersih (clean UI), performa tinggi, dan sepenuhnya responsif di berbagai perangkat.

---

## � Fitur Utama

- 🖼️ **PDF ke JPG** — Ubah halaman PDF menjadi gambar berkualitas tinggi (Batch support).
- 📷 **JPG ke PDF** — Gabungkan banyak foto menjadi satu tak dokumen PDF.
- 🔗 **Gabung PDF (Merge)** — Satukan beberapa file PDF menjadi satu file urut.
- ✂️ **Pisah PDF (Split)** — Pecah file PDF per halaman atau ambil halaman tertentu.
- 📦 **Kompres PDF** — Perkecil ukuran file PDF agar lebih hemat penyimpanan.
- 🔄 **Putar PDF (Rotate)** — Rotasi orientasi halaman PDF (90°/180°/270°).
- 📝 **Konversi Office** — Dukungan konversi DOCX dan PPT ke PDF (via Server API).
- � **Privacy-First** — Hampir semua proses dilakukan di browser pengguna (Client-side), file aman.
- 📱 **Responsive Design** — Tampilan optimal di Desktop, Tablet, dan Mobile.

---

## �️ Tech Stack

Project ini dibangun menggunakan teknologi web modern untuk performa dan developer experience terbaik:

- **Next.js 14** 
- **TypeScript**
- **Tailwind CSS** 
- **Framer Motion**
- **pdf-lib** & **pdfjs-dist** 
- **Lucide React** 
- **Vercel** 

---

## 💻 Cara Menjalankan (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer Anda:

### 1. Clone Repository
```bash
git clone https://github.com/ptraxzy/PdfConvert.git
cd PdfConvert
```

### 2. Install Dependencies
Pastikan Anda sudah menginstall [Node.js](https://nodejs.org/) (versi 18+ direkomendasikan).
```bash
npm install
# atau
yarn install
```

### 3. Setup Environment Variables
Buat file `.env.local` di root folder project. Tambahkan API Key untuk fitur konversi Office (DOCX/PPT). Anda bisa mendapatkan key gratis di [ConvertAPI](https://www.convertapi.com/).

```env
# .env.local
PDF_API_KEY=your_convert_api_secret_key_here
# Optional: Key khusus development
PDF_API_SANDBOX_KEY=your_sandbox_key_here
```

### 4. Jalankan Server Development
```bash
npm run dev
```

Buka browser dan akses **[http://localhost:3000](http://localhost:3000)**. 🎉

---

## 📦 Struktur Project

```
├── app/                  # App Router pages & API routes
│   ├── api/              # Server-side API endpoints
│   ├── tools/            # Halaman masing-masing alat PDF
│   └── page.tsx          # Landing page
├── components/           # Reusable UI components
├── lib/                  # Utility functions (PDF processing logic)
├── public/               # Static assets (images, icons)
└── ...config files
```

---

## 🤝 Kontribusi

Kontribusi selalu terbuka! Jika Anda ingin menambahkan fitur atau memperbaiki bug:

1. **Fork** repository ini.
2. Buat branch fitur baru (`git checkout -b fitur-keren`).
3. **Commit** perubahan Anda (`git commit -m 'Menambahkan fitur keren'`).
4. **Push** ke branch tersebut (`git push origin fitur-keren`).
5. Buat **Pull Request** di GitHub.

---

## 📝 Lisensi

Project ini dilisensikan di bawah **[MIT License](LICENSE)**.

---

Dibuat dengan ❤️ oleh **Muhammad Putra Alghifary**
