'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Monitor, Wrench, Apple, Server, Camera, Wifi,
  Network, Phone, Cog, TrendingUp, Database, Shield,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Monitor,
    title: 'Soporte IT Empresarial',
    description: 'Mesa de ayuda, gestión de incidentes y soporte técnico remoto y presencial para toda tu infraestructura.',
    tag: 'IT Support',
    color: '#2E8BCF',
  },
  {
    icon: Wrench,
    title: 'Reparación de Equipos',
    description: 'Diagnóstico y reparación de computadores, portátiles y estaciones de trabajo con garantía de servicio.',
    tag: 'Hardware',
    color: '#3B82F6',
  },
  {
    icon: Apple,
    title: 'Mantenimiento Mac & Windows',
    description: 'Actualizaciones, limpieza de sistema, optimización de rendimiento y gestión de licencias corporativas.',
    tag: 'Software',
    color: '#60A5FA',
  },
  {
    icon: Server,
    title: 'Administración de Servidores',
    description: 'Configuración, monitoreo proactivo, backup y mantenimiento de servidores físicos y virtuales.',
    tag: 'Infraestructura',
    color: '#2E8BCF',
  },
  {
    icon: Camera,
    title: 'Instalación CCTV',
    description: 'Sistemas de videovigilancia analógica e IP de alta definición con monitoreo remoto 24/7.',
    tag: 'Seguridad',
    color: '#1D4ED8',
  },
  {
    icon: Shield,
    title: 'Cámaras IP Inteligentes',
    description: 'Soluciones de vigilancia con inteligencia artificial, detección de movimiento y análisis de video.',
    tag: 'IA & Video',
    color: '#2563EB',
  },
  {
    icon: Network,
    title: 'Cableado Estructurado',
    description: 'Diseño e instalación de infraestructura de cableado Cat6/Cat6A certificada bajo estándares TIA/EIA.',
    tag: 'Redes',
    color: '#3B82F6',
  },
  {
    icon: Wifi,
    title: 'Redes e Internet',
    description: 'Diseño, implementación y optimización de redes LAN/WAN con tecnología Wi-Fi 6 y seguridad perimetral.',
    tag: 'Conectividad',
    color: '#2E8BCF',
  },
  {
    icon: Phone,
    title: 'Telefonía IP',
    description: 'Centralitas VoIP, videoconferencia empresarial y sistemas de comunicación unificada para tu empresa.',
    tag: 'Comunicaciones',
    color: '#60A5FA',
  },
  {
    icon: Cog,
    title: 'Automatización de Procesos',
    description: 'RPA, integraciones de sistemas y flujos de trabajo inteligentes que eliminan tareas repetitivas.',
    tag: 'Automatización',
    color: '#2E8BCF',
  },
  {
    icon: TrendingUp,
    title: 'Transformación Digital',
    description: 'Estrategia y ejecución de proyectos de digitalización para modernizar tu empresa de forma integral.',
    tag: 'Digital',
    color: '#3B82F6',
  },
  {
    icon: Database,
    title: 'Optimización de Procesos',
    description: 'Análisis, rediseño y mejora continua de procesos empresariales apoyados en tecnología de punta.',
    tag: 'Consultoría',
    color: '#60A5FA',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="servicios"
      className="relative py-24 sm:py-32 bg-brand-black"
    >
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2E8BCF]/[0.04] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="section-label">Nuestros Servicios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance"
          >
            Tecnología de élite para{' '}
            <span className="text-gradient">cada necesidad</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-white/50 text-base leading-relaxed"
          >
            Cubrimos todo el ecosistema tecnológico de tu empresa, desde la infraestructura
            física hasta la inteligencia de negocio.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  tag,
  color,
}: (typeof SERVICES)[number]) {
  return (
    <motion.div
      variants={item}
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 group cursor-default"
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        <Icon size={20} style={{ color }} />
      </div>

      {/* Tag */}
      <span
        className="text-[10px] font-semibold uppercase tracking-[0.14em] w-fit px-2.5 py-1 rounded-full"
        style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
      >
        {tag}
      </span>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-white font-semibold text-[15px] leading-snug group-hover:text-[#64B5F6] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/45 text-[13px] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom line on hover */}
      <div
        className="h-[1.5px] w-0 group-hover:w-full rounded-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </motion.div>
  );
}
