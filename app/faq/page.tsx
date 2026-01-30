'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'Apakah KonversiPDF benar-benar gratis?',
            answer: 'Ya, 100% gratis selamanya! Tidak ada premium tier, tidak ada hidden fees, dan tidak ada limit. Semua tools bisa kamu pakai unlimited tanpa biaya apapun.',
        },
        {
            question: 'Apakah file saya aman?',
            answer: 'Sangat aman! Semua proses dilakukan di browser kamu (client-side). File tidak pernah diupload ke server kami. Setelah selesai, file otomatis hilang dari memori. Zero data collection.',
        },
        {
            question: 'Ada batasan ukuran file?',
            answer: 'Batasan nya tergantung kapasitas RAM browser kamu. Umumnya file sampai 50-100MB bisa diproses dengan lancar. Untuk file lebih besar, browser mungkin sedikit lambat tapi tetap bisa.',
        },
        {
            question: 'Format apa saja yang didukung?',
            answer: 'Kami support PDF, JPG, JPEG, dan PNG. Untuk konversi gambar ke PDF, kamu bisa upload multiple images sekaligus dan akan digabung dalam satu PDF.',
        },
        {
            question: 'Bagaimana cara kerjanya?',
            answer: 'Kami pakai library pdf-lib dan pdfjs-dist untuk proses PDF langsung di browser. Tidak ada server upload. Semua terjadi di device kamu, makanya cepat dan privat.',
        },
        {
            question: 'Bisa batch processing?',
            answer: 'Ya! Untuk tools seperti JPG ke PDF dan Gabung PDF, kamu bisa upload multiple files sekaligus. Split PDF juga akan menghasilkan semua halaman sekaligus.',
        },
        {
            question: 'Boleh untuk penggunaan komersial?',
            answer: 'Boleh! Kamu bebas pakai untuk personal maupun komersial. Tidak ada batasan. Tapi tolong jangan clone website ini untuk dipublikasi ulang ya 😊',
        },
        {
            question: 'Perlu install software?',
            answer: 'Tidak! Ini web app yang langsung bisa dipakai dari browser. Tidak perlu download atau install apapun. Works on desktop, tablet, dan mobile.',
        },
        {
            question: 'Kenapa gak pakai server untuk proses?',
            answer: 'Karena privasi! Dengan client-side processing, file kamu tidak pernah leave device. Plus, lebih cepat karena tidak perlu upload/download. Win-win!',
        },
        {
            question: 'Ada roadmap fitur baru?',
            answer: 'Ada! Kami planning add: PDF watermark, PDF encryption/decryption, extract text from PDF, dan PDF annotation. Stay tuned!',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 transition-colors opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Beranda
                </Link>

                {/* Header */}
                <div className="text-center mb-12 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        FAQ
                    </h1>
                    <p className="text-xl text-gray-600">
                        Pertanyaan yang sering ditanyakan tentang KonversiPDF
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 text-lg">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white shadow-xl">
                    <h2 className="text-3xl font-bold mb-4">
                        Masih Ada Pertanyaan?
                    </h2>
                    <p className="text-lg mb-6 opacity-90">
                        Hubungi kami dan kami dengan senang hati akan membantu!
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-white text-red-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
