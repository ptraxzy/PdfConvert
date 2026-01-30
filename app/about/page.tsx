import Link from 'next/link';
import { ArrowLeft, Shield, Zap, Lock, Mail, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
    const features = [
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Proses langsung di browser tanpa upload. Instant results!',
        },
        {
            icon: Lock,
            title: '100% Private',
            description: 'File tidak pernah leave device kamu. Zero server upload.',
        },
        {
            icon: Shield,
            title: 'Selamanya Gratis',
            description: 'Unlimited conversions. No hidden fees. No premium tiers.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
                {/* Tombol Kembali */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 transition-colors opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Beranda
                </Link>

                {/* Bagian Hero */}
                <div className="text-center mb-16 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Tentang KonversiPDF
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                        Platform konversi PDF modern yang mengutamakan privasi, kecepatan, dan kemudahan penggunaan.
                    </p>
                    <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Versi 1.0.0
                    </div>
                </div>

                {/* Layout Dua Kolom: Cerita + Pengembang */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
                    {/* Bagian Cerita - 2 kolom */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Kenapa Kami Buat Ini?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="mb-4">
                                Kebanyakan tools PDF online butuh upload file ke server mereka. Selain lambat,
                                ini juga <strong>risiko privasi</strong> yang gak perlu. Gimana kalau file nya dokumen penting?
                                Scan KTP? Dokumen rahasia perusahaan?
                            </p>
                            <p className="mb-4">
                                Makanya kami buat <strong>KonversiPDF</strong> - platform yang proses <em>semua di browser kamu</em>.
                                File tidak pernah diupload ke server. Zero tracking. Zero data collection.
                            </p>
                            <p className="mb-6">
                                Hasilnya? Tools PDF yang <strong>cepat, aman, dan gratis selamanya</strong>.
                            </p>

                            {/* Stack Teknologi */}
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-2 text-base">Stack Teknologi</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm text-gray-700">
                                        Next.js
                                    </span>
                                    <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm text-gray-700">
                                        Tailwind CSS
                                    </span>
                                    <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm text-gray-700">
                                        Supabase
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Pengembang - 1 kolom */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-200 p-6 shadow-lg sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                                Pengembang
                            </h3>

                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                {/* Kode Avatar */}
                                <div className="flex flex-col items-center mb-4">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                                        <span className="text-2xl font-bold text-white">MP</span>
                                    </div>
                                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                        Pengembang
                                    </div>
                                </div>

                                {/* Info Pengembang */}
                                <div className="text-center mb-4">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                                        Muhammad Putra Alghifary
                                    </h4>
                                    <p className="text-sm text-gray-600 font-medium mb-3">
                                        Full Stack Developer
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Passionate about building web applications with modern technologies
                                    </p>
                                </div>

                                {/* Kontak */}
                                <div className="flex gap-2 justify-center">
                                    <a
                                        href="mailto:putraagifary12@gmail.com"
                                        className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span className="font-medium">Email</span>
                                    </a>
                                    <a
                                        href="https://github.com/ptraxzy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span className="font-medium">GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Fitur */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Kenapa KonversiPDF Berbeda?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow opacity-0 animate-[slideUp_0.6s_ease-out_forwards]"
                                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                            >
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Siap Mulai?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Semua tools gratis dan unlimited. No signup required.
                    </p>
                    <Link
                        href="/#tools"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Mulai Konversi PDF
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
