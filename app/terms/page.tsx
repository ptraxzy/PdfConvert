import Link from 'next/link';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Beranda
                </Link>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                        <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Syarat & Ketentuan
                    </h1>
                    <p className="text-lg text-gray-600">
                        Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                    <div className="prose prose-lg max-w-none">
                        {/* Intro */}
                        <p className="text-gray-600 text-lg">
                            Dengan menggunakan KonversiPDF, kamu setuju dengan syarat dan ketentuan berikut.
                            Mohon baca dengan seksama.
                        </p>

                        {/* Acceptable Use */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                                <h2 className="text-2xl font-bold text-gray-900 m-0">Penggunaan yang Diizinkan</h2>
                            </div>
                            <p className="text-gray-600">
                                KonversiPDF boleh digunakan untuk:
                            </p>
                            <ul className="text-gray-600">
                                <li>Personal use (pribadi)</li>
                                <li>Commercial use (komersial)</li>
                                <li>Educational purposes (edukasi)</li>
                                <li>Non-profit organizations</li>
                            </ul>
                            <p className="text-gray-600">
                                Kamu bebas pakai tools kami untuk project apapun, <strong>unlimited dan gratis</strong>.
                            </p>
                        </section>

                        {/* Prohibited Use */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="w-6 h-6 text-red-600" />
                                <h2 className="text-2xl font-bold text-gray-900 m-0">Penggunaan yang Dilarang</h2>
                            </div>
                            <p className="text-gray-600">
                                Kamu <strong>tidak boleh</strong>:
                            </p>
                            <ul className="text-gray-600">
                                <li>Clone atau republish website ini sebagai produk kamu sendiri</li>
                                <li>Gunakan untuk aktivitas ilegal atau merugikan pihak lain</li>
                                <li>Attempt to hack, DDoS, atau abuse service kami</li>
                                <li>Remove atau modify copyright notices</li>
                                <li>Reverse engineer kode kami (tapi kamu boleh inspect source code untuk belajar!)</li>
                            </ul>
                        </section>

                        {/* Service Availability */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ketersediaan Layanan</h2>
                            <p className="text-gray-600">
                                Kami berusaha untuk menjaga service online 24/7, tapi:
                            </p>
                            <ul className="text-gray-600">
                                <li>Kami tidak menjamin 100% uptime</li>
                                <li>Maintenance atau updates mungkin menyebabkan downtime sementara</li>
                                <li>Service diberikan "as is" without warranties</li>
                            </ul>
                            <p className="text-gray-600">
                                Karena semua proses client-side, service tidak depend on server availability.
                                Selama kamu bisa load website, tools akan berfungsi.
                            </p>
                        </section>

                        {/* Intellectual Property */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
                            <p className="text-gray-600">
                                Kode, design, dan content website ini adalah milik KonversiPDF, kecuali
                                yang secara eksplisit disebutkan menggunakan open-source libraries.
                            </p>
                            <p className="text-gray-600">
                                Libraries yang kami pakai (pdf-lib, pdfjs-dist, dll) memiliki lisensi masing-masing.
                                Check <code>package.json</code> untuk detail lisensi dependencies.
                            </p>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
                            <p className="text-gray-600">
                                KonversiPDF tidak bertanggung jawab atas:
                            </p>
                            <ul className="text-gray-600">
                                <li>Kehilangan data atau file (walaupun ini technically impossible karena client-side)</li>
                                <li>Errors atau bugs dalam hasil konversi</li>
                                <li>Penggunaan hasil konversi untuk tujuan yang melanggar hukum</li>
                                <li>Kerugian finansial atau lainnya yang timbul dari penggunaan service</li>
                            </ul>
                            <p className="text-gray-600">
                                Gunakan tools ini dengan bijak dan selalu backup file penting kamu!
                            </p>
                        </section>

                        {/* Changes to Terms */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat</h2>
                            <p className="text-gray-600">
                                Kami berhak mengubah terms ini kapan saja. Perubahan signifikan akan kami
                                informasikan di homepage. Dengan terus menggunakan service setelah perubahan,
                                kamu dianggap setuju dengan terms yang baru.
                            </p>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontak</h2>
                            <p className="text-gray-600 mb-0">
                                Ada pertanyaan tentang terms ini? Hubungi kami di{' '}
                                <a href="mailto:legal@konversipdf.com" className="text-red-600 hover:text-red-700">
                                    legal@konversipdf.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
