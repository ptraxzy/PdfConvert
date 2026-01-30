import Link from 'next/link';
import { FileImage, ImagePlus, FilePlus2, FileDown, Scissors, RotateCw, Upload, FileText, Presentation, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const tools = [
    {
      icon: FileImage,
      title: 'PDF ke JPG',
      description: 'Ekstrak halaman PDF menjadi gambar berkualitas tinggi.',
      href: '/tools/pdf-to-jpg',
      iconColor: 'text-red-500',
    },
    {
      icon: ImagePlus,
      title: 'JPG ke PDF',
      description: 'Ubah gambar menjadi dokumen PDF dalam hitungan detik.',
      href: '/tools/jpg-to-pdf',
      iconColor: 'text-blue-500',
    },
    {
      icon: FilePlus2,
      title: 'Gabung PDF',
      description: 'Satukan banyak file PDF menjadi satu dokumen rapi.',
      href: '/tools/merge-pdf',
      iconColor: 'text-green-500',
    },
    {
      icon: Scissors,
      title: 'Pisah PDF',
      description: 'Ambil beberapa halaman atau pisahkan PDF per halaman.',
      href: '/tools/split-pdf',
      iconColor: 'text-orange-500',
    },
    {
      icon: FileDown,
      title: 'Kompres PDF',
      description: 'Perkecil ukuran file PDF tanpa mengurangi kualitas visual.',
      href: '/tools/compress-pdf',
      iconColor: 'text-purple-500',
    },
    {
      icon: RotateCw,
      title: 'Putar PDF',
      description: 'Rotasi halaman PDF anda ke orientasi yang benar.',
      href: '/tools/rotate-pdf',
      iconColor: 'text-pink-500',
    },
    {
      icon: FileText,
      title: 'DOCX ke PDF',
      description: 'Konversi dokumen Word menjadi format PDF profesional.',
      href: '/tools/docx-to-pdf',
      iconColor: 'text-indigo-500',
    },
    {
      icon: Presentation,
      title: 'PPT ke PDF',
      description: 'Ubah presentasi PowerPoint menjadi file PDF siap bagi.',
      href: '/tools/ppt-to-pdf',
      iconColor: 'text-teal-500',
    },
    {
      icon: FileText,
      title: 'PDF ke Word',
      description: 'Ubah file PDF menjadi dokumen Word yang bisa diedit.',
      href: '/tools/pdf-to-docx',
      iconColor: 'text-blue-600',
    },
    {
      icon: Presentation,
      title: 'PDF ke PPT',
      description: 'Konversi konten PDF menjadi slide PowerPoint.',
      href: '/tools/pdf-to-ppt',
      iconColor: 'text-orange-600',
    },
    {
      icon: FilePlus,
      title: 'PDF ke Excel',
      description: 'Ekstrak data tabel ke format Spreadsheet.',
      href: '/tools/pdf-to-xlsx',
      iconColor: 'text-green-600',
    },
    {
      icon: FilePlus,
      title: 'Excel ke PDF',
      description: 'Ubah spreadsheet menjadi dokumen PDF rapi.',
      href: '/tools/xlsx-to-pdf',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 bg-brand-card border-b border-brand-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-secondary tracking-tight mb-6 leading-tight">
            Semua Alat PDF yang Anda Butuhkan,<br />
            <span className="text-brand-primary">Dalam Satu Tempat.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-text/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Konversi, gabung, dan edit file PDF Anda secara instan.
            <br className="hidden md:inline" /> 100% Gratis, Aman, dan Proses di Browser.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#tools"
              className="px-8 py-4 bg-brand-primary hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-lg flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Mulai Sekarang
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white border border-brand-border hover:bg-gray-50 text-brand-secondary font-semibold rounded-xl text-lg transition-colors"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-text/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" />
              Tanpa Instalasi
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" />
              Privasi Terjamin
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" />
              Gratis Selamanya
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-24 px-4 md:px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">Pilih Alat PDF</h2>
            <p className="text-brand-text/70 max-w-2xl mx-auto">
              Pilih dari koleksi alat lengkap kami untuk memproses dokumen PDF Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group p-8 bg-white border border-brand-border rounded-2xl hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 flex flex-col items-center text-center h-full"
              >
                <div className={`p-4 rounded-2xl bg-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300 ${tool.iconColor.replace('text-', 'bg-').replace('500', '100')}`}>
                  <tool.icon className={`w-8 h-8 ${tool.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-brand-text/70 leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Value Props */}
      <section className="py-24 bg-brand-card px-4 md:px-6 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Presentation className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-secondary mb-3">Mudah & Cepat</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Antarmuka intuitif memudahkan siapa saja untuk mengonversi file. Cukup drag & drop, selesai dalam hitungan detik.
              </p>
            </div>
            <div className="text-left">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-secondary mb-3">Keamanan Prioritas</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Kami menggunakan enkripsi SSL canggih. Selain itu, file Anda diproses secara lokal dan tidak disimpan di server kami.
              </p>
            </div>
            <div className="text-left">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <RotateCw className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-secondary mb-3">Multi-Platform</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Akses KonversiPDF dari perangkat apa pun—Windows, Mac, Linux, maupun smartphone Android dan iOS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
