# 📄 KonversiPDF - Modern PDF Tools

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

Aplikasi web modern untuk konversi dan manipulasi file PDF secara gratis. Dibangun dengan Next.js 14, Tailwind CSS, dan teknologi pemrosesan PDF client-side untuk privasi maksimal.

🌐 **Demo Live:** [https://konversipdf.com](https://konversipdf.com) (Contoh URL)

## ✨ Fitur Unggulan

- **Privacy-First**: Sebagian besar pemrosesan (Merge, Split, Rotate, PDF ke JPG) berjalan 100% di browser pengguna. File Anda tidak pernah meninggalkan perangkat Anda.
- **Server-Side Conversion**: Dukungan konversi format Office (DOCX, PPT) menggunakan API secure server-side.
- **Modern UI/UX**: Desain responsif, animasi halus, dan antarmuka yang intuitif.
- **PWA Ready**: Dapat diinstal sebagai aplikasi di perangkat mobile dan desktop.

### 🛠️ Daftar Alat
| Alat | Deskripsi | Processing |
|------|-----------|------------|
| 🖼️ **PDF ke JPG** | Ubah halaman PDF menjadi gambar kualitas tinggi | Client-side |
| 📷 **JPG ke PDF** | Gabungkan banyak foto menjadi satu file PDF | Client-side |
| 🔗 **Gabung PDF** | Satukan beberapa file PDF menjadi satu | Client-side |
| ✂️ **Pisah PDF** | Pecah file PDF per halaman atau range tertentu | Client-side |
| 📦 **Kompres PDF** | Perkecil ukuran file PDF tanpa kurangi kualitas | Client-side |
| 🔄 **Putar PDF** | Rotasi halaman PDF 90/180/270 derajat | Client-side |
| 📝 **DOCX ke PDF** | Konversi dokumen Word ke PDF presisi tinggi | Server-side (API) |
| 📊 **PPT ke PDF** | Konversi presentasi PowerPoint ke PDF | Server-side (API) |

## 🚀 Teknologi

Project ini dibangun menggunakan stack modern:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Core**: `pdf-lib` & `pdfjs-dist`
- **Animations**: CSS Animations & Tailwind config

## 💻 Cara Menjalankan (Local Development)

Ikuti langkah ini untuk menjalankan project di komputer Anda:

1. **Clone Repository**
   ```bash
   git clone https://github.com/username/pdfconvert.git
   cd pdfconvert
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Setup Environment Variables**
   Buat file `.env.local` di root folder dan tambahkan API Key untuk fitur DOCX/PPT (Dapatkan di [ConvertAPI](https://www.convertapi.com/)):
   ```env
   PDF_API_KEY=your_convert_api_secret_key_here
   ```

4. **Jalankan Server Development**
   ```bash
   npm run dev
   ```

5. **Buka Browser**
   Buka [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## 📦 Deployment (Vercel)

Cara termudah untuk deploy adalah menggunakan [Vercel](https://vercel.com/):

1. Push project ke GitHub/GitLab.
2. Import project di dashboard Vercel.
3. Masukkan Environment Variable `PDF_API_KEY`.
4. Klik **Deploy**.

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat Pull Request untuk fitur baru atau perbaikan bug.

1. Fork repository ini
2. Buat branch fitur (`git checkout -b fitur-keren`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur keren'`)
4. Push ke branch (`git push origin fitur-keren`)
5. Buat Pull Request

## 📝 Lisensi

Project ini dilisensikan di bawah [MIT License](LICENSE).

---

Dibuat dengan ❤️ oleh **Muhammad Putra Alghifary**
