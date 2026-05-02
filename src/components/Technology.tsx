'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cloud, Cpu, ShieldCheck, Wifi, Bot, Phone, BarChart2, Lock } from 'lucide-react';

const TECH_AREAS = [
  {
    icon: Cloud,
    title: 'Cloud & Servidores',
    desc: 'Infraestructura híbrida, migración a la nube, virtualización VMware/Hyper-V y gestión de servidores on-premise.',
    techs: ['Microsoft Azure', 'VMware', 'Hyper-V', 'Windows Server', 'Linux'],
    color: '#2E8BCF',
  },
  {
    icon: Wifi,
    title: 'Redes Empresariales',
    desc: 'Diseño e implementación de redes de alto rendimiento con equipos enterprise y seguridad de perímetro.',
    techs: ['Cisco', 'Ubiquiti', 'MikroTik', 'Wi-Fi 6', 'VLAN'],
    color: '#3B82F6',
  },
  {
    icon: ShieldCheck,
    title: 'Ciberseguridad',
    desc: 'Protección integral con firewalls NGFW, sistemas de detección de intrusos y gestión de vulnerabilidades.',
    techs: ['Fortinet', 'pfSense', 'Sophos', 'Zero Trust', 'VPN'],
    color: '#60A5FA',
  },
  {
    icon: Cpu,
    title: 'Videovigilancia IP',
    desc: 'Sistemas CCTV analíticos con IA, reconocimiento facial, detección de comportamiento y grabación NVR/DVR.',
    techs: ['Hikvision', 'Dahua', 'Axis', 'IP PoE', 'NVR 4K'],
    color: '#2E8BCF',
  },
  {
    icon: Bot,
    title: 'IA & Automatización',
    desc: 'Robótica de procesos (RPA), chatbots empresariales, análisis predictivo y automatización de flujos con IA.',
    techs: ['Power Automate', 'Zapier', 'n8n', 'Make', 'OpenAI API'],
    color: '#3B82F6',
  },
  {
    icon: Phone,
    title: 'Telefonía IP & UC',
    desc: 'Centralitas Asterisk/FreePBX, Microsoft Teams Phone, videoconferencia empresarial y comunicaciones unificadas.',
    techs: ['Asterisk', 'FreePBX', 'Teams', 'SIP', '3CX'],
    color: '#60A5FA',
  },
  {
    icon: BarChart2,
    title: 'Business Intelligence',
    desc: 'Dashboards ejecutivos, KPIs en tiempo real y análisis de datos para una toma de decisiones más rápida.',
    techs: ['Power BI', 'Tableau', 'Grafana', 'SQL', 'Excel Avanzado'],
    color: '#2E8BCF',
  },
  {
    icon: Lock,
    title: 'Control de Acceso',
    desc: 'Sistemas biométricos, control de acceso RFID, registros de visitantes y gestión de identidades empresariales.',
    techs: ['ZKTeco', 'Suprema', 'HID', 'RFID', 'Biometría'],
    color: '#3B82F6',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Technology() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="tecnologia"
      className="relative py-24 sm:py-32 bg-[#080C10] overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#2E8BCF]/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="section-label">Stack Tecnológico</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance"
          >
            Tecnología de vanguardia al{' '}
            <span className="text-gradient">servicio de tu empresa</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-white/50 text-base leading-relaxed"
          >
            Trabajamos con las mejores marcas y plataformas del mercado para garantizar
            soluciones robustas, escalables y de alto rendimiento.
          </motion.p>
        </div>

        {/* Tech Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {TECH_AREAS.map((area) => (
            <motion.div
              key={area.title}
              variants={item}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${area.color}18`, border: `1px solid ${area.color}30` }}
              >
                <area.icon size={20} style={{ color: area.color }} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-white font-semibold text-[14px] leading-snug group-hover:text-[#64B5F6] transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-white/40 text-[12.5px] leading-relaxed">
                  {area.desc}
                </p>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {area.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9.5px] font-semibold px-2 py-1 rounded-full"
                    style={{
                      background: `${area.color}12`,
                      color: area.color,
                      border: `1px solid ${area.color}20`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
