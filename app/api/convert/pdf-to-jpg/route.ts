import { NextResponse } from 'next/server';
import { convertPdfToJpg } from '@/lib/pdf-api';

export const maxDuration = 60; // 60 seconds timeout untuk conversions

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

        // Convert PDF to JPG via ConvertAPI
        const jpgBuffers = await convertPdfToJpg(buffer);

        // Convert buffers to base64 untuk response
        const images = jpgBuffers.map((buf: Buffer, index: number) => ({
            filename: `page-${index + 1}.jpg`,
            data: buf.toString('base64'),
            mimeType: 'image/jpeg',
        }));

        // Track usage
        // Usage tracking removed

        return NextResponse.json({
            success: true,
            images,
            totalPages: images.length,
        });
    } catch (error) {
        console.error('PDF to JPG conversion error:', error);

        // Track failure
        // Error tracking removed

        return NextResponse.json(
            { error: 'Failed to convert PDF to JPG' },
            { status: 500 }
        );
    }
}
