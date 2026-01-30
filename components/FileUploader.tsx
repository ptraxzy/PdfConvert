'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FileUploaderProps {
    onFilesSelected: (files: File[]) => void;
    acceptedFileTypes?: Record<string, string[]>;
    maxFiles?: number;
    selectedFiles?: File[];
    onRemoveFile?: (index: number) => void;
    title?: string;
    description?: string;
}

export default function FileUploader({
    onFilesSelected,
    acceptedFileTypes = { 'application/pdf': ['.pdf'] },
    maxFiles = 10,
    selectedFiles = [],
    onRemoveFile,
    title = 'Pilih File',
    description = 'Seret dan lepas file di sini, atau klik untuk memilih',
}: FileUploaderProps) {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            onFilesSelected(acceptedFiles);
        },
        [onFilesSelected]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: acceptedFileTypes,
        maxFiles,
    });

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    return (
        <div className="w-full">
            <div
                {...getRootProps()}
                className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${isDragActive
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/20 scale-105'
                        : 'border-slate-300 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-600 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                    }`}
            >
                <input {...getInputProps()} />

                <motion.div
                    animate={isDragActive ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-4">
                        <Upload className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                        {title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {description}
                    </p>

                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        Maksimal {maxFiles} file
                    </p>
                </motion.div>
            </div>

            {/* Selected Files List */}
            <AnimatePresence>
                {selectedFiles.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-6 space-y-3"
                    >
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            File Terpilih ({selectedFiles.length})
                        </h4>

                        {selectedFiles.map((file, index) => (
                            <motion.div
                                key={`${file.name}-${index}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center justify-between p-4 glass rounded-xl hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="p-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500">
                                        <File className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-slate-900 dark:text-slate-100 truncate">
                                            {file.name}
                                        </p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            {formatFileSize(file.size)}
                                        </p>
                                    </div>
                                </div>

                                {onRemoveFile && (
                                    <button
                                        onClick={() => onRemoveFile(index)}
                                        className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                                        aria-label="Hapus file"
                                    >
                                        <X className="w-5 h-5 text-red-500" />
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
