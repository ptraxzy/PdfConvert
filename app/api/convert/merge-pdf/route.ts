import { NextResponse } from 'next/server';
import { mergePdfs } from '@/lib/pdf-api';
import { trackToolUsage } from '@/lib/analytics';

export const maxDuration = 60;

export async function POST(req: Request) {
    const startTime = Date.now();

    try {
        const formData = await req.formData();
        const files = formData.getAll('files') as File[];

        if (!files || files.length < 2) {
            return NextResponse.json(
                { error: 'At least 2 PDF files required' },
                { status: 400 }
            );
        }

        // Convert Files to Buffers
        const buffers = await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                return Buffer.from(arrayBuffer);
            })
        );

        // Merge PDFs via ConvertAPI
        const mergedPdf = await mergePdfs(buffers);

        // Convert to base64
        const pdfBase64 = mergedPdf.toString('base64');

        // Track usage
        const processingTime = Date.now() - startTime;
        const totalSize = files.reduce((sum, f) => sum + f.size, 0);

        await trackToolUsage({
            toolName: 'merge-pdf',
            fileCount: files.length,
            fileSizeMb: totalSize / 1024 / 1024,
            processingTimeMs: processingTime,
            success: true,
        });

        return NextResponse.json({
            success: true,
            pdf: pdfBase64,
            filename: 'merged.pdf',
        });
    } catch (error) {
        console.error('Merge PDF error:', error);

        await trackToolUsage({
            toolName: 'merge-pdf',
            success: false,
            errorMessage: error instanceof Error ? error.message : 'Unknown error',
        });

        return NextResponse.json(
            { error: 'Failed to merge PDFs' },
            { status: 500 }
        );
    }
}
