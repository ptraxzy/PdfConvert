'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Scissors, Download, Upload, Loader2, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { splitPdf } from '@/lib/pdf-utils';

export default function SplitPdfPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [splitResults, setSplitResults] = useState<Uint8Array[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            setError(null);
        }
    };

    const handleReset = () => {
        setSelectedFile(null);
        setSplitResults([]);
        setProgress(0);
        setError(null);
    };

    const handleSplit = async () => {
        if (!selectedFile) return;

        setIsProcessing(true);
        setProgress(0);
        setError(null);

        try {
            const progressInterval = setInterval(() => {
                setProgress((prev) => Math.min(prev + 10, 90));
            }, 200);

            const pdfs = await splitPdf(selectedFile);

            clearInterval(progressInterval);
            setProgress(100);
            setSplitResults(pdfs);
        } catch (err) {
            console.error('Split error:', err);
            setError(err instanceof Error ? err.message : 'Gagal pisah PDF');
        } finally {
            setIsProcessing(false);
        }
    };

    const handleDownloadPage = (pdfBytes: Uint8Array, index: number) => {
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `page-${index + 1}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleDownloadAll = () => {
        splitResults.forEach((pdfBytes, index) => {
            setTimeout(() => handleDownloadPage(pdfBytes, index), index * 100);
        });
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

                <div className="text-center mb-12 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-4 shadow-lg">
                        <Scissors className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        Pisah PDF
                    </h1>
                    <p className="text-xl text-gray-600">
                        Pisahin tiap halaman PDF jadi file terpisah
                    </p>
                </div>

                {!splitResults.length && !isProcessing && (
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
                        <div className="border-2 border-dashed border-red-200 rounded-2xl p-12 text-center bg-gradient-to-br from-red-50/50 to-transparent hover:border-red-300 transition-colors cursor-pointer">
                            <input
                                type="file"
                                id="file-upload"
                                accept="application/pdf"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                            <label htmlFor="file-upload" className="cursor-pointer">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                                    <Upload className="w-10 h-10 text-red-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Pilih PDF
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Upload file PDF yang mau dipisah per halaman
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
                                            <Scissors className="w-5 h-5 text-red-600" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-900">
                                            {selectedFile.name}
                                        </span>
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
                                        onClick={handleSplit}
                                        disabled={isProcessing}
                                        className="flex-1 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        Pisah PDF
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
                            Lagi pisahin...
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Sabar ya, lagi extract halaman PDF kamu
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

                {splitResults.length > 0 && !isProcessing && (
                    <div className="opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        Berhasil! ✨
                                    </h3>
                                    <p className="text-gray-600">
                                        {splitResults.length} halaman ready untuk download
                                    </p>
                                </div>
                                <button
                                    onClick={handleDownloadAll}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <Download className="w-5 h-5" />
                                    Download Semua
                                </button>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {splitResults.map((pdfBytes, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="aspect-[3/4] bg-white rounded-lg mb-3 flex items-center justify-center border border-gray-200">
                                            <Scissors className="w-8 h-8 text-gray-400" />
                                        </div>
                                        <button
                                            onClick={() => handleDownloadPage(pdfBytes, index)}
                                            className="w-full px-3 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 rounded-lg font-medium text-sm flex items-center justify-center gap-2"
                                        >
                                            <Download className="w-4 h-4" />
                                            Hal. {index + 1}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={handleReset}
                                className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                            >
                                Pisah Lagi
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl mb-2">⚡</div>
                        <h4 className="font-semibold text-gray-900 mb-1">Super Cepat</h4>
                        <p className="text-sm text-gray-600">Proses langsung di browser</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl mb-2">🔒</div>
                        <h4 className="font-semibold text-gray-900 mb-1">100% Aman</h4>
                        <p className="text-sm text-gray-600">File gak pernah diupload</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl mb-2">✨</div>
                        <h4 className="font-semibold text-gray-900 mb-1">Gratis</h4>
                        <p className="text-sm text-gray-600">Unlimited selamanya</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
