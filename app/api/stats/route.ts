import { NextResponse } from 'next/server';

// API untuk mendapatkan statistik
export async function GET() {
    // Return dummy stats since Supabase is removed
    return NextResponse.json({
        dailyStats: [],
        popularTools: [],
        totalUses: 0,
    });
}
