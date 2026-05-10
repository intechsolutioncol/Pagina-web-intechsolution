import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Acceso denegado.' }, { status: 401 });
    }

    const db = supabaseAdmin();

    const [contacts, asesorias, newsletter] = await Promise.all([
      db.from('contacts').select('*').order('created_at', { ascending: false }),
      db.from('asesoria_requests').select('*').order('created_at', { ascending: false }),
      db.from('newsletter_subscribers').select('*').order('created_at', { ascending: false }),
    ]);

    return NextResponse.json({
      contacts:   contacts.data  ?? [],
      asesorias:  asesorias.data ?? [],
      newsletter: newsletter.data ?? [],
    });
  } catch (err) {
    console.error('[/api/admin/leads]', err);
    return NextResponse.json({ error: 'Error interno.' }, { status: 500 });
  }
}
