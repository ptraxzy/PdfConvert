import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // 1. Check API Key
        const apiKey = process.env.PDF_API_KEY;
        if (!apiKey) {
            console.error('[DOCX to PDF] Error: PDF_API_KEY is missing');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        // 2. Parse Form Data
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        console.log('[DOCX to PDF] Starting conversion via REST:', file.name, file.size, 'bytes');

        // 3. Prepare FormData for ConvertAPI
        const convertApiData = new FormData();
        convertApiData.append('File', file);
        convertApiData.append('StoreFile', 'true');

        // 4. Call ConvertAPI REST Endpoint directly
        // Using DOCX to PDF endpoint
        const response = await fetch(`https://v2.convertapi.com/convert/docx/to/pdf?Secret=${apiKey}`, {
            method: 'POST',
            body: convertApiData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('[DOCX to PDF] ConvertAPI Error:', response.status, errorText);
            throw new Error(`ConvertAPI failed: ${response.status} ${errorText}`);
        }

        const result = await response.json();
        console.log('[DOCX to PDF] Conversion successful, result received');

        if (!result.Files || result.Files.length === 0) {
            throw new Error('No files returned from ConvertAPI');
        }

        // 5. Fetch the converted PDF
        const pdfUrl = result.Files[0].Url;
        console.log('[DOCX to PDF] Fetching PDF from:', pdfUrl);

        const fileResponse = await fetch(pdfUrl);
        const pdfBuffer = await fileResponse.arrayBuffer();

        return new NextResponse(Buffer.from(pdfBuffer), {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${file.name.replace(/\.(docx|doc)$/i, '.pdf')}"`,
            },
        });

    } catch (error: any) {
        console.error('[DOCX to PDF] Detailed Error:', error);
        return NextResponse.json(
            { error: 'Gagal konversi DOCX ke PDF', details: error.message },
            { status: 500 }
        );
    }
}
