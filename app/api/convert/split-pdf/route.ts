import { NextResponse } from 'next/server';
import { splitPdf } from '@/lib/pdf-api';
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

        // Convert File to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Split PDF via ConvertAPI
        const pdfPages = await splitPdf(buffer);

        // Convert buffers to base64
        const pages = pdfPages.map((buf, index) => ({
            filename: `page-${index + 1}.pdf`,
            data: buf.toString('base64'),
        }));

        // Track usage
        const processingTime = Date.now() - startTime;

        await trackToolUsage({
            toolName: 'split-pdf',
            fileCount: 1,
            fileSizeMb: file.size / 1024 / 1024,
            processingTimeMs: processingTime,
            success: true,
        });

        return NextResponse.json({
            success: true,
            pages,
            totalPages: pages.length,
        });
    } catch (error) {
        console.error('Split PDF error:', error);

        await trackToolUsage({
            toolName: 'split-pdf',
            success: false,
            errorMessage: error instanceof Error ? error.message : 'Unknown error',
        });

        return NextResponse.json(
            { error: 'Failed to split PDF' },
            { status: 500 }
        );
    }
}
