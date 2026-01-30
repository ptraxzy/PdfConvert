import { NextResponse } from 'next/server';
import { rotatePdf } from '@/lib/pdf-api';
import { trackToolUsage } from '@/lib/analytics';

export const maxDuration = 60;

export async function POST(req: Request) {
    const startTime = Date.now();

    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const angle = parseInt(formData.get('angle') as string);

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        if (![90, 180, 270].includes(angle)) {
            return NextResponse.json(
                { error: 'Angle must be 90, 180, or 270' },
                { status: 400 }
            );
        }

        // Convert File to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Rotate PDF via ConvertAPI
        const rotatedPdf = await rotatePdf(buffer, angle as 90 | 180 | 270);

        // Convert to base64
        const pdfBase64 = rotatedPdf.toString('base64');

        // Track usage
        const processingTime = Date.now() - startTime;

        await trackToolUsage({
            toolName: 'rotate-pdf',
            fileCount: 1,
            fileSizeMb: file.size / 1024 / 1024,
            processingTimeMs: processingTime,
            success: true,
        });

        return NextResponse.json({
            success: true,
            pdf: pdfBase64,
            filename: 'rotated.pdf',
            angle,
        });
    } catch (error) {
        console.error('Rotate PDF error:', error);

        await trackToolUsage({
            toolName: 'rotate-pdf',
            success: false,
            errorMessage: error instanceof Error ? error.message : 'Unknown error',
        });

        return NextResponse.json(
            { error: 'Failed to rotate PDF' },
            { status: 500 }
        );
    }
}
