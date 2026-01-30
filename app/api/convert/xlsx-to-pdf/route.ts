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

        console.log('[XLSX to PDF] Starting conversion:', file.name);

        const convertApiData = new FormData();
        convertApiData.append('File', file);
        convertApiData.append('StoreFile', 'true');

        // Call ConvertAPI: XLSX -> PDF
        const response = await fetch(`https://v2.convertapi.com/convert/xlsx/to/pdf?Secret=${apiKey}`, {
            method: 'POST',
            body: convertApiData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('[XLSX to PDF] ConvertAPI Error:', response.status, errorText);
            throw new Error(`ConvertAPI failed: ${response.status}`);
        }

        const result = await response.json();

        if (!result.Files || result.Files.length === 0) {
            throw new Error('No files returned from ConvertAPI');
        }

        const fileUrl = result.Files[0].Url;
        console.log('[XLSX to PDF] Fetching result from:', fileUrl);

        const fileResponse = await fetch(fileUrl);
        const fileBuffer = await fileResponse.arrayBuffer();

        return new NextResponse(Buffer.from(fileBuffer), {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${file.name.replace(/\.xlsx$|\.xls$/i, '.pdf')}"`,
            },
        });

    } catch (error: any) {
        console.error('[XLSX to PDF] Detailed Error:', error);
        return NextResponse.json(
            { error: 'Gagal konversi Excel ke PDF', details: error.message },
            { status: 500 }
        );
    }
}
