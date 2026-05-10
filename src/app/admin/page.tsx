'use client';

import { useState } from 'react';
import { Lock, Users, MessageSquare, Mail, LogOut, RefreshCw, Download, Calendar, Building2, Phone, ChevronDown } from 'lucide-react';

type Tab = 'contactos' | 'asesorias' | 'newsletter';
type AuthState = 'idle' | 'loading' | 'authed' | 'error';

interface Contact        { id: string; name: string; email: string; company: string; phone: string; message: string; created_at: string; }
interface AsesoriaReq   { id: string; name: string; email: string; company: string; phone: string; city: string; service: string; employees: string; message: string; status: string; created_at: string; }
interface NewsletterSub { id: string; email: string; created_at: string; }

interface Data { contacts: Contact[]; asesorias: AsesoriaReq[]; newsletter: NewsletterSub[]; }

function fmt(iso: string) {
  return new Date(iso).toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authState, setAuthState] = useState<AuthState>('idle');
  const [data, setData]   = useState<Data | null>(null);
  const [tab, setTab]     = useState<Tab>('asesorias');
  const [loading, setLoading] = useState(false);

  const fetchData = async (pwd: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pwd }),
      });
      if (res.status === 401) { setAuthState('error'); return; }
      const json = await res.json();
      setData(json);
      setAuthState('authed');
    } catch { setAuthState('error'); }
    finally { setLoading(false); }
  };

  const login = (e: React.FormEvent) => { e.preventDefault(); setAuthState('loading'); fetchData(password); };
  const logout = () => { setAuthState('idle'); setData(null); setPassword(''); };
  const refresh = () => fetchData(password);

  /* ── Login screen ── */
  if (authState !== 'authed') {
    return (
      <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center px-4">
        <div className="w-full max-w-sm glass rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#2E8BCF]/12 border border-[#2E8BCF]/20 flex items-center justify-center mx-auto mb-4">
              <Lock size={20} className="text-[#2E8BCF]" />
            </div>
            <h1 className="text-white font-bold text-lg">Panel Admin</h1>
            <p className="text-white/40 text-[12px] mt-1">INTECH SOLUTION · Leads & Contactos</p>
          </div>

          <form onSubmit={login} className="flex flex-col gap-4">
            <div>
              <label className="block text-white/50 text-[10px] uppercase tracking-wider font-semibold mb-1.5">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#2E8BCF]/50 transition-all"
              />
            </div>
            {authState === 'error' && (
              <p className="text-red-400 text-[12px] text-center">Contraseña incorrecta.</p>
            )}
            <button
              type="submit"
              disabled={authState === 'loading'}
              className="bg-[#2E8BCF] hover:bg-[#3d9de0] text-white font-semibold py-3 rounded-xl text-[14px] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {authState === 'loading' ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Acceder'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs: { id: Tab; label: string; icon: React.ElementType; count: number }[] = [
    { id: 'asesorias',  label: 'Asesorías',  icon: Users,         count: data?.asesorias.length  ?? 0 },
    { id: 'contactos',  label: 'Contactos',  icon: MessageSquare, count: data?.contacts.length   ?? 0 },
    { id: 'newsletter', label: 'Newsletter', icon: Mail,          count: data?.newsletter.length ?? 0 },
  ];

  /* ── Main dashboard ── */
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      {/* Topbar */}
      <div className="border-b border-white/[0.07] bg-[#080C10]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#2E8BCF]/15 border border-[#2E8BCF]/25 flex items-center justify-center">
              <Lock size={13} className="text-[#2E8BCF]" />
            </div>
            <span className="text-white font-bold text-[14px]">INTECH · Admin Panel</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={refresh} disabled={loading} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] rounded-lg text-[12px] text-white/60 hover:text-white transition-all disabled:opacity-50">
              <RefreshCw size={12} className={loading ? 'animate-spin' : ''} /> Actualizar
            </button>
            <button onClick={logout} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] hover:bg-red-500/10 border border-white/[0.08] hover:border-red-500/20 rounded-lg text-[12px] text-white/60 hover:text-red-400 transition-all">
              <LogOut size={12} /> Salir
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {tabs.map(({ id, label, icon: Icon, count }) => (
            <button key={id} onClick={() => setTab(id)} className={`glass rounded-xl p-4 text-left border transition-all ${tab === id ? 'border-[#2E8BCF]/40 bg-[#2E8BCF]/[0.06]' : 'border-white/[0.06] hover:border-[#2E8BCF]/20'}`}>
              <div className="flex items-center gap-2 mb-2">
                <Icon size={14} className={tab === id ? 'text-[#2E8BCF]' : 'text-white/40'} />
                <span className="text-white/50 text-[11px] font-semibold uppercase tracking-wider">{label}</span>
              </div>
              <p className={`text-2xl font-extrabold ${tab === id ? 'text-[#2E8BCF]' : 'text-white'}`}>{count}</p>
            </button>
          ))}
        </div>

        {/* Tab: Asesorías */}
        {tab === 'asesorias' && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white font-bold text-[15px]">Solicitudes de Asesoría</h2>
              <span className="text-white/30 text-[12px]">{data?.asesorias.length} registros</span>
            </div>
            {data?.asesorias.length === 0 && <EmptyState label="asesorías" />}
            {data?.asesorias.map(a => (
              <div key={a.id} className="glass rounded-xl p-5 border border-white/[0.06] hover:border-[#2E8BCF]/15 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-white font-semibold text-[14px]">{a.name}</p>
                    <p className="text-white/45 text-[12px] mt-0.5">{a.email} · {a.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      a.status === 'nuevo' ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20' :
                      a.status === 'contactado' ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/20' :
                      'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                    }`}>{a.status}</span>
                    <span className="text-white/25 text-[11px]">{fmt(a.created_at)}</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 text-[12px]">
                  <span className="flex items-center gap-1.5 text-white/50"><Building2 size={11} className="text-[#2E8BCF]" />{a.company}</span>
                  <span className="flex items-center gap-1.5 text-white/50"><Phone size={11} className="text-[#2E8BCF]" />{a.city} · {a.employees}</span>
                  <span className="flex items-center gap-1.5 text-white/50"><ChevronDown size={11} className="text-[#2E8BCF]" />{a.service || '—'}</span>
                </div>
                {a.message && <p className="mt-3 text-white/40 text-[12px] leading-relaxed border-t border-white/[0.05] pt-3">"{a.message}"</p>}
              </div>
            ))}
          </div>
        )}

        {/* Tab: Contactos */}
        {tab === 'contactos' && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white font-bold text-[15px]">Mensajes de Contacto</h2>
              <span className="text-white/30 text-[12px]">{data?.contacts.length} registros</span>
            </div>
            {data?.contacts.length === 0 && <EmptyState label="contactos" />}
            {data?.contacts.map(c => (
              <div key={c.id} className="glass rounded-xl p-5 border border-white/[0.06] hover:border-[#2E8BCF]/15 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <p className="text-white font-semibold text-[14px]">{c.name}</p>
                    <p className="text-white/45 text-[12px]">{c.email} {c.phone && `· ${c.phone}`} {c.company && `· ${c.company}`}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={11} className="text-white/30" />
                    <span className="text-white/30 text-[11px]">{fmt(c.created_at)}</span>
                  </div>
                </div>
                <p className="text-white/55 text-[13px] leading-relaxed border-t border-white/[0.05] pt-3">"{c.message}"</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Newsletter */}
        {tab === 'newsletter' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white font-bold text-[15px]">Suscriptores Newsletter</h2>
              <div className="flex items-center gap-2">
                <span className="text-white/30 text-[12px]">{data?.newsletter.length} suscriptores</span>
                <button
                  onClick={() => {
                    const csv = 'Email,Fecha\n' + (data?.newsletter ?? []).map(n => `${n.email},${fmt(n.created_at)}`).join('\n');
                    const a = document.createElement('a'); a.href = 'data:text/csv,' + encodeURIComponent(csv); a.download = 'newsletter.csv'; a.click();
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[11px] text-white/60 hover:text-white transition-all"
                >
                  <Download size={11} /> Exportar CSV
                </button>
              </div>
            </div>
            {data?.newsletter.length === 0 && <EmptyState label="suscriptores" />}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {data?.newsletter.map(n => (
                <div key={n.id} className="glass rounded-xl px-4 py-3 border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Mail size={13} className="text-[#2E8BCF] shrink-0" />
                    <span className="text-white/70 text-[13px] truncate">{n.email}</span>
                  </div>
                  <span className="text-white/25 text-[10px] shrink-0">{fmt(n.created_at)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="glass rounded-2xl p-10 text-center border border-white/[0.05]">
      <p className="text-white/30 text-[14px]">No hay {label} aún.</p>
    </div>
  );
}
