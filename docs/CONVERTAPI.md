# ConvertAPI Integration

## Overview
Project menggunakan **ConvertAPI** untuk PDF operations yang lebih advanced.

## API Keys
- **Sandbox**: 10,000 conversions limit (untuk testing)
- **Production**: Unlimited (never expires)

## Features Available

### 1. PDF to JPG
```typescript
import { convertPdfToJpg } from '@/lib/pdf-api';

const jpgBuffers = await convertPdfToJpg(pdfBuffer);
// Returns: Array<Buffer> - satu buffer per halaman
```

### 2. Images to PDF
```typescript
import { convertImagesToPdf } from '@/lib/pdf-api';

const pdfBuffer = await convertImagesToPdf([img1Buffer, img2Buffer]);
// Returns: Buffer - single PDF dengan semua gambar
```

### 3. Merge PDFs
```typescript
import { mergePdfs } from '@/lib/pdf-api';

const mergedPdf = await mergePdfs([pdf1Buffer, pdf2Buffer]);
// Returns: Buffer - single merged PDF
```

### 4. Split PDF
```typescript
import { splitPdf } from '@/lib/pdf-api';

const pdfPages = await splitPdf(pdfBuffer);
// Returns: Array<Buffer> - satu PDF per halaman
```

### 5. Compress PDF
```typescript
import { compressPdf } from '@/lib/pdf-api';

const compressedPdf = await compressPdf(pdfBuffer);
// Returns: Buffer - compressed PDF
```

### 6. Rotate PDF
```typescript
import { rotatePdf } from '@/lib/pdf-api';

const rotatedPdf = await rotatePdf(pdfBuffer, 90);
// angle: 90 | 180 | 270
// Returns: Buffer - rotated PDF
```

## Usage Monitoring
```typescript
import { getUsageInfo } from '@/lib/pdf-api';

const usage = await getUsageInfo();
// Returns: { secondsLeft, active, email }
```

## Environment Variables
```env
# Development (Sandbox - 10k limit)
PDF_API_SANDBOX_KEY=CqTR8pye1LjmbjSIkka13G92LOrgDZ2t

# Production (Unlimited)
PDF_API_KEY=JEB1ANGrdPLzmPvaxGMqffGHSDYXmarL

NODE_ENV=development # or production
```

## Implementation Strategy

### Option A: Hybrid (Recommended)
- **Simple operations** (rotate, basic convert): Client-side dengan pdf-lib (gratis, cepat)
- **Heavy operations** (compress, advanced): ConvertAPI (lebih baik quality)

### Option B: Full ConvertAPI
- Semua operations via API
- Better quality & features
- Kena usage quota (tapi production unlimited)

### Option C: Full Client-side
- Semua via pdf-lib
- 100% gratis
- Quality standard (bukan premium)

## Pricing
- **Sandbox**: 10,000 conversions (testing only)
- **Production**: Unlimited, never expires ✅
- **Cost**: Sudah dibayar upfront (unlimited plan)

## Next Steps
1. Choose implementation strategy (A, B, atau C)
2. Create API routes for each operation
3. Update tool pages to use API
4. Add error handling & retry logic
5. Monitor usage via dashboard

## Links
- Dashboard: https://www.convertapi.com/a/dashboard  
- Docs: https://www.convertapi.com/doc
- Node.js Guide: https://github.com/ConvertAPI/convertapi-node
