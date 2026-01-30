// Client-side PDF utilities using pdf-lib
// Lebih reliable dan impressive untuk portfolio!

import { PDFDocument } from 'pdf-lib';
import * as pdfjs from 'pdfjs-dist';

// Setup PDF.js worker
if (typeof window !== 'undefined') {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

// Convert images to PDF (client-side)
export async function imagesToPdf(imageFiles: File[]): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create();

    for (const imageFile of imageFiles) {
        const imageBytes = await imageFile.arrayBuffer();

        let image;
        if (imageFile.type === 'image/png') {
            image = await pdfDoc.embedPng(imageBytes);
        } else if (imageFile.type === 'image/jpeg' || imageFile.type === 'image/jpg') {
            image = await pdfDoc.embedJpg(imageBytes);
        } else {
            // Try JPG as fallback
            image = await pdfDoc.embedJpg(imageBytes);
        }

        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, {
            x: 0,
            y: 0,
            width: image.width,
            height: image.height,
        });
    }

    return await pdfDoc.save();
}

// Convert PDF to images (client-side)
export async function pdfToImages(pdfFile: File): Promise<Blob[]> {
    const arrayBuffer = await pdfFile.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;

    const images: Blob[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d')!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
            canvasContext: context,
            viewport: viewport,
        } as any).promise;

        const blob = await new Promise<Blob>((resolve) => {
            canvas.toBlob((blob) => resolve(blob!), 'image/jpeg', 0.95);
        });

        images.push(blob);
    }

    return images;
}

// Merge PDFs (client-side)
export async function mergePdfs(pdfFiles: File[]): Promise<Uint8Array> {
    const mergedPdf = await PDFDocument.create();

    for (const pdfFile of pdfFiles) {
        const pdfBytes = await pdfFile.arrayBuffer();
        const pdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    return await mergedPdf.save();
}

// Split PDF (client-side)
export async function splitPdf(pdfFile: File): Promise<Uint8Array[]> {
    const pdfBytes = await pdfFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const pageCount = pdfDoc.getPageCount();
    const splitPdfs: Uint8Array[] = [];

    for (let i = 0; i < pageCount; i++) {
        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
        newPdf.addPage(copiedPage);
        const pdfData = await newPdf.save();
        splitPdfs.push(pdfData);
    }

    return splitPdfs;
}

// Compress PDF (client-side)
// Note: pdf-lib doesn't have native compression
// This is a placeholder that re-saves the PDF which may reduce size slightly
export async function compressPdf(pdfFile: File): Promise<Uint8Array> {
    const pdfBytes = await pdfFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Re-saving can sometimes reduce file size
    // For real compression, would need external library like pdf.js with optimization
    return await pdfDoc.save({
        useObjectStreams: false, // Can help reduce size
    });
}

// Rotate PDF (client-side)
export async function rotatePdf(pdfFile: File, degrees: 90 | 180 | 270): Promise<Uint8Array> {
    const pdfBytes = await pdfFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const pages = pdfDoc.getPages();
    pages.forEach((page) => {
        const currentRotation = page.getRotation().angle;
        page.setRotation({ type: 'degrees', angle: currentRotation + degrees } as any);
    });

    return await pdfDoc.save();
}
