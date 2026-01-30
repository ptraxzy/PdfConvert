'use client';

import { useState } from 'react';
import { FileText, Download, Loader2, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Dropzone from '@/components/Dropzone';

export default function PdfToDocxPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isConverting, setIsConverting] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            // Validate file type (must be PDF)
            if (files[0].type !== 'application/pdf') {
                setError('Mohon upload file PDF.');
                return;
            }
            setFile(files[0]);
            setError(null);
            setDownloadUrl(null);
        }
    };

    const handleConvert = async () => {
        if (!file) return;

        setIsConverting(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/convert/pdf-to-docx', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.error || 'Gagal konversi');
            }

            // Get Blob directly from response
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setDownloadUrl(url);

        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Terjadi kesalahan saat konversi.');
        } finally {
            setIsConverting(false);
        }
    };

    return (
        <div className="min-h-screen bg-brand-bg font-sans text-brand-text">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
                <Link href="/" className="inline-flex items-center gap-2 text-brand-text/60 hover:text-brand-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Beranda
                </Link>

                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
                        Konversi PDF ke Word
                    </h1>
                    <p className="text-brand-text/70 max-w-xl mx-auto">
                        Ubah dokumen PDF Anda menjadi format Word (DOCX) yang bisa diedit.
                        Cepat, akurat, dan format terjaga.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-brand-border p-6 md:p-10 mb-12">
                    {!file && !downloadUrl && (
                        <Dropzone
                            onFilesDrop={handleFileSelect}
                            accept={{ 'application/pdf': ['.pdf'] }}
                            maxFiles={1}
                            description="Tarik & lepas file PDF di sini, atau klik untuk memilih"
                        />
                    )}

                    {file && !downloadUrl && (
                        <div className="text-center py-8">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <FileText className="w-12 h-12 text-blue-500" />
                                <div className="text-left">
                                    <p className="font-semibold text-brand-secondary">{file.name}</p>
                                    <p className="text-sm text-brand-text/60">
                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                </div>
                            </div>

                            {error && (
                                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl mb-6 flex items-center gap-2 justify-center max-w-sm mx-auto">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm font-medium">{error}</span>
                                </div>
                            )}

                            <button
                                onClick={handleConvert}
                                disabled={isConverting}
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                            >
                                {isConverting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sedang Mengonversi...
                                    </>
                                ) : (
                                    <>
                                        Konversi ke Word
                                    </>
                                )}
                            </button>

                            <button
                                onClick={() => setFile(null)}
                                disabled={isConverting}
                                className="block mt-4 text-brand-text/50 hover:text-brand-text text-sm mx-auto transition-colors"
                            >
                                Batalkan
                            </button>
                        </div>
                    )}

                    {downloadUrl && (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-[scaleIn_0.5s_ease-out]">
                                <FileText className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-secondary mb-2">
                                Berhasil Dikonversi!
                            </h3>
                            <p className="text-brand-text/60 mb-8">
                                Dokumen Word Anda siap diunduh.
                            </p>

                            <a
                                href={downloadUrl}
                                download={`${file?.name.replace('.pdf', '')}.docx`}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-green-200 transition-all transform hover:-translate-y-1"
                            >
                                <Download className="w-5 h-5" />
                                Download Word
                            </a>

                            <button
                                onClick={() => {
                                    setFile(null);
                                    setDownloadUrl(null);
                                }}
                                className="block mt-6 text-brand-primary font-medium hover:underline mx-auto"
                            >
                                Konversi PDF Lainnya
                            </button>
                        </div>
                    )}
                </div>

                {/* Info Section */}
                <div className="grid md:grid-cols-3 gap-8 text-center text-brand-text/70 text-sm">
                    <div>
                        <h4 className="font-bold text-brand-secondary mb-2">Presisi Tinggi</h4>
                        <p>Format, layout, dan font dipertahankan seakurat mungkin.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-brand-secondary mb-2">Dapat Diedit</h4>
                        <p>Hasil konversi adalah file DOCX standar yang bisa diedit di Microsoft Word.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-brand-secondary mb-2">Aman</h4>
                        <p>File dihapus dari server segera setelah pemrosesan selesai.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
