'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Monitor, Wrench, Apple, Server, Camera, Shield,
  Network, Wifi, Phone, Cog, TrendingUp, Database,
  ChevronRight,
} from 'lucide-react';

const CATEGORIES = [
  {
    id: 'infraestructura',
    label: 'Infraestructura IT',
    color: '#2E8BCF',
    services: [
      {
        icon: Monitor,
        title: 'Soporte IT Empresarial',
        description:
          'Mesa de ayuda, gestión de incidentes y soporte técnico remoto y presencial. Atención en menos de 4 horas para clientes con contrato de mantenimiento.',
        detail: 'Modalidad: Remoto / Presencial',
      },
      {
        icon: Wrench,
        title: 'Reparación de Computadores',
        description:
          'Diagnóstico con software especializado, cambio de piezas originales, recuperación de datos y limpieza técnica profunda. Garantía por escrito en cada reparación.',
        detail: 'Garantía: 3 a 6 meses',
      },
      {
        icon: Apple,
        title: 'Mantenimiento Mac & Windows',
        description:
          'Actualización de sistema operativo, limpieza de malware, optimización de rendimiento y gestión de licencias corporativas Microsoft 365 / macOS.',
        detail: 'Soporte: Mac, Windows 10/11, Server',
      },
      {
        icon: Server,
        title: 'Administración de Servidores',
        description:
          'Configuración, monitoreo proactivo con alertas 24/7, backup automático y mantenimiento de servidores físicos, virtuales y en la nube.',
        detail: 'Plataformas: Windows Server, Linux, VMware',
      },
    ],
  },
  {
    id: 'seguridad',
    label: 'Seguridad & Conectividad',
    color: '#1D4ED8',
    services: [
      {
        icon: Camera,
        title: 'Instalación CCTV Analógico e IP',
        description:
          'Diseño e instalación de sistemas de videovigilancia HD/4K analógicos e IP. Cámaras fijas, domo, PTZ, térmicas e interior/exterior con protección IP66/IP67.',
        detail: 'Marcas: Hikvision · Dahua · Axis',
      },
      {
        icon: Shield,
        title: 'Cámaras IP con Inteligencia Artificial',
        description:
          'Reconocimiento facial, detección de vehículos, análisis de comportamiento y conteo de personas. Monitoreo remoto desde smartphone las 24 horas.',
        detail: 'Función: Deep Learning · IA integrada',
      },
      {
        icon: Network,
        title: 'Cableado Estructurado',
        description:
          'Diseño, instalación y certificación de redes Cat6/Cat6A bajo normas TIA-568 y ISO/IEC 11801. Ductos, bandejas, patch panels y etiquetado profesional.',
        detail: 'Certificado: Fluke · Panduit · AMP',
      },
      {
        icon: Wifi,
        title: 'Redes LAN/WAN & Wi-Fi 6',
        description:
          'Diseño e implementación de redes corporativas con VLANs, seguridad perimetral, firewall Fortinet/pfSense y cobertura Wi-Fi 6 para toda la empresa.',
        detail: 'Equipos: Cisco · Ubiquiti · MikroTik',
      },
    ],
  },
  {
    id: 'comunicaciones',
    label: 'Comunicaciones',
    color: '#0891B2',
    services: [
      {
        icon: Phone,
        title: 'Telefonía IP & VoIP',
        description:
          'Instalación y configuración de centralitas IP (Asterisk / FreePBX / 3CX), teléfonos SIP, videoconferencia empresarial y troncales SIP para ahorro de hasta 60% en llamadas.',
        detail: 'Plataformas: Asterisk · 3CX · Teams Phone',
      },
    ],
  },
  {
    id: 'digital',
    label: 'Transformación Digital',
    color: '#7C3AED',
    services: [
      {
        icon: Cog,
        title: 'Automatización de Procesos (RPA)',
        description:
          'Implementamos robots de software que ejecutan tareas repetitivas: facturación, inventarios, reportes, envío de correos, sincronización de datos entre sistemas.',
        detail: 'Herramientas: Power Automate · n8n · Zapier',
      },
      {
        icon: TrendingUp,
        title: 'Transformación Digital Integral',
        description:
          'Acompañamos a tu empresa en la digitalización de procesos, adopción de software ERP/CRM, migración a la nube y cultura de datos para decisiones más rápidas.',
        detail: 'Metodología: Design Thinking + Agile',
      },
      {
        icon: Database,
        title: 'Optimización & Business Intelligence',
        description:
          'Dashboards ejecutivos en tiempo real con Power BI, análisis de KPIs, trazabilidad de procesos y reportes automáticos para una gestión empresarial más inteligente.',
        detail: 'Plataformas: Power BI · Tableau · Grafana',
      },
    ],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.065 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } } };

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="servicios" className="relative py-24 sm:py-32 bg-brand-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#2E8BCF]/[0.035] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex justify-center mb-5">
            <span className="section-label">Nuestros Servicios</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
            Tecnología de élite para{' '}
            <span className="text-gradient">cada necesidad empresarial</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 text-white/50 text-base leading-relaxed">
            Cubrimos todo el ecosistema tecnológico de tu empresa — desde el cable hasta la nube.
          </motion.p>
        </div>

        {/* Category Sections */}
        {CATEGORIES.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: catIdx * 0.12 }}
            className="mb-14 last:mb-0"
          >
            {/* Category label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 max-w-[40px]" style={{ background: cat.color }} />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full"
                style={{ color: cat.color, background: `${cat.color}12`, border: `1px solid ${cat.color}25` }}
              >
                {cat.label}
              </span>
              <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${cat.color}60, transparent)` }} />
            </div>

            {/* Service cards */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className={`grid grid-cols-1 sm:grid-cols-2 ${cat.services.length >= 4 ? 'lg:grid-cols-4' : cat.services.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-2xl'} gap-4`}
            >
              {cat.services.map((svc) => (
                <ServiceCard key={svc.title} {...svc} accentColor={cat.color} />
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div className="glass rounded-2xl px-8 py-8 inline-flex flex-col sm:flex-row items-center gap-5">
            <div className="text-left">
              <p className="text-white font-semibold text-[15px]">¿No encuentras lo que necesitas?</p>
              <p className="text-white/45 text-[13px] mt-0.5">Contáctanos — ofrecemos soluciones personalizadas.</p>
            </div>
            <a
              href="https://wa.me/573003684990"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] shrink-0"
            >
              Consultar ahora
              <ChevronRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  detail,
  accentColor,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  detail: string;
  accentColor: string;
}) {
  return (
    <motion.div
      variants={item}
      className="glass-card rounded-2xl p-5 flex flex-col gap-3.5 group cursor-default h-full"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}28` }}
      >
        <Icon size={18} style={{ color: accentColor }} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-white font-semibold text-[14px] leading-snug group-hover:text-[#64B5F6] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/45 text-[12.5px] leading-relaxed flex-1">
          {description}
        </p>
      </div>

      {/* Detail badge */}
      <span
        className="text-[9.5px] font-medium px-2.5 py-1 rounded-full w-fit"
        style={{ background: `${accentColor}10`, color: accentColor, border: `1px solid ${accentColor}20` }}
      >
        {detail}
      </span>

      {/* Bottom accent */}
      <div
        className="h-[1.5px] w-0 group-hover:w-full rounded-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
      />
    </motion.div>
  );
}
