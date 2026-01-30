'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, FileText, Image, FilePlus, Scissors, Minimize2, RefreshCw, FileType, Presentation } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Mobile Menu
    const [isToolsOpen, setIsToolsOpen] = useState(false); // Desktop Mega Menu Hover/Click
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Structure tools into categories
    const toolCategories = [
        {
            title: 'Organisasi PDF',
            tools: [
                { name: 'Gabung PDF', href: '/tools/merge-pdf', icon: FilePlus, desc: 'Satukan banyak PDF' },
                { name: 'Pisah PDF', href: '/tools/split-pdf', icon: Scissors, desc: 'Ambil halaman tertentu' },
            ]
        },
        {
            title: 'Optimasi & Edit',
            tools: [
                { name: 'Kompres PDF', href: '/tools/compress-pdf', icon: Minimize2, desc: 'Kecilkan ukuran file' },
                { name: 'Putar PDF', href: '/tools/rotate-pdf', icon: RefreshCw, desc: 'Rotasi halaman PDF' },
            ]
        },
        {
            title: 'Konversi ke PDF',
            tools: [
                { name: 'JPG ke PDF', href: '/tools/jpg-to-pdf', icon: Image, desc: 'Gambar ke PDF' },
                { name: 'Word ke PDF', href: '/tools/docx-to-pdf', icon: FileText, desc: 'Word ke PDF' },
                { name: 'PowerPoint ke PDF', href: '/tools/ppt-to-pdf', icon: Presentation, desc: 'PPT ke PDF' },
                { name: 'Excel ke PDF', href: '/tools/xlsx-to-pdf', icon: FilePlus, desc: 'Excel ke PDF' },
            ]
        },
        {
            title: 'Konversi dari PDF',
            tools: [
                { name: 'PDF ke JPG', href: '/tools/pdf-to-jpg', icon: Image, desc: 'Ambil gambar dari PDF' },
                { name: 'PDF ke Word', href: '/tools/pdf-to-docx', icon: FileType, desc: 'Edit PDF di Word' },
                { name: 'PDF ke PowerPoint', href: '/tools/pdf-to-ppt', icon: Presentation, desc: 'PDF ke Presentasi' },
                { name: 'PDF ke Excel', href: '/tools/pdf-to-xlsx', icon: FilePlus, desc: 'PDF ke Spreadsheet' },
            ]
        }
    ];

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsToolsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsToolsOpen(false);
        }, 200);
    };

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-brand-border sticky top-0 z-50 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Aplikasi */}
                    <Link href="/" className="text-2xl font-black text-brand-secondary flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300">
                            <FileText className="w-6 h-6" />
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary to-brand-primary">
                            KonversiPDF
                        </span>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-8 static">
                        {/* Mega Menu Trigger */}
                        <div
                            className="static" // Changed from relative to static to allow full-width dropdown
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className={`flex items-center gap-1 font-semibold transition-colors py-6 ${isToolsOpen ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'}`}
                            >
                                Alat PDF
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Mega Menu Dropdown */}
                            <div
                                className={`absolute top-[80px] left-0 right-0 w-full bg-white border-b border-brand-border shadow-2xl transition-all duration-300 origin-top z-40 ${isToolsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                    }`}
                            >
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-4 gap-x-12 gap-y-8">
                                        {toolCategories.map((category) => (
                                            <div key={category.title} className="space-y-4">
                                                <h3 className="font-bold text-brand-secondary text-sm uppercase tracking-wider border-b border-brand-border pb-2">
                                                    {category.title}
                                                </h3>
                                                <ul className="space-y-3">
                                                    {category.tools.map((tool) => (
                                                        <li key={tool.name}>
                                                            <Link
                                                                href={tool.href}
                                                                className="flex items-start gap-3 group/item p-2 -mx-2 rounded-lg hover:bg-brand-accent/50 transition-colors"
                                                                onClick={() => setIsToolsOpen(false)}
                                                            >
                                                                <tool.icon className="w-5 h-5 text-brand-text/60 group-hover/item:text-brand-primary transition-colors mt-0.5" />
                                                                <div>
                                                                    <div className="font-semibold text-brand-secondary group-hover/item:text-brand-primary transition-colors text-sm">
                                                                        {tool.name}
                                                                    </div>
                                                                    <div className="text-xs text-brand-text/50">
                                                                        {tool.desc}
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/about" className="font-medium text-brand-text hover:text-brand-primary transition-colors">
                            Tentang
                        </Link>
                        <Link href="/faq" className="font-medium text-brand-text hover:text-brand-primary transition-colors">
                            FAQ
                        </Link>
                        <Link href="/contact" className="font-medium text-brand-text hover:text-brand-primary transition-colors">
                            Kontak
                        </Link>
                    </div>

                    {/* Tombol Menu Mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2.5 hover:bg-brand-accent rounded-xl transition-colors text-brand-secondary"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Menu Mobile (Responsif) */}
                <div className={`md:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 space-y-6">
                        {toolCategories.map((category) => (
                            <div key={category.title} className="space-y-3">
                                <h3 className="font-bold text-brand-secondary text-sm uppercase tracking-wider">
                                    {category.title}
                                </h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {category.tools.map((tool) => (
                                        <Link
                                            key={tool.name}
                                            href={tool.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg hover:bg-brand-accent transition-colors"
                                        >
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-brand-primary">
                                                <tool.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-brand-secondary">
                                                    {tool.name}
                                                </div>
                                                <div className="text-xs text-brand-text/60">
                                                    {tool.desc}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <hr className="border-brand-border" />

                        <div className="grid grid-cols-2 gap-4">
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="p-4 text-center bg-brand-bg rounded-xl font-semibold text-brand-secondary hover:bg-brand-accent hover:text-brand-primary transition-colors"
                            >
                                Tentang
                            </Link>
                            <Link
                                href="/faq"
                                onClick={() => setIsOpen(false)}
                                className="p-4 text-center bg-brand-bg rounded-xl font-semibold text-brand-secondary hover:bg-brand-accent hover:text-brand-primary transition-colors"
                            >
                                FAQ
                            </Link>
                        </div>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full py-4 text-center bg-brand-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
