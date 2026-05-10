'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, User, Mail, Building2, Phone, MessageSquare, MapPin, Clock, MessageCircle } from 'lucide-react';

const WHATSAPP = 'https://wa.me/573003684990?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20tecnol%C3%B3gica';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface Field { label: string; name: string; type: string; placeholder: string; icon: React.ElementType; required?: boolean; textarea?: boolean; }

const FIELDS: Field[] = [
  { label: 'Nombre completo',  name: 'name',    type: 'text',  placeholder: 'Juan Rodríguez',         icon: User,          required: true  },
  { label: 'Correo electrónico', name: 'email', type: 'email', placeholder: 'juan@empresa.com',        icon: Mail,          required: true  },
  { label: 'Empresa',          name: 'company', type: 'text',  placeholder: 'Mi Empresa S.A.S.',       icon: Building2                      },
  { label: 'Teléfono / WhatsApp', name: 'phone', type: 'tel', placeholder: '+57 300 000 0000',        icon: Phone                          },
  { label: 'Mensaje',          name: 'message', type: 'text',  placeholder: '¿En qué podemos ayudarte?', icon: MessageSquare, required: true, textarea: true },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm]   = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>('idle');
  const [errMsg, setErrMsg] = useState('');

  const set = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    setErrMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setState('success');
      setForm({});
    } catch (err: unknown) {
      setErrMsg(err instanceof Error ? err.message : 'Error. Intenta de nuevo.');
      setState('error');
    }
  };

  return (
    <section ref={ref} id="contacto-form" className="relative py-24 sm:py-32 bg-[#080C10] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#2E8BCF]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex justify-center mb-5">
            <span className="section-label">Contacto</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
            Hablemos de tu <span className="text-gradient">proyecto</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 text-white/50 text-base">
            Completa el formulario y te contactamos en menos de 4 horas hábiles.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 items-start">

          {/* ── LEFT: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-5">
              <h3 className="text-white font-bold text-[16px]">Información de contacto</h3>

              {[
                { icon: Phone,    label: 'WhatsApp / Llamada',   value: '+57 (300) 368-4990',      href: 'tel:+573003684990' },
                { icon: Mail,     label: 'Correo empresarial',   value: 'ceo@intechsolution.com.co', href: 'mailto:ceo@intechsolution.com.co' },
                { icon: MapPin,   label: 'Cobertura',            value: 'Nacional · Colombia',     href: null },
                { icon: Clock,    label: 'Horario de atención',  value: 'Lun–Vie 8am–6pm · Sáb 8am–1pm', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2E8BCF]/10 border border-[#2E8BCF]/20 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-[#2E8BCF]" />
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-wider font-semibold">{label}</p>
                    {href ? (
                      <a href={href} className="text-white/75 text-[13px] hover:text-[#2E8BCF] transition-colors font-medium">{value}</a>
                    ) : (
                      <p className="text-white/75 text-[13px] font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp shortcut */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-4 bg-emerald-500/10 border border-emerald-500/25 rounded-2xl text-emerald-400 hover:bg-emerald-500/18 transition-all group"
            >
              <MessageCircle size={20} className="shrink-0" />
              <div>
                <p className="font-semibold text-[14px]">Respuesta inmediata por WhatsApp</p>
                <p className="text-emerald-400/60 text-[11px]">Tiempo promedio de respuesta: 10 minutos</p>
              </div>
            </a>

            {/* Soporte 24/7 badge */}
            <div className="glass rounded-2xl p-5 text-center">
              <div className="flex justify-center gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-[11px] font-bold uppercase tracking-wider">Soporte activo</span>
              </div>
              <p className="text-white/60 text-[13px]">Emergencias tecnológicas atendidas <strong className="text-white">24/7</strong> para clientes con contrato.</p>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-3"
          >
            {state === 'success' ? (
              <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center gap-4 text-center min-h-[420px]">
                <CheckCircle2 size={52} className="text-emerald-400" />
                <h3 className="text-white font-bold text-xl">¡Mensaje enviado con éxito!</h3>
                <p className="text-white/55 text-[14px] max-w-sm leading-relaxed">
                  Recibimos tu mensaje. Un asesor de INTECH SOLUTION te contactará en las próximas 4 horas hábiles.
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="btn-ghost mt-2 px-6 py-2.5 rounded-xl text-[13px]"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="glass rounded-2xl p-6 sm:p-8 flex flex-col gap-5">

                <div className="grid sm:grid-cols-2 gap-4">
                  {FIELDS.filter(f => !f.textarea).map(({ label, name, type, placeholder, icon: Icon, required }) => (
                    <div key={name} className={name === 'message' ? 'sm:col-span-2' : ''}>
                      <label className="block text-white/55 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                        {label}{required && <span className="text-[#2E8BCF] ml-0.5">*</span>}
                      </label>
                      <div className="relative">
                        <Icon size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                        <input
                          type={type}
                          value={form[name] ?? ''}
                          onChange={e => set(name, e.target.value)}
                          placeholder={placeholder}
                          required={required}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#2E8BCF]/50 focus:bg-[#2E8BCF]/[0.04] transition-all"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Textarea */}
                {FIELDS.filter(f => f.textarea).map(({ label, name, placeholder, icon: Icon, required }) => (
                  <div key={name}>
                    <label className="block text-white/55 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                      {label}{required && <span className="text-[#2E8BCF] ml-0.5">*</span>}
                    </label>
                    <div className="relative">
                      <Icon size={14} className="absolute left-3.5 top-3.5 text-white/25 pointer-events-none" />
                      <textarea
                        value={form[name] ?? ''}
                        onChange={e => set(name, e.target.value)}
                        placeholder={placeholder}
                        required={required}
                        rows={4}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#2E8BCF]/50 focus:bg-[#2E8BCF]/[0.04] transition-all resize-none"
                      />
                    </div>
                  </div>
                ))}

                {state === 'error' && (
                  <div className="flex items-center gap-2.5 px-4 py-3 bg-red-500/10 border border-red-500/25 rounded-xl">
                    <AlertCircle size={15} className="text-red-400 shrink-0" />
                    <p className="text-red-400 text-[13px]">{errMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-primary flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-[14px] font-semibold mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Enviar Mensaje
                    </>
                  )}
                </button>

                <p className="text-white/25 text-[11px] text-center">
                  Tu información es confidencial y nunca será compartida con terceros.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
