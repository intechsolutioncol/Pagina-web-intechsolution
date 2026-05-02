'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Carlos Ramírez',
    role: 'Gerente General',
    company: 'Inversiones Andinas S.A.S.',
    city: 'Bogotá',
    quote:
      'Intech Solution transformó completamente nuestra infraestructura tecnológica. Pasamos de constantes fallas de red a un sistema estable al 99.9%. Su equipo es profesional, rápido y siempre disponible. Sin duda la mejor inversión tecnológica que hemos hecho.',
    rating: 5,
    initials: 'CR',
  },
  {
    name: 'Marcela Torres',
    role: 'Directora Administrativa',
    company: 'Clínica Santa Rosa',
    city: 'Medellín',
    quote:
      'Instalaron nuestro sistema de cámaras IP en tiempo récord y con una calidad impecable. Ahora monitoreamos toda la clínica desde el celular. Además nos implementaron la telefonía IP y ahorramos más del 60% en costos de comunicación mensual.',
    rating: 5,
    initials: 'MT',
  },
  {
    name: 'Andrés Moreno',
    role: 'CTO',
    company: 'Logística Nacional Ltda.',
    city: 'Cali',
    quote:
      'Automatizaron nuestros procesos de despacho y reducimos errores en un 87%. Los reportes en tiempo real nos permiten tomar decisiones mucho más rápido. El retorno de inversión fue visible desde el primer mes de operación.',
    rating: 5,
    initials: 'AM',
  },
  {
    name: 'Sandra López',
    role: 'Gerente de Operaciones',
    company: 'Constructora Futuro S.A.',
    city: 'Barranquilla',
    quote:
      'El sistema de control de acceso y videovigilancia que implementaron en nuestras obras es impresionante. Tenemos visibilidad total de todos los proyectos. El soporte post-venta es excelente, siempre responden en menos de 2 horas.',
    rating: 5,
    initials: 'SL',
  },
  {
    name: 'Felipe Gutiérrez',
    role: 'Director de TI',
    company: 'Banco Cooperativo Regional',
    city: 'Bucaramanga',
    quote:
      'Migraron toda nuestra infraestructura a la nube sin ninguna interrupción del servicio. Implementaron seguridad de nivel bancario y ahora tenemos el control total de nuestros datos. Profesionalismo y expertise técnico de primer nivel.',
    rating: 5,
    initials: 'FG',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const visible = [
    TESTIMONIALS[current],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(current + 2) % TESTIMONIALS.length],
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 bg-brand-black overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2E8BCF]/25 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="section-label">Testimonios</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance"
            >
              Lo que dicen{' '}
              <span className="text-gradient">nuestros clientes</span>
            </motion.h2>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3"
          >
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#2E8BCF]/40 hover:bg-[#2E8BCF]/10 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#2E8BCF]/40 hover:bg-[#2E8BCF]/10 transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`glass-card rounded-2xl p-6 flex flex-col gap-5 ${
                  i === 0 ? 'border-[#2E8BCF]/20' : ''
                }`}
              >
                {/* Quote icon */}
                <Quote size={24} className="text-[#2E8BCF]/40 shrink-0" />

                {/* Quote */}
                <p className="text-white/65 text-[13.5px] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-white/[0.06]" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2E8BCF] to-[#03263A] flex items-center justify-center text-white font-bold text-[13px] shrink-0">
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-[13px] truncate">{t.name}</p>
                    <p className="text-white/40 text-[11px] truncate">{t.role} · {t.company}</p>
                    <p className="text-white/30 text-[10px]">{t.city}</p>
                  </div>
                  <StarRating count={t.rating} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-1.5 bg-[#2E8BCF]'
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
