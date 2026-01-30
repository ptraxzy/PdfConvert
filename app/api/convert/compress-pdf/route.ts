import { NextResponse } from 'next/server';
import { compressPdf } from '@/lib/pdf-api';
import { trackToolUsage } from '@/lib/analytics';

export const maxDuration = 60;

export async function POST(req: Request) {
    const startTime = Date.now();

    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        const originalSize = file.size;

        // Convert File to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Compress PDF via ConvertAPI
        const compressedPdf = await compressPdf(buffer);

        // Convert to base64
        const pdfBase64 = compressedPdf.toString('base64');

        const compressedSize = compressedPdf.length;
        const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

        // Track usage
        const processingTime = Date.now() - startTime;

        await trackToolUsage({
            toolName: 'compress-pdf',
            fileCount: 1,
            fileSizeMb: originalSize / 1024 / 1024,
            processingTimeMs: processingTime,
            success: true,
        });

        return NextResponse.json({
            success: true,
            pdf: pdfBase64,
            filename: 'compressed.pdf',
            originalSize,
            compressedSize,
            compressionRatio: `${compressionRatio}%`,
        });
    } catch (error) {
        console.error('Compress PDF error:', error);

        await trackToolUsage({
            toolName: 'compress-pdf',
            success: false,
            errorMessage: error instanceof Error ? error.message : 'Unknown error',
        });

        return NextResponse.json(
            { error: 'Failed to compress PDF' },
            { status: 500 }
        );
    }
}
