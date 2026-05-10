import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, correo y mensaje son obligatorios.' },
        { status: 400 }
      );
    }

    const db = supabaseAdmin();
    const { error } = await db.from('contacts').insert({
      name:    name.trim(),
      email:   email.trim().toLowerCase(),
      company: company?.trim() ?? '',
      phone:   phone?.trim() ?? '',
      message: message.trim(),
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[/api/contact]', err);
    return NextResponse.json(
      { error: 'Error interno. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}
