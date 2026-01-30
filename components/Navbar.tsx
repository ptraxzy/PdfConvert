'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Alat PDF', href: '/#tools' },
        { name: 'Tentang', href: '/about' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Kontak', href: '/contact' },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Aplikasi */}
                    <Link href="/" className="text-2xl font-bold text-brand-secondary flex items-center gap-2">
                        <span className="text-brand-primary">Konversi</span>PDF
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-brand-text hover:text-brand-primary font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Tombol Menu Mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 hover:bg-brand-accent rounded-lg transition-colors text-brand-secondary"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Menu Mobile (Responsif) */}
                {isOpen && (
                    <div className="md:hidden py-4 space-y-2 border-t border-brand-border h-screen bg-brand-bg">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 px-4 text-brand-text hover:bg-brand-accent hover:text-brand-primary rounded-lg transition-colors font-medium text-lg"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
