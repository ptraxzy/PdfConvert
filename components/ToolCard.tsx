'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ToolCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
    gradient: string;
}

export default function ToolCard({ icon: Icon, title, description, href, gradient }: ToolCardProps) {
    return (
        <Link href={href}>
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-full"
            >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>

                {/* Card Content */}
                <div className="relative h-full glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                    {/* Icon Container */}
                    <div className="mb-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {description}
                    </p>

                    {/* Arrow Indicator */}
                    <div className="mt-4 flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Mulai Konversi</span>
                        <svg
                            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
