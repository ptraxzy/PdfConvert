import { NextResponse } from 'next/server';
import { convertImagesToPdf } from '@/lib/pdf-api';
import { trackToolUsage } from '@/lib/analytics';

export const maxDuration = 60;

export async function POST(req: Request) {
    const startTime = Date.now();

    try {
        console.log('[JPG to PDF] Starting conversion...');

        const formData = await req.formData();
        const files = formData.getAll('files') as File[];

        console.log(`[JPG to PDF] Received ${files.length} files`);

        if (!files || files.length === 0) {
            return NextResponse.json(
                { error: 'No files provided' },
                { status: 400 }
            );
        }

        // Convert Files to Buffers
        console.log('[JPG to PDF] Converting files to buffers...');
        const buffers = await Promise.all(
            files.map(async (file) => {
                console.log(`[JPG to PDF] Processing: ${file.name} (${file.size} bytes)`);
                const arrayBuffer = await file.arrayBuffer();
                return Buffer.from(arrayBuffer);
            })
        );

        console.log('[JPG to PDF] Calling ConvertAPI...');

        // Convert images to PDF via ConvertAPI
        const pdfBuffer = await convertImagesToPdf(buffers);

        console.log('[JPG to PDF] Conversion successful!');

        // Convert to base64
        const pdfBase64 = pdfBuffer.toString('base64');

        // Track usage
        const processingTime = Date.now() - startTime;
        const totalSize = files.reduce((sum, f) => sum + f.size, 0);

        console.log(`[JPG to PDF] Completed in ${processingTime}ms`);

        await trackToolUsage({
            toolName: 'jpg-to-pdf',
            fileCount: files.length,
            fileSizeMb: totalSize / 1024 / 1024,
            processingTimeMs: processingTime,
            success: true,
        });

        return NextResponse.json({
            success: true,
            pdf: pdfBase64,
            filename: 'converted.pdf',
        });
    } catch (error) {
        console.error('[JPG to PDF] Conversion error:', error);
        console.error('[JPG to PDF] Error stack:', error instanceof Error ? error.stack : 'No stack');

        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        await trackToolUsage({
            toolName: 'jpg-to-pdf',
            success: false,
            errorMessage,
        });

        return NextResponse.json(
            {
                error: 'Failed to convert images to PDF',
                details: errorMessage
            },
            { status: 500 }
        );
    }
}
