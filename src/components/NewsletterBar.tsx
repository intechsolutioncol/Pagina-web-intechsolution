'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

type State = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterBar() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');
  const [msg, setMsg]     = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    try {
      const res  = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setState('success');
      setMsg('¡Gracias! Te mantendremos informado.');
      setEmail('');
    } catch (err: unknown) {
      setState('error');
      setMsg(err instanceof Error ? err.message : 'Error. Intenta de nuevo.');
    }
  };

  return (
    <section className="relative py-14 bg-[#03263A]/40 border-y border-[#2E8BCF]/12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2E8BCF]/[0.04] via-transparent to-[#2E8BCF]/[0.04] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#2E8BCF]/12 border border-[#2E8BCF]/20 flex items-center justify-center">
              <Mail size={18} className="text-[#2E8BCF]" />
            </div>
          </div>
          <h3 className="text-white font-bold text-xl sm:text-2xl mb-2 tracking-tight">
            Mantente al día con tecnología empresarial
          </h3>
          <p className="text-white/45 text-[14px] mb-7">
            Recibe novedades, guías y consejos tecnológicos para tu empresa. Sin spam.
          </p>

          {state === 'success' ? (
            <div className="flex items-center justify-center gap-2.5 text-emerald-400">
              <CheckCircle2 size={20} />
              <span className="font-semibold text-[15px]">{msg}</span>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col xs:flex-row gap-2.5 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tucorreo@empresa.com"
                  required
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl pl-10 pr-4 py-3 text-white text-[14px] placeholder-white/25 focus:outline-none focus:border-[#2E8BCF]/50 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={state === 'loading'}
                className="btn-primary flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[13px] font-semibold shrink-0 disabled:opacity-60"
              >
                {state === 'loading' ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <><span>Suscribirme</span><ArrowRight size={14} /></>
                )}
              </button>
            </form>
          )}

          {state === 'error' && (
            <div className="flex items-center justify-center gap-2 mt-3 text-red-400 text-[12px]">
              <AlertCircle size={13} />
              <span>{msg}</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
