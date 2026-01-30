import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function FooterSimple() {
    const currentYear = new Date().getFullYear();

    const toolLinks = [
        { href: '/tools/pdf-to-jpg', label: 'PDF ke JPG' },
        { href: '/tools/jpg-to-pdf', label: 'JPG ke PDF' },
        { href: '/tools/merge-pdf', label: 'Gabung PDF' },
        { href: '/tools/split-pdf', label: 'Pisah PDF' },
    ];

    return (
        <footer className="bg-slate-100/50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-700/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 group mb-4">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-display text-lg font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                                KonversiPDF
                            </span>
                        </Link>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Solusi lengkap untuk semua kebutuhan konversi dan pengelolaan PDF Anda. Cepat, mudah, dan gratis.
                        </p>
                    </div>

                    {/* Tools Links */}
                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm">
                            Alat Populer
                        </h4>
                        <ul className="space-y-2">
                            {toolLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm">
                            Tetap Terhubung
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                            Dapatkan tips dan update terbaru tentang pengelolaan PDF.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email Anda"
                                className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                aria-label="Email untuk newsletter"
                            />
                            <button className="px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition-colors">
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700/50">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            © {currentYear} KonversiPDF. Semua hak dilindungi.
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Dibuat dengan <span className="text-red-500">❤</span> untuk kemudahan Anda
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
