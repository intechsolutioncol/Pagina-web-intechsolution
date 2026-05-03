'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Wifi, Camera, Server, ShieldCheck } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const WHATSAPP = 'https://wa.me/573003684990?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20tecnol%C3%B3gica';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
      id="inicio"
    >
      <ParticleBackground />
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="scan-line" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-20 sm:pt-32 grid lg:grid-cols-2 gap-14 xl:gap-20 items-center"
      >
        {/* ── LEFT: Text Content ── */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7"
          >
            <span className="section-label">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2E8BCF] animate-pulse" />
              Empresa Tecnológica · Colombia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[1.06] tracking-tight text-balance"
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white">
              Impulsamos empresas
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gradient mt-1">
              con tecnología inteligente.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-[15px] sm:text-[17px] text-white/55 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            Soporte IT, CCTV, redes estructuradas, telefonía IP y transformación
            digital para empresas colombianas que quieren crecer sin límites.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 mt-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
          >
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-[15px] justify-center"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Solicitar Asesoría Gratuita
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#servicios"
              className="btn-ghost inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-[15px] justify-center"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Play size={13} className="fill-[#2E8BCF] text-[#2E8BCF]" />
              Ver Servicios
            </motion.a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="mt-12 flex flex-wrap gap-x-7 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.72 }}
          >
            {[
              ['500+', 'Empresas atendidas'],
              ['99.9%', 'Uptime'],
              ['< 4h',  'Respuesta'],
              ['8+',    'Años exp.'],
            ].map(([val, lbl]) => (
              <div key={lbl} className="flex items-baseline gap-1.5">
                <span className="text-[#2E8BCF] font-bold text-[17px]">{val}</span>
                <span className="text-white/35 text-[12px]">{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Tech Visual ── */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <TechDashboardVisual />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros-empresa"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 hover:text-[#2E8BCF] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-[9px] uppercase tracking-[0.22em] font-semibold">Explorar</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ChevronDown size={17} />
        </motion.div>
      </motion.a>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />
    </section>
  );
}

/* ── Tech Dashboard Visual ── */
function TechDashboardVisual() {
  return (
    <div className="relative w-full max-w-[520px]">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-3xl bg-[#2E8BCF]/10 blur-3xl scale-110" />

      {/* Main monitor frame */}
      <div className="relative glass rounded-3xl border border-[#2E8BCF]/20 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">

        {/* Title bar */}
        <div className="bg-white/[0.03] border-b border-white/[0.06] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-white/25 text-[10px] font-medium tracking-wider">INTECH SOLUTION · Panel de Control</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-[9px] font-semibold">EN LÍNEA</span>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-5">

          {/* CCTV Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Camera size={13} className="text-[#2E8BCF]" />
                <span className="text-white/60 text-[11px] font-semibold uppercase tracking-wider">Cámaras IP — En vivo</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-semibold">● 8/8 activas</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { lbl: 'Entrada Ppal', status: 'ok' },
                { lbl: 'Recepción',   status: 'ok' },
                { lbl: 'Parqueadero', status: 'ok' },
                { lbl: 'Bodega',      status: 'ok' },
                { lbl: 'Pasillo 1',   status: 'ok' },
                { lbl: 'Oficinas',    status: 'ok' },
                { lbl: 'Servidor',    status: 'ok' },
                { lbl: 'Exterior',    status: 'ok' },
              ].map(({ lbl, status }) => (
                <div key={lbl} className="relative aspect-video bg-[#03263A]/80 rounded-lg overflow-hidden border border-[#2E8BCF]/15 flex flex-col items-center justify-center gap-1 group">
                  <CameraFeedSVG />
                  <span className="text-white/40 text-[7px] font-medium leading-none">{lbl}</span>
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Network & Server Status */}
          <div className="grid grid-cols-2 gap-3">
            {/* Network */}
            <div className="glass rounded-xl p-3.5">
              <div className="flex items-center gap-2 mb-3">
                <Wifi size={12} className="text-[#2E8BCF]" />
                <span className="text-white/60 text-[10px] font-semibold uppercase tracking-wider">Red Empresarial</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  { name: 'Switch Core',   ping: '2 ms',  ok: true },
                  { name: 'Router WAN',    ping: '8 ms',  ok: true },
                  { name: 'AP Piso 1',     ping: '5 ms',  ok: true },
                  { name: 'AP Piso 2',     ping: '4 ms',  ok: true },
                  { name: 'VPN Sitio B',   ping: '22 ms', ok: true },
                ].map(({ name, ping, ok }) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${ok ? 'bg-emerald-400' : 'bg-red-400'}`} />
                      <span className="text-white/50 text-[9px]">{name}</span>
                    </div>
                    <span className="text-[#2E8BCF] text-[9px] font-mono font-bold">{ping}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Server */}
            <div className="glass rounded-xl p-3.5">
              <div className="flex items-center gap-2 mb-3">
                <Server size={12} className="text-[#2E8BCF]" />
                <span className="text-white/60 text-[10px] font-semibold uppercase tracking-wider">Servidores</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  { name: 'ERP Principal',   cpu: '34%',  ok: true },
                  { name: 'File Server',     cpu: '18%',  ok: true },
                  { name: 'AD / DNS',        cpu: '12%',  ok: true },
                  { name: 'Backup Nightly',  cpu: '67%',  ok: true },
                  { name: 'NVR Cámaras',     cpu: '45%',  ok: true },
                ].map(({ name, cpu, ok }) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${ok ? 'bg-emerald-400' : 'bg-red-400'}`} />
                      <span className="text-white/50 text-[9px]">{name}</span>
                    </div>
                    <span className="text-white/40 text-[9px] font-mono">{cpu}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security alerts */}
          <div className="glass rounded-xl p-3.5">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={12} className="text-emerald-400" />
              <span className="text-white/60 text-[10px] font-semibold uppercase tracking-wider">Alertas de Seguridad</span>
              <span className="ml-auto text-emerald-400 text-[9px] font-semibold">Sin incidentes</span>
            </div>
            <div className="flex gap-3">
              {[
                { label: 'Firewall',     val: 'Activo',    color: 'emerald' },
                { label: 'Antivirus',    val: 'Al día',    color: 'emerald' },
                { label: 'Backup',       val: '03:00 AM',  color: 'blue' },
                { label: 'Accesos hoy', val: '47',        color: 'blue' },
              ].map(({ label, val, color }) => (
                <div key={label} className="flex-1 text-center">
                  <p className={`font-bold text-[11px] ${color === 'emerald' ? 'text-emerald-400' : 'text-[#2E8BCF]'}`}>{val}</p>
                  <p className="text-white/30 text-[8px] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -top-4 -right-6 glass-blue px-3.5 py-2 rounded-xl border border-[#2E8BCF]/25 shadow-lg"
      >
        <p className="text-[#2E8BCF] font-bold text-[13px] leading-none">99.9%</p>
        <p className="text-white/40 text-[9px] mt-0.5">Uptime garantizado</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-4 -left-6 glass-blue px-3.5 py-2 rounded-xl border border-[#2E8BCF]/25 shadow-lg"
      >
        <p className="text-emerald-400 font-bold text-[13px] leading-none">24/7</p>
        <p className="text-white/40 text-[9px] mt-0.5">Monitoreo activo</p>
      </motion.div>
    </div>
  );
}

function CameraFeedSVG() {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" rx="2" fill="#03263A" />
      {/* Scene lines suggesting perspective */}
      <line x1="14" y1="10" x2="2" y2="18" stroke="#2E8BCF" strokeWidth="0.4" strokeOpacity="0.3"/>
      <line x1="14" y1="10" x2="26" y2="18" stroke="#2E8BCF" strokeWidth="0.4" strokeOpacity="0.3"/>
      <line x1="14" y1="10" x2="2" y2="2" stroke="#2E8BCF" strokeWidth="0.4" strokeOpacity="0.3"/>
      <line x1="14" y1="10" x2="26" y2="2" stroke="#2E8BCF" strokeWidth="0.4" strokeOpacity="0.3"/>
      {/* Person silhouette */}
      <circle cx="14" cy="8" r="2.5" fill="#2E8BCF" fillOpacity="0.5"/>
      <path d="M10 17 Q14 13 18 17" stroke="#2E8BCF" strokeWidth="1" strokeOpacity="0.5" fill="none"/>
      {/* Grid overlay */}
      <line x1="9.3" y1="0" x2="9.3" y2="20" stroke="#2E8BCF" strokeWidth="0.3" strokeOpacity="0.15"/>
      <line x1="18.7" y1="0" x2="18.7" y2="20" stroke="#2E8BCF" strokeWidth="0.3" strokeOpacity="0.15"/>
      <line x1="0" y1="6.7" x2="28" y2="6.7" stroke="#2E8BCF" strokeWidth="0.3" strokeOpacity="0.15"/>
      <line x1="0" y1="13.3" x2="28" y2="13.3" stroke="#2E8BCF" strokeWidth="0.3" strokeOpacity="0.15"/>
    </svg>
  );
}
