'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ProcessingLoaderProps {
    message?: string;
    progress?: number;
}

export default function ProcessingLoader({
    message = 'Memproses file Anda...',
    progress
}: ProcessingLoaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center p-12 glass rounded-2xl"
        >
            <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative p-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500">
                    <Loader2 className="w-12 h-12 text-white animate-spin" />
                </div>
            </div>

            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {message}
            </h3>

            {progress !== undefined && (
                <div className="w-full max-w-xs mt-4">
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
                        <span>Progress</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        />
                    </div>
                </div>
            )}

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                Mohon tunggu sebentar...
            </p>
        </motion.div>
    );
}
