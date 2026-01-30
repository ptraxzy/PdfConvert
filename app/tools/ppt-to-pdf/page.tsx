'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Presentation, Download, Upload, Loader2, X, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PptToPdfPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.name.endsWith('.pptx') || file.name.endsWith('.ppt')) {
                setSelectedFile(file);
                setError(null);
            } else {
                setError('File harus format .pptx atau .ppt');
            }
        }
    };

    const handleReset = () => {
        setSelectedFile(null);
        setPdfUrl(null);
        setProgress(0);
        setError(null);
    };

    const handleConvert = async () => {
        if (!selectedFile) return;

        setIsProcessing(true);
        setProgress(0);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const progressInterval = setInterval(() => {
                setProgress((prev) => Math.min(prev + 5, 90));
            }, 500);

            const response = await fetch('/api/convert/ppt-to-pdf', {
                method: 'POST',
                body: formData,
            });

            clearInterval(progressInterval);

            if (!response.ok) {
                throw new Error('Gagal konversi PPT ke PDF');
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            setProgress(100);
            setPdfUrl(url);
        } catch (err) {
            console.error('Conversion error:', err);
            setError(err instanceof Error ? err.message : 'Gagal konversi PPT');
        } finally {
            setIsProcessing(false);
        }
    };

    const handleDownload = () => {
        if (!pdfUrl) return;

        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = selectedFile?.name.replace(/\.(pptx|ppt)$/i, '.pdf') || 'converted.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 transition-colors opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Beranda
                </Link>

                <div className="text-center mb-8 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-4 shadow-lg">
                        <Presentation className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        PPT ke PDF
                    </h1>
                    <p className="text-xl text-gray-600">
                        Konversi presentasi PowerPoint jadi PDF
                    </p>
                </div>



                {!pdfUrl && !isProcessing && (
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
                        <div className="border-2 border-dashed border-red-200 rounded-2xl p-12 text-center bg-gradient-to-br from-red-50/50 to-transparent hover:border-red-300 transition-colors cursor-pointer">
                            <input
                                type="file"
                                id="file-upload"
                                accept=".ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                            <label htmlFor="file-upload" className="cursor-pointer">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                                    <Upload className="w-10 h-10 text-red-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Pilih File PPT
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Upload file PowerPoint (.pptx atau .ppt)
                                </p>
                                <div className="inline-flex px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                    Pilih File
                                </div>
                            </label>
                        </div>

                        {error && (
                            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                                {error}
                            </div>
                        )}

                        {selectedFile && (
                            <div className="mt-8">
                                <h4 className="font-semibold text-gray-900 mb-4">
                                    File dipilih
                                </h4>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                            <Presentation className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {selectedFile.name}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {(selectedFile.size / 1024).toFixed(1)} KB
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleReset}
                                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                                    >
                                        <X className="w-4 h-4 text-red-500" />
                                    </button>
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <button
                                        onClick={handleConvert}
                                        disabled={isProcessing}
                                        className="flex-1 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        Konversi ke PDF
                                    </button>
                                    <button
                                        onClick={handleReset}
                                        className="px-6 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {isProcessing && (
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 text-center opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                            <Loader2 className="w-10 h-10 text-red-600 animate-spin" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Lagi konversi...
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Sabar ya, file lagi diproses di server
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                            <div
                                className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-500">{progress}%</p>
                    </div>
                )}

                {pdfUrl && !isProcessing && (
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 text-center opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Berhasil! ✨
                        </h3>
                        <p className="text-gray-600 mb-8">
                            PPT udah jadi PDF, ready untuk download
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={handleDownload}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <Download className="w-5 h-5" />
                                Download PDF
                            </button>
                            <button
                                onClick={handleReset}
                                className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                            >
                                Konversi Lagi
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl mb-2">📊</div>
                        <h4 className="font-semibold text-gray-900 mb-1">Format Lengkap</h4>
                        <p className="text-sm text-gray-600">Support .ppt dan .pptx</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl mb-2">🎨</div>
                        <h4 className="font-semibold text-gray-900 mb-1">Jaga Slide</h4>
                        <p className="text-sm text-gray-600">Layout tetep perfect</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl mb-2">✨</div>
                        <h4 className="font-semibold text-gray-900 mb-1">Gratis</h4>
                        <p className="text-sm text-gray-600">Powered by ConvertAPI</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
