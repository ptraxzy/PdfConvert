import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.PDF_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        console.log('[PDF to PPTX] Starting conversion:', file.name);

        const convertApiData = new FormData();
        convertApiData.append('File', file);
        convertApiData.append('StoreFile', 'true');

        // Call ConvertAPI: PDF -> PPTX
        const response = await fetch(`https://v2.convertapi.com/convert/pdf/to/pptx?Secret=${apiKey}`, {
            method: 'POST',
            body: convertApiData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('[PDF to PPTX] ConvertAPI Error:', response.status, errorText);
            throw new Error(`ConvertAPI failed: ${response.status}`);
        }

        const result = await response.json();

        if (!result.Files || result.Files.length === 0) {
            throw new Error('No files returned from ConvertAPI');
        }

        const fileUrl = result.Files[0].Url;
        console.log('[PDF to PPTX] Fetching result from:', fileUrl);

        const fileResponse = await fetch(fileUrl);
        const fileBuffer = await fileResponse.arrayBuffer();

        return new NextResponse(Buffer.from(fileBuffer), {
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                'Content-Disposition': `attachment; filename="${file.name.replace(/\.pdf$/i, '.pptx')}"`,
            },
        });

    } catch (error: any) {
        console.error('[PDF to PPTX] Detailed Error:', error);
        return NextResponse.json(
            { error: 'Gagal konversi PDF ke PPTX', details: error.message },
            { status: 500 }
        );
    }
}
