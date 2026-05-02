'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const WHATSAPP = 'https://wa.me/573001234567?text=Hola%2C%20quiero%20evolucionar%20tecnol%C3%B3gicamente%20mi%20empresa';

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="contacto"
      className="relative py-32 sm:py-40 bg-[#080C10] overflow-hidden"
    >
      {/* Particle background */}
      <ParticleBackground />

      {/* Layered glows */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2E8BCF]/[0.08] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#03263A]/80 blur-[80px] rounded-full pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      {/* Pulsing ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#2E8BCF]/[0.12] animate-ping-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#2E8BCF]/[0.06] animate-ping-slow pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="section-label">
            <Sparkles size={12} />
            El momento es ahora
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-extrabold leading-[1.08] tracking-tight text-balance"
        >
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2">
            Tu empresa necesita más que
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2">
            soporte técnico.
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient">
            Necesita evolución tecnológica.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="mt-8 text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Agenda tu asesoría gratuita hoy y descubre cómo podemos llevar tu negocio
          al siguiente nivel con tecnología inteligente, sin complicaciones y con resultados medibles.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-3 px-8 py-4 rounded-2xl text-[15px] font-semibold w-full sm:w-auto justify-center glow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={18} />
            Hablar por WhatsApp
            <ArrowRight size={16} />
          </motion.a>

          <motion.a
            href="mailto:info@intechsolution.co"
            className="btn-ghost flex items-center gap-3 px-8 py-4 rounded-2xl text-[15px] w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Enviar un correo
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-[12px] text-white/30"
        >
          {[
            'Sin costo de asesoría inicial',
            'Respuesta en menos de 2 horas',
            'Sin contratos de permanencia',
          ].map((t) => (
            <div key={t} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
