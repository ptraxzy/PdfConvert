// Client-side helper untuk call backend API
// AMAN - tidak ada database credentials di sini!

export async function trackToolUsage({
    toolName,
    fileCount = 1,
    fileSizeMb = 0,
    processingTimeMs = 0,
    success = true,
    errorMessage = null,
}: {
    toolName: string;
    fileCount?: number;
    fileSizeMb?: number;
    processingTimeMs?: number;
    success?: boolean;
    errorMessage?: string | null;
}) {
    try {
        // Call backend API (bukan direct ke Supabase)
        const response = await fetch('/api/track-usage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                toolName,
                fileCount,
                fileSizeMb,
                processingTimeMs,
                success,
                errorMessage,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Failed to track usage:', error);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error tracking usage:', error);
        return false;
    }
}

// Helper: Get analytics stats
export async function getAnalyticsStats() {
    try {
        const response = await fetch('/api/stats');

        if (!response.ok) {
            throw new Error('Failed to fetch stats');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching stats:', error);
        return null;
    }
}
