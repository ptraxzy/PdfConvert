// ConvertAPI Helper - Server-side only
// Official ConvertAPI Node.js library integration

import ConvertAPI from 'convertapi';

const isDevelopment = process.env.NODE_ENV === 'development';

// Get API secret berdasarkan environment
function getApiSecret(): string {
    if (isDevelopment) {
        return process.env.PDF_API_SANDBOX_KEY || '';
    }
    return process.env.PDF_API_KEY || '';
}

// Initialize ConvertAPI client
export function getConvertApiClient() {
    const secret = getApiSecret();

    if (!secret) {
        throw new Error('ConvertAPI secret not configured');
    }

    return new ConvertAPI(secret);
}

// Convert PDF to JPG
export async function convertPdfToJpg(pdfBuffer: Buffer | Uint8Array) {
    const convertapi = getConvertApiClient();

    const result = await convertapi.convert('jpg', {
        File: pdfBuffer,
    }, 'pdf');

    // Return array of JPG buffers
    const jpgBuffers = await Promise.all(
        result.files.map(file => (file as any).read())
    );

    return jpgBuffers;
}

// Convert Images to PDF - FIXED
export async function convertImagesToPdf(imageBuffers: Array<Buffer | Uint8Array>) {
    const convertapi = getConvertApiClient();

    // ConvertAPI expects individual File parameters for multiple files
    // Use array spread agar semua images included
    const filesParam: any = {};
    imageBuffers.forEach((buffer, index) => {
        filesParam[`File${index > 0 ? index + 1 : ''}`] = buffer;
    });

    const result = await convertapi.convert('pdf', filesParam, 'jpg');

    // Return PDF buffer
    const pdfBuffer = await (result.files[0] as any).read();
    return pdfBuffer;
}

// Merge PDFs
export async function mergePdfs(pdfBuffers: Array<Buffer | Uint8Array>) {
    const convertapi = getConvertApiClient();

    // Same approach untuk multiple files
    const filesParam: any = {};
    pdfBuffers.forEach((buffer, index) => {
        filesParam[`File${index > 0 ? index + 1 : ''}`] = buffer;
    });

    const result = await convertapi.convert('merge', filesParam, 'pdf');

    const mergedPdf = await (result.files[0] as any).read();
    return mergedPdf;
}

// Split PDF
export async function splitPdf(pdfBuffer: Buffer | Uint8Array) {
    const convertapi = getConvertApiClient();

    const result = await convertapi.convert('split', {
        File: pdfBuffer,
    }, 'pdf');

    // Return array of PDF buffers (one per page)
    const pdfPages = await Promise.all(
        result.files.map(file => (file as any).read())
    );

    return pdfPages;
}

// Compress PDF
export async function compressPdf(pdfBuffer: Buffer | Uint8Array) {
    const convertapi = getConvertApiClient();

    const result = await convertapi.convert('compress', {
        File: pdfBuffer,
    }, 'pdf');

    const compressedPdf = await (result.files[0] as any).read();
    return compressedPdf;
}

// Rotate PDF
export async function rotatePdf(pdfBuffer: Buffer | Uint8Array, angle: 90 | 180 | 270) {
    const convertapi = getConvertApiClient();

    const result = await convertapi.convert('rotate', {
        File: pdfBuffer,
        Angle: angle,
    }, 'pdf');

    const rotatedPdf = await (result.files[0] as any).read();
    return rotatedPdf;
}

// Get usage info (optional - untuk monitoring)
export async function getUsageInfo() {
    const convertapi = getConvertApiClient();

    try {
        const user = await convertapi.getUser();
        return {
            secondsLeft: user.SecondsLeft,
            active: user.Active,
            email: user.Email,
        };
    } catch (error) {
        console.error('Failed to get usage info:', error);
        return null;
    }
}
