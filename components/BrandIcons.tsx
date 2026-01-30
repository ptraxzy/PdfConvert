import React from 'react';

export const WordIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#2B579A" />
        <path d="M16.5 6H7.5C6.67 6 6 6.67 6 7.5V16.5C6 17.33 6.67 18 7.5 18H16.5C17.33 18 18 17.33 18 16.5V7.5C18 6.67 17.33 6 16.5 6Z" fill="#2B579A" />
        <path d="M13.5 14L12.1 8.5H10.9L9.5 14L8.2 8.5H6V16.5H7.5V10.8L8.7 15.5H10.3L11.5 10.8V16.5H13V8.5H10.8L13.5 14Z" fill="white" />
    </svg>
);

export const ExcelIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#217346" />
        <path d="M14.5 15.5L12 11.5L14.5 7.5H12.8L11.2 10.3L9.6 7.5H7.9L10.4 11.5L7.9 15.5H9.6L11.2 12.7L12.8 15.5H14.5Z" fill="white" />
    </svg>
);

export const PowerPointIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#D24726" />
        <path d="M14.5 7.5H8.5V16.5H10V13H14.5C16 13 16.5 12 16.5 10.25C16.5 8.5 16 7.5 14.5 7.5ZM14.5 11.5H10V8.9H14.5C15.2 8.9 15.5 9.2 15.5 10.2C15.5 11.2 15.2 11.5 14.5 11.5Z" fill="white" />
    </svg>
);

export const PdfIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18H17V16H7V18Z" fill="#E74C3C" />
        <path d="M17 14H7V12H17V14Z" fill="#E74C3C" />
        <path d="M7 10H11V8H7V10Z" fill="#E74C3C" />
        <path fillRule="evenodd" clipRule="evenodd" d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H19V19H5Z" fill="#E74C3C" />
    </svg>
);

export const ImageIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#38A3F1" />
        <path d="M8.5 13.5L11 16.5L14.5 12L19 18H5L8.5 13.5Z" fill="white" />
        <circle cx="8" cy="8" r="1.5" fill="white" />
    </svg>
);
