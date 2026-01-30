import { saveAs } from 'file-saver';
import JSZip from 'jszip';

/**
 * Format file size to human readable format
 */
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Validate file type
 */
export function validateFileType(file: File, allowedTypes: string[]): boolean {
    return allowedTypes.some((type) => {
        if (type.startsWith('.')) {
            return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        return file.type === type;
    });
}

/**
 * Download a single file
 */
export function downloadFile(blob: Blob, filename: string): void {
    saveAs(blob, filename);
}

/**
 * Download multiple files as ZIP
 */
export async function downloadFilesAsZip(
    files: { blob: Blob; filename: string }[],
    zipFilename: string
): Promise<void> {
    const zip = new JSZip();

    files.forEach(({ blob, filename }) => {
        zip.file(filename, blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, zipFilename);
}

/**
 * Create a blob URL for preview
 */
export function createBlobUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
}

/**
 * Revoke blob URL to free memory
 */
export function revokeBlobUrl(url: string): void {
    URL.revokeObjectURL(url);
}

/**
 * Read file as ArrayBuffer
 */
export function readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as ArrayBuffer);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}

/**
 * Read file as Data URL
 */
export function readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

/**
 * Generate unique filename
 */
export function generateUniqueFilename(
    baseName: string,
    extension: string,
    index?: number
): string {
    const timestamp = Date.now();
    const indexStr = index !== undefined ? `_${index + 1}` : '';
    return `${baseName}${indexStr}_${timestamp}.${extension}`;
}
