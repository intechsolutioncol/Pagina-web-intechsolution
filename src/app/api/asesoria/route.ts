import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, city, service, employees, message } = body;

    if (!name || !email || !company || !phone) {
      return NextResponse.json(
        { error: 'Nombre, correo, empresa y teléfono son obligatorios.' },
        { status: 400 }
      );
    }

    const db = supabaseAdmin();
    const { error } = await db.from('asesoria_requests').insert({
      name:      name.trim(),
      email:     email.trim().toLowerCase(),
      company:   company.trim(),
      phone:     phone.trim(),
      city:      city?.trim() ?? '',
      service:   service ?? '',
      employees: employees ?? '',
      message:   message?.trim() ?? '',
      status:    'nuevo',
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[/api/asesoria]', err);
    return NextResponse.json(
      { error: 'Error interno. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}
