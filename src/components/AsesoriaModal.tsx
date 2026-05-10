'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, User, Mail, Building2, Phone, MapPin, Briefcase, Users, MessageSquare } from 'lucide-react';

const SERVICES = [
  'Soporte IT Empresarial',
  'Instalación CCTV / Videovigilancia',
  'Redes y Cableado Estructurado',
  'Telefonía IP / VoIP',
  'Automatización de Procesos',
  'Transformación Digital',
  'Administración de Servidores',
  'Otro / Varios servicios',
];

const EMPLOYEE_RANGES = ['1–10 empleados', '11–50 empleados', '51–200 empleados', '201–500 empleados', '+500 empleados'];

const CITIES = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Bucaramanga', 'Cartagena', 'Manizales', 'Pereira', 'Otra ciudad'];

type Step = 1 | 2;
type FormState = 'idle' | 'loading' | 'success' | 'error';

interface Props { isOpen: boolean; onClose: () => void; }

export default function AsesoriaModal({ isOpen, onClose }: Props) {
  const [step, setStep]   = useState<Step>(1);
  const [form, setForm]   = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>('idle');
  const [errMsg, setErrMsg] = useState('');

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const reset = () => { setStep(1); setForm({}); setState('idle'); setErrMsg(''); };
  const close = () => { onClose(); setTimeout(reset, 400); };

  const submit = async () => {
    setState('loading');
    setErrMsg('');
    try {
      const res = await fetch('/api/asesoria', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setState('success');
    } catch (err: unknown) {
      setErrMsg(err instanceof Error ? err.message : 'Error. Intenta de nuevo.');
      setState('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[70] max-w-lg mx-auto glass rounded-3xl border border-white/[0.1] shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/[0.07]">
              <div>
                <h2 className="text-white font-bold text-[17px]">Solicitar Asesoría Gratuita</h2>
                <p className="text-white/40 text-[12px] mt-0.5">Sin costo · Respuesta en 4 horas hábiles</p>
              </div>
              <button onClick={close} className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.1] flex items-center justify-center text-white/60 hover:text-white transition-all">
                <X size={16} />
              </button>
            </div>

            <div className="px-6 py-6">

              {/* Step indicator */}
              {state !== 'success' && (
                <div className="flex items-center gap-2 mb-6">
                  {([1, 2] as Step[]).map(s => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                        step >= s ? 'bg-[#2E8BCF] text-white' : 'bg-white/[0.07] text-white/30'
                      }`}>{s}</div>
                      {s < 2 && <div className={`flex-1 h-px w-16 transition-all ${step >= 2 ? 'bg-[#2E8BCF]' : 'bg-white/[0.1]'}`} />}
                    </div>
                  ))}
                  <span className="text-white/30 text-[11px] ml-2">{step === 1 ? 'Datos de contacto' : 'Tu empresa'}</span>
                </div>
              )}

              {state === 'success' ? (
                <div className="flex flex-col items-center gap-4 text-center py-6">
                  <CheckCircle2 size={48} className="text-emerald-400" />
                  <h3 className="text-white font-bold text-lg">¡Solicitud recibida!</h3>
                  <p className="text-white/55 text-[13px] max-w-xs leading-relaxed">
                    Un asesor de INTECH SOLUTION revisará tu solicitud y te contactará pronto por WhatsApp o correo.
                  </p>
                  <button onClick={close} className="btn-primary px-8 py-2.5 rounded-xl text-[13px] mt-2">
                    Cerrar
                  </button>
                </div>
              ) : (
                <>
                  <AnimatePresence mode="wait">
                    {step === 1 ? (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="flex flex-col gap-4">
                        {[
                          { label: 'Nombre completo', name: 'name',  type: 'text',  placeholder: 'Juan Rodríguez',       icon: User,     required: true },
                          { label: 'Correo electrónico', name: 'email', type: 'email', placeholder: 'juan@empresa.com', icon: Mail,     required: true },
                          { label: 'Teléfono / WhatsApp', name: 'phone', type: 'tel', placeholder: '+57 300 000 0000',  icon: Phone,    required: true },
                        ].map(({ label, name, type, placeholder, icon: Icon, required }) => (
                          <div key={name}>
                            <label className="block text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1.5">
                              {label}{required && <span className="text-[#2E8BCF] ml-0.5">*</span>}
                            </label>
                            <div className="relative">
                              <Icon size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                              <input
                                type={type}
                                value={form[name] ?? ''}
                                onChange={e => set(name, e.target.value)}
                                placeholder={placeholder}
                                required={required}
                                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-white text-[13px] placeholder-white/20 focus:outline-none focus:border-[#2E8BCF]/50 transition-all"
                              />
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="flex flex-col gap-4">
                        {/* Company */}
                        <div>
                          <label className="block text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1.5">Empresa<span className="text-[#2E8BCF] ml-0.5">*</span></label>
                          <div className="relative">
                            <Building2 size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                            <input type="text" value={form.company ?? ''} onChange={e => set('company', e.target.value)} placeholder="Mi Empresa S.A.S." required
                              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-white text-[13px] placeholder-white/20 focus:outline-none focus:border-[#2E8BCF]/50 transition-all" />
                          </div>
                        </div>

                        {/* City + Employees */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1.5"><MapPin size={9} className="inline mr-1" />Ciudad</label>
                            <select value={form.city ?? ''} onChange={e => set('city', e.target.value)}
                              className="w-full bg-[#0B0F14] border border-white/[0.08] rounded-xl px-3 py-2.5 text-white text-[13px] focus:outline-none focus:border-[#2E8BCF]/50 transition-all">
                              <option value="">Seleccionar</option>
                              {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1.5"><Users size={9} className="inline mr-1" />Empleados</label>
                            <select value={form.employees ?? ''} onChange={e => set('employees', e.target.value)}
                              className="w-full bg-[#0B0F14] border border-white/[0.08] rounded-xl px-3 py-2.5 text-white text-[13px] focus:outline-none focus:border-[#2E8BCF]/50 transition-all">
                              <option value="">Seleccionar</option>
                              {EMPLOYEE_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                          </div>
                        </div>

                        {/* Service */}
                        <div>
                          <label className="block text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1.5"><Briefcase size={9} className="inline mr-1" />Servicio de interés</label>
                          <select value={form.service ?? ''} onChange={e => set('service', e.target.value)}
                            className="w-full bg-[#0B0F14] border border-white/[0.08] rounded-xl px-3 py-2.5 text-white text-[13px] focus:outline-none focus:border-[#2E8BCF]/50 transition-all">
                            <option value="">Seleccionar servicio</option>
                            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1.5"><MessageSquare size={9} className="inline mr-1" />Cuéntanos más (opcional)</label>
                          <textarea value={form.message ?? ''} onChange={e => set('message', e.target.value)} rows={3} placeholder="Describe brevemente tu necesidad o reto tecnológico…"
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white text-[13px] placeholder-white/20 focus:outline-none focus:border-[#2E8BCF]/50 transition-all resize-none" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {state === 'error' && (
                    <div className="flex items-center gap-2 mt-3 px-3 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <AlertCircle size={13} className="text-red-400 shrink-0" />
                      <p className="text-red-400 text-[12px]">{errMsg}</p>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex gap-3 mt-6">
                    {step === 2 && (
                      <button onClick={() => setStep(1)} className="btn-ghost flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px]">
                        <ArrowLeft size={14} /> Atrás
                      </button>
                    )}
                    {step === 1 ? (
                      <button
                        onClick={() => { if (form.name && form.email && form.phone) setStep(2); }}
                        className="btn-primary flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-semibold"
                      >
                        Continuar <ArrowRight size={14} />
                      </button>
                    ) : (
                      <button
                        onClick={submit}
                        disabled={!form.company || state === 'loading'}
                        className="btn-primary flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-semibold disabled:opacity-60"
                      >
                        {state === 'loading' ? (
                          <><span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Enviando…</>
                        ) : (
                          <>Solicitar Asesoría <ArrowRight size={14} /></>
                        )}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
