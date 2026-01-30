'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, X } from 'lucide-react';

interface DropzoneProps {
    files?: Array<{ name: string; size: string }>;
    onDrop: (files: File[]) => void;
    onRemove?: (index: number) => void;
    accept?: Record<string, string[]>;
    maxFiles?: number;
    description?: string;
}

export default function Dropzone({
    files = [],
    onDrop,
    onRemove,
    accept = { 'application/pdf': ['.pdf'] },
    maxFiles = 10,
    description = "Seret dan lepas file PDF di sini, atau klik untuk memilih"
}: DropzoneProps) {
    const handleDrop = useCallback(
        (acceptedFiles: File[]) => {
            onDrop(acceptedFiles);
        },
        [onDrop]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept,
        maxFiles,
    });

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Dropzone Area */}
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center min-h-[160px] sm:min-h-[220px] text-center cursor-pointer transition-all duration-300 ${isDragActive
                    ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/20 scale-[1.02]'
                    : 'border-slate-300 dark:border-slate-600 bg-slate-50/50 dark:bg-slate-800/40 hover:border-sky-400 dark:hover:border-sky-500'
                    }`}
                role="button"
                tabIndex={0}
                aria-label="Area upload file PDF"
            >
                <input {...getInputProps()} id="file-input" />

                <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 mb-3">
                    <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base font-medium mb-2">
                    {description}
                </p>

                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                    Maksimal {maxFiles} file
                </p>
            </div>

            {/* File List */}
            {files.length > 0 && (
                <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                            File Terpilih ({files.length})
                        </h3>
                    </div>

                    {files.map((file, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between gap-3 sm:gap-4 p-3 rounded-md bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="w-10 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                    <FileText className="w-5 h-5" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="text-sm text-slate-900 dark:text-slate-100 font-medium truncate">
                                        {file.name}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                        {file.size}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => onRemove?.(idx)}
                                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-red-600 text-white text-xs sm:text-sm font-medium hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-colors flex-shrink-0"
                                aria-label={`Hapus ${file.name}`}
                            >
                                <X className="w-4 h-4 sm:hidden" />
                                <span className="hidden sm:inline">Hapus</span>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
