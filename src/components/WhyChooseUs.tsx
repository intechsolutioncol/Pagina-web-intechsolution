'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Clock, HeartHandshake, Layers, BadgeCheck, Globe2 } from 'lucide-react';

const STATS = [
  { value: 500,  suffix: '+', label: 'Empresas atendidas',      icon: HeartHandshake, description: 'Clientes en toda Colombia' },
  { value: 99.9, suffix: '%', label: 'Uptime garantizado',      icon: Layers,         description: 'Disponibilidad de sistemas' },
  { value: 4,    suffix: 'h', label: 'Tiempo de respuesta',     icon: Clock,          description: 'Soporte remoto y presencial' },
  { value: 1200, suffix: '+', label: 'Proyectos completados',   icon: Award,          description: 'En los últimos 8 años' },
  { value: 8,    suffix: '+', label: 'Años de experiencia',     icon: BadgeCheck,     description: 'Líderes en el sector' },
  { value: 12,   suffix: '',  label: 'Ciudades con cobertura',  icon: Globe2,         description: 'Presencia nacional' },
];

const TRUSTS = [
  'Soporte certificado Microsoft',
  'Técnicos certificados Hikvision',
  'Instaladores certificados Panduit',
  'Partners tecnológicos verificados',
  'Servicio con garantía escrita',
  'Confidencialidad empresarial',
];

function Counter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const isDecimal = target % 1 !== 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? Math.round(target * ease * 10) / 10
        : Math.round(target * ease);
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  const display = target % 1 !== 0 ? count.toFixed(1) : count.toLocaleString('es-CO');

  return <span ref={ref}>{display}</span>;
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="nosotros"
      className="relative py-24 sm:py-32 bg-brand-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2E8BCF]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2E8BCF]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="section-label">Por Qué Elegirnos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance"
          >
            Números que reflejan{' '}
            <span className="text-gradient">nuestra confiabilidad</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-white/50 text-base"
          >
            Más de 8 años transformando empresas colombianas con tecnología de clase mundial.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-16">
          {STATS.map(({ value, suffix, label, icon: Icon, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 * i + 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="stat-card group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2E8BCF]/10 border border-[#2E8BCF]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2E8BCF]/20 transition-colors">
                <Icon size={18} className="text-[#2E8BCF]" />
              </div>
              <div className="counter-number text-3xl sm:text-4xl font-extrabold text-white mb-1 text-glow">
                <Counter target={value} suffix={suffix} />
                <span className="text-[#2E8BCF]">{suffix}</span>
              </div>
              <p className="text-white/80 font-semibold text-[13px] mb-1">{label}</p>
              <p className="text-white/35 text-[11px]">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass rounded-2xl px-6 py-6"
        >
          <p className="text-center text-white/40 text-[11px] uppercase tracking-wider font-semibold mb-6">
            Certificaciones y compromisos
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {TRUSTS.map((trust) => (
              <div
                key={trust}
                className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.07] rounded-full text-[12px] text-white/60 hover:text-white/80 hover:border-[#2E8BCF]/30 transition-all"
              >
                <BadgeCheck size={12} className="text-[#2E8BCF] shrink-0" />
                {trust}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
