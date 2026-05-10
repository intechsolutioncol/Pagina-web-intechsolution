import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Correo inválido.' }, { status: 400 });
    }

    const db = supabaseAdmin();
    const { error } = await db
      .from('newsletter_subscribers')
      .upsert({ email: email.trim().toLowerCase() }, { onConflict: 'email', ignoreDuplicates: true });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[/api/newsletter]', err);
    return NextResponse.json(
      { error: 'Error interno. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}
