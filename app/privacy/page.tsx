import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, Cookie, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                        <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Kebijakan Privasi
                    </h1>
                    <p className="text-lg text-gray-600">
                        Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                    <div className="prose prose-lg max-w-none">
                        {/* Intro */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                            <div className="flex items-start gap-3">
                                <Lock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">TL;DR - Ringkasan</h3>
                                    <p className="text-gray-700 mb-0">
                                        Kami tidak mengumpulkan, menyimpan, atau membagikan file yang kamu proses.
                                        Semua konversi terjadi di browser kamu. Kami hanya melacak anonymous analytics
                                        untuk improve service.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Client-Side Processing */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="w-6 h-6 text-gray-700" />
                                <h2 className="text-2xl font-bold text-gray-900 m-0">Client-Side Processing</h2>
                            </div>
                            <p className="text-gray-600">
                                Semua tools PDF kami menggunakan <strong>client-side processing</strong>. Artinya:
                            </p>
                            <ul className="text-gray-600">
                                <li>File yang kamu upload <strong>tidak pernah dikirim ke server</strong></li>
                                <li>Semua proses terjadi langsung di browser kamu menggunakan JavaScript</li>
                                <li>File otomatis terhapus dari memori setelah proses selesai</li>
                                <li>Kami tidak punya akses ke file kamu sama sekali</li>
                            </ul>
                        </section>

                        {/* Analytics */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Database className="w-6 h-6 text-gray-700" />
                                <h2 className="text-2xl font-bold text-gray-900 m-0">Data yang Kami Kumpulkan</h2>
                            </div>
                            <p className="text-gray-600">
                                Kami menggunakan Supabase untuk melacak <strong>anonymous analytics</strong>:
                            </p>
                            <ul className="text-gray-600">
                                <li><strong>Tool usage</strong>: Tool mana yang paling sering dipakai</li>
                                <li><strong>Processing time</strong>: Berapa lama proses konversi</li>
                                <li><strong>File count</strong>: Jumlah file yang diproses (bukan content nya)</li>
                                <li><strong>Success/error rate</strong>: Untuk monitoring quality</li>
                            </ul>
                            <p className="text-gray-600">
                                Data ini <strong>sepenuhnya anonymous</strong> dan tidak bisa di-trace kembali ke user individual.
                                Kami tidak menyimpan IP address atau user identifiers.
                            </p>
                        </section>

                        {/* Cookies */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Cookie className="w-6 h-6 text-gray-700" />
                                <h2 className="text-2xl font-bold text-gray-900 m-0">Cookies</h2>
                            </div>
                            <p className="text-gray-600">
                                Kami <strong>tidak menggunakan cookies</strong> untuk tracking. Browser mungkin menyimpan
                                local storage untuk preferensi seperti theme atau language (future feature), tapi data ini
                                tetap di device kamu dan tidak dikirim kemana-mana.
                            </p>
                        </section>

                        {/* Third Party */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="w-6 h-6 text-gray-700" />
                                <h2 className="text-2xl font-bold text-gray-900 m-0">Third-Party Services</h2>
                            </div>
                            <p className="text-gray-600">
                                Kami menggunakan layanan berikut:
                            </p>
                            <ul className="text-gray-600">
                                <li><strong>Supabase</strong>: Anonymous analytics storage</li>
                                <li><strong>Vercel</strong>: Hosting & CDN</li>
                            </ul>
                            <p className="text-gray-600">
                                Kedua layanan ini GDPR-compliant dan tidak melacak user data personal.
                            </p>
                        </section>

                        {/* User Rights */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kamu</h2>
                            <p className="text-gray-600">
                                Karena kami tidak menyimpan data personal, technically tidak ada data untuk
                                dihapus atau diakses. Tapi kalau kamu punya pertanyaan atau concerns,
                                hubungi kami di <a href="mailto:privacy@konversipdf.com" className="text-red-600 hover:text-red-700">privacy@konversipdf.com</a>.
                            </p>
                        </section>

                        {/* Changes */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
                            <p className="text-gray-600 mb-0">
                                Kami mungkin update kebijakan ini dari waktu ke waktu. Perubahan signifikan
                                akan kami informasikan di homepage. Silakan check halaman ini secara berkala.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
