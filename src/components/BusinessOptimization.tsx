'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, TrendingUp, Zap, BarChart3, GitBranch, Bell } from 'lucide-react';

const FEATURES = [
  { icon: Zap,       text: 'Automatización de flujos de trabajo repetitivos' },
  { icon: BarChart3, text: 'Dashboards de KPIs en tiempo real' },
  { icon: GitBranch, text: 'Integración entre sistemas y aplicaciones' },
  { icon: Bell,      text: 'Alertas inteligentes y monitoreo proactivo' },
  { icon: TrendingUp,text: 'Reducción de costos operativos hasta el 40%' },
  { icon: CheckCircle2, text: 'Procesos auditables y trazables digitalmente' },
];

const METRICS = [
  { label: 'Eficiencia operativa',     value: 94, unit: '%' },
  { label: 'Reducción de errores',      value: 87, unit: '%' },
  { label: 'Velocidad de procesos',     value: 78, unit: '%' },
  { label: 'ROI promedio',              value: 320, unit: '%' },
];

const WORKFLOW = [
  { step: '01', label: 'Análisis',       desc: 'Mapeo de procesos actuales' },
  { step: '02', label: 'Diseño',         desc: 'Arquitectura del nuevo flujo' },
  { step: '03', label: 'Automatización', desc: 'Implementación de sistemas' },
  { step: '04', label: 'Monitoreo',      desc: 'KPIs y mejora continua' },
];

function AnimatedBar({ value, delay = 0 }: { value: number; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(value), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, value, delay]);

  return (
    <div ref={ref} className="w-full bg-white/[0.06] rounded-full h-2 overflow-hidden">
      <div
        className="dashboard-bar h-full"
        style={{ width: `${width}%`, transition: `width 1.4s cubic-bezier(0.4,0,0.2,1) ${delay}s` }}
      />
    </div>
  );
}

export default function BusinessOptimization() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="optimizacion"
      className="relative py-24 sm:py-32 bg-[#080C10] overflow-hidden"
    >
      {/* Bg decoration */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#2E8BCF]/[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#03263A]/60 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="section-label">Optimización Empresarial</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance"
          >
            Convertimos procesos manuales en{' '}
            <span className="text-gradient">sistemas inteligentes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-white/50 text-base leading-relaxed"
          >
            Analizamos, rediseñamos y automatizamos tus operaciones para que tu equipo se
            enfoque en lo que realmente importa: hacer crecer el negocio.
          </motion.p>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* LEFT: Features + Workflow */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            {/* Features list */}
            <div className="flex flex-col gap-3.5">
              {FEATURES.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2E8BCF]/12 border border-[#2E8BCF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2E8BCF]/20 transition-colors">
                    <Icon size={15} className="text-[#2E8BCF]" />
                  </div>
                  <span className="text-white/70 text-[14px] font-medium leading-snug group-hover:text-white/90 transition-colors">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Workflow steps */}
            <div className="flex flex-col gap-0">
              {WORKFLOW.map(({ step, label, desc }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex gap-4 relative"
                >
                  {/* Vertical line */}
                  {i < WORKFLOW.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-[#2E8BCF]/40 to-transparent" />
                  )}
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="w-10 h-10 rounded-xl glass-blue flex items-center justify-center text-[#2E8BCF] font-bold text-xs">
                      {step}
                    </div>
                  </div>
                  <div className="pb-8">
                    <p className="text-white font-semibold text-[14px]">{label}</p>
                    <p className="text-white/45 text-[12.5px] mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">

              {/* Dashboard header bar */}
              <div className="bg-white/[0.03] border-b border-white/[0.06] px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-white/30 text-[11px] font-medium tracking-wider">INTECH · Dashboard Empresarial</span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>

              <div className="p-6 flex flex-col gap-6">

                {/* Top stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Tickets resueltos', value: '1,247', change: '+12%', up: true },
                    { label: 'Uptime sistemas',   value: '99.9%', change: '+0.1%', up: true },
                    { label: 'Procesos activos',  value: '34',    change: '+8%',   up: true },
                    { label: 'Ahorro mensual',    value: '$8.2M', change: '+23%',  up: true },
                  ].map(({ label, value, change, up }) => (
                    <div key={label} className="glass rounded-xl p-3 text-center">
                      <p className="text-white font-bold text-lg leading-none">{value}</p>
                      <p className="text-white/40 text-[9px] mt-1 leading-tight">{label}</p>
                      <p className={`text-[9px] font-semibold mt-1 ${up ? 'text-emerald-400' : 'text-red-400'}`}>{change}</p>
                    </div>
                  ))}
                </div>

                {/* Metric bars */}
                <div className="flex flex-col gap-4">
                  <p className="text-white/50 text-[11px] uppercase tracking-wider font-semibold">Indicadores de rendimiento</p>
                  {METRICS.map(({ label, value, unit }, i) => (
                    <div key={label} className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-[12px]">
                        <span className="text-white/60">{label}</span>
                        <span className="text-[#2E8BCF] font-bold">{value}{unit}</span>
                      </div>
                      <AnimatedBar value={value > 100 ? 100 : value} delay={0.4 + i * 0.15} />
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="flex flex-col gap-2">
                  <p className="text-white/50 text-[11px] uppercase tracking-wider font-semibold">Actividad reciente</p>
                  {[
                    { msg: 'Servidor ERP actualizado correctamente',       time: 'hace 2 min',  status: 'ok' },
                    { msg: 'Backup automático completado — 3 sistemas',    time: 'hace 15 min', status: 'ok' },
                    { msg: 'Nueva cámara IP agregada — Piso 3',            time: 'hace 1 h',    status: 'info' },
                    { msg: 'Proceso de facturación automatizado activo',   time: 'hace 3 h',    status: 'ok' },
                  ].map(({ msg, time, status }) => (
                    <div key={msg} className="flex items-start gap-2.5 py-2 border-b border-white/[0.04] last:border-0">
                      <div className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                        status === 'ok' ? 'bg-emerald-400' : 'bg-[#2E8BCF]'
                      }`} />
                      <p className="text-white/55 text-[11.5px] flex-1 leading-tight">{msg}</p>
                      <span className="text-white/25 text-[10px] shrink-0">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-5 -right-4 glass-blue px-4 py-2.5 rounded-2xl shadow-lg glow-sm"
            >
              <p className="text-[#2E8BCF] font-bold text-lg leading-none">40%</p>
              <p className="text-white/50 text-[9px] mt-0.5">menos costos</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
