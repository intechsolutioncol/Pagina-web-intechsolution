'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Zap, Shield, Globe } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const WHATSAPP = 'https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20tecnol%C3%B3gica';

const FLOATING_TAGS = [
  { icon: Zap,    label: 'Automatización',   delay: 0.2, pos: 'top-[22%] right-[8%]',    size: 'sm' },
  { icon: Shield, label: 'Ciberseguridad',   delay: 0.4, pos: 'top-[55%] left-[5%]',     size: 'sm' },
  { icon: Globe,  label: 'Cloud & Redes',    delay: 0.6, pos: 'bottom-[20%] right-[10%]', size: 'sm' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-black"
      id="inicio"
    >
      {/* ── Particle Network ── */}
      <ParticleBackground />

      {/* ── Radial hero glow ── */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#2E8BCF]/[0.04] blur-[120px] pointer-events-none" />

      {/* ── Grid bg ── */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* ── Scan line ── */}
      <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="scan-line" />
      </div>

      {/* ── Floating Tags ── */}
      {FLOATING_TAGS.map(({ icon: Icon, label, delay, pos }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1.2, duration: 0.6 }}
          className={`absolute hidden xl:flex items-center gap-2 glass px-3.5 py-2 rounded-xl animate-float ${pos}`}
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon size={13} className="text-[#2E8BCF]" />
          <span className="text-[11px] font-medium text-white/70">{label}</span>
        </motion.div>
      ))}

      {/* ── Main Content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20 sm:pt-36"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <span className="section-label">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2E8BCF] animate-pulse" />
            Transformación Digital · Colombia
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-extrabold leading-[1.05] tracking-tight text-balance">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-1">
              Impulsamos empresas
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient">
              con tecnología inteligente
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-center mt-7 text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed text-balance"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Soporte IT de clase empresarial, infraestructura de redes, vigilancia inteligente y
          automatización de procesos para llevar tu negocio al siguiente nivel.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col xs:flex-row items-center justify-center gap-3 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-[15px] w-full xs:w-auto justify-center"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicitar Asesoría Gratuita
            <ArrowRight size={16} />
          </motion.a>

          <motion.a
            href="#servicios"
            className="btn-ghost inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-[15px] w-full xs:w-auto justify-center"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Play size={14} className="fill-[#2E8BCF] text-[#2E8BCF]" />
            Ver Nuestros Servicios
          </motion.a>
        </motion.div>

        {/* Social Proof Strip */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          {[
            ['500+', 'Empresas atendidas'],
            ['99.9%', 'Uptime garantizado'],
            ['< 4 h', 'Tiempo de respuesta'],
            ['8+', 'Años de experiencia'],
          ].map(([num, label]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-[#2E8BCF] font-bold text-base">{num}</span>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#2E8BCF] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />
    </section>
  );
}
