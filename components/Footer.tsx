import Link from 'next/link';
import { FileImage, ImagePlus, FilePlus2, Scissors, FileDown, RotateCw, Github, Mail } from 'lucide-react';

export default function Footer() {
    const tools = [
        { name: 'PDF ke JPG', href: '/tools/pdf-to-jpg' },
        { name: 'JPG ke PDF', href: '/tools/jpg-to-pdf' },
        { name: 'Gabung PDF', href: '/tools/merge-pdf' },
        { name: 'Pisah PDF', href: '/tools/split-pdf' },
        { name: 'Kompres PDF', href: '/tools/compress-pdf' },
        { name: 'Putar PDF', href: '/tools/rotate-pdf' },
        { name: 'DOCX ke PDF', href: '/tools/docx-to-pdf' },
        { name: 'PPT ke PDF', href: '/tools/ppt-to-pdf' },
        { name: 'PDF ke Word', href: '/tools/pdf-to-docx' },
        { name: 'PDF ke PPT', href: '/tools/pdf-to-ppt' },
        { name: 'Excel ke PDF', href: '/tools/xlsx-to-pdf' },
        { name: 'PDF ke Excel', href: '/tools/pdf-to-xlsx' },
    ];

    return (
        <footer className="bg-brand-secondary text-gray-300">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Bagian Brand & Info */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-brand-primary">Konversi</span>PDF
                        </Link>
                        <p className="text-sm text-gray-400 mb-4">
                            Platform konversi PDF gratis, cepat, dan aman. 100% client-side processing.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/ptraxzy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors text-white"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:putraagifary12@gmail.com"
                                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors text-white"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Alat PDF</h3>
                        <ul className="space-y-2">
                            {tools.map((tool) => (
                                <li key={tool.name}>
                                    <Link
                                        href={tool.href}
                                        className="text-sm hover:text-brand-primary transition-colors"
                                    >
                                        {tool.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm hover:text-brand-primary transition-colors">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-sm hover:text-brand-primary transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-brand-primary transition-colors">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm hover:text-brand-primary transition-colors">
                                    Kebijakan Privasi
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm hover:text-brand-primary transition-colors">
                                    Syarat & Ketentuan
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bawah */}
                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} KonversiPDF. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-400">
                            Made with ❤️ by <a href="https://github.com/ptraxzy" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-orange-400 font-medium">Muhammad Putra Alghifary</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
