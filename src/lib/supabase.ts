import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/* Client-side (anon key) — para componentes React */
export const supabase = createClient(supabaseUrl, supabaseAnon);

/* Server-side (service role) — solo para API routes y admin */
export function supabaseAdmin() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

/* Tipos de las tablas */
export interface Contact {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  created_at: string;
}

export interface AsesoriaRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  city: string;
  service: string;
  employees: string;
  message: string;
  status: 'nuevo' | 'contactado' | 'cerrado';
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
}
