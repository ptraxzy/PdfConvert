import Link from 'next/link';
import { FileImage, ImagePlus, FilePlus2, FileDown, Scissors, RotateCw, Upload, FileText, Presentation } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const tools = [
    {
      icon: FileImage,
      title: 'PDF ke JPG',
      description: 'Ubah PDF jadi gambar',
      href: '/tools/pdf-to-jpg',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
    },
    {
      icon: ImagePlus,
      title: 'JPG ke PDF',
      description: 'Gabungin foto jadi PDF',
      href: '/tools/jpg-to-pdf',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: FilePlus2,
      title: 'Gabung PDF',
      description: 'Satuin beberapa PDF',
      href: '/tools/merge-pdf',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      icon: Scissors,
      title: 'Pisah PDF',
      description: 'Pisahin per halaman',
      href: '/tools/split-pdf',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
    {
      icon: FileDown,
      title: 'Kompres PDF',
      description: 'Kecilin ukuran file',
      href: '/tools/compress-pdf',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      icon: RotateCw,
      title: 'Putar PDF',
      description: 'Rotasi orientasi halaman',
      href: '/tools/rotate-pdf',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
    },
    {
      icon: FileText,
      title: 'DOCX ke PDF',
      description: 'Word doc jadi pdf',
      href: '/tools/docx-to-pdf',
      color: 'from-indigo-500 to-violet-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
    },
    {
      icon: Presentation,
      title: 'PPT ke PDF',
      description: 'PowerPoint jadi pdf',
      href: '/tools/ppt-to-pdf',
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      {/* Bagian Hero Utama */}
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
          <span className="text-sm font-medium text-red-600">✨ 100% Gratis & Aman</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 opacity-0 animate-[slideUp_0.8s_ease-out_forwards]">
          Kelola PDF dengan Mudah
        </h1>

        <p className="text-xl text-gray-600 mb-10 opacity-0 animate-[slideUp_0.8s_ease-out_0.1s_forwards]">
          Konversi, gabung, kompres, dan edit PDF online tanpa ribet
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
          <a
            href="#tools"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <Upload className="w-5 h-5" />
            Mulai Sekarang
          </a>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Tidak perlu install apapun
          </div>
        </div>
      </div>

      {/* Grid Alat PDF */}
      <div id="tools" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Pilih Alat PDF
            </h2>
            <p className="text-gray-600">
              Semua tools yang kamu butuhkan dalam satu tempat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-gray-300 transform hover:-translate-y-1 transition-all duration-300 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                {/* Konten Kartu */}
                <div className="relative">
                  <div className={`w-14 h-14 ${tool.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className={`w-7 h-7 ${tool.textColor}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {tool.description}
                  </p>

                  <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-red-500 transition-colors">
                    Pilih alat
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Fitur Unggulan */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Super Cepat</h3>
              <p className="text-gray-600">Proses langsung di browser, tanpa upload</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Aman</h3>
              <p className="text-gray-600">File tetap di device kamu, privasi terjaga</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Selamanya Gratis</h3>
              <p className="text-gray-600">Unlimited, tanpa batasan apapun</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
