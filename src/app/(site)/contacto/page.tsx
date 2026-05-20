'use client'
import { useState } from 'react'

const queryTypes = ['Pedido de agua', 'Consulta de producto', 'Dispensadores', 'Otro'] as const

export default function ContactoPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', phone: '', email: '', queryType: '', message: '', consent: false })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const waPhone = process.env.NEXT_PUBLIC_WHATSAPP ?? ''
  const waMsg = encodeURIComponent('Hola! Quisiera contactarlos.')
  const wa = `https://wa.me/${waPhone}?text=${waMsg}`

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-32 text-white text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #060D2C 0%, #07102C 50%, #0D1B52 100%)' }}
      >
        {/* Caustic blobs */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,196,192,0.08) 0%, transparent 70%)', top: '-5%', right: '8%', filter: 'blur(55px)', animation: 'caustic-a 8s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(44,80,200,0.09) 0%, transparent 70%)', bottom: '5%', left: '10%', filter: 'blur(45px)', animation: 'caustic-b 10s ease-in-out infinite' }} />
        </div>

        {/* Concentric rings */}
        {[200, 140, 80].map((size, i) => (
          <div key={i} aria-hidden="true" style={{
            position: 'absolute', left: '8%', top: '50%',
            width: size, height: size, borderRadius: '50%',
            border: `1.5px solid rgba(77,196,192,${0.2 - i * 0.04})`,
            transform: 'translateY(-50%)',
            animation: `vortex-spin ${14 + i * 4}s linear infinite ${i % 2 ? 'reverse' : ''}`,
            pointerEvents: 'none',
          }} />
        ))}

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-4">Escríbenos</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Contacto</h1>
          <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto 24px', display: 'block' }}>
            <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.7 }}>
            Estamos listos para atenderte. Elige el canal que prefieras.
          </p>
        </div>

        {/* Bottom wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#07102C"/>
          </svg>
        </div>
      </section>

      {/* ── Contact section ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #07102C 0%, #0D1B52 60%, #1A2E78 100%)' }}
      >
        {/* Deep glow */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,212,0.05) 0%, transparent 70%)', top: '10%', right: '10%', filter: 'blur(60px)' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form card */}
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(77,196,192,0.2)',
              borderRadius: '2rem',
              padding: '2.5rem',
            }}>
              <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 22 }}>Envíanos un mensaje</h2>

              {status === 'ok' ? (
                <div style={{ textAlign: 'center', paddingTop: 48, paddingBottom: 48 }}>
                  <svg width="72" height="90" viewBox="0 0 24 30" style={{ margin: '0 auto 20px', display: 'block', filter: 'drop-shadow(0 0 14px rgba(77,196,192,0.7))' }}>
                    <path d="M12 1C12 1 2 13 2 20A10 10 0 0 0 22 20C22 13 12 1 12 1Z" fill="rgba(77,196,192,0.3)" stroke="#4DC4C0" strokeWidth="1.2"/>
                    <path d="M9 20 L11.5 22.5 L15 18" stroke="#4DC4C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <p className="font-display font-bold text-white mb-2" style={{ fontSize: 22 }}>¡Mensaje enviado!</p>
                  <p style={{ color: 'rgba(255,255,255,0.65)' }}>Nos pondremos en contacto contigo pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nombre *</label>
                      <input
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(77,196,192,0.25)', borderRadius: 12, padding: '12px 16px', fontSize: 14, color: 'white', outline: 'none', boxSizing: 'border-box' }}
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Teléfono *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(77,196,192,0.25)', borderRadius: 12, padding: '12px 16px', fontSize: 14, color: 'white', outline: 'none', boxSizing: 'border-box' }}
                        placeholder="+56 9 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email (opcional)</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(77,196,192,0.25)', borderRadius: 12, padding: '12px 16px', fontSize: 14, color: 'white', outline: 'none', boxSizing: 'border-box' }}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tipo de consulta *</label>
                    <select
                      required
                      value={form.queryType}
                      onChange={e => setForm(f => ({ ...f, queryType: e.target.value }))}
                      style={{ width: '100%', background: 'rgba(13,27,82,0.9)', border: '1px solid rgba(77,196,192,0.25)', borderRadius: 12, padding: '12px 16px', fontSize: 14, color: 'white', outline: 'none', boxSizing: 'border-box' }}
                    >
                      <option value="">Selecciona...</option>
                      {queryTypes.map(q => <option key={q} value={q}>{q}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mensaje *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(77,196,192,0.25)', borderRadius: 12, padding: '12px 16px', fontSize: 14, color: 'white', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                    />
                  </div>

                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
                      required
                      style={{ marginTop: 2, accentColor: '#4DC4C0' }}
                    />
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                      Acepto el uso de mis datos para ser contactado por Mi Sur.
                    </span>
                  </label>

                  {status === 'error' && (
                    <p style={{ color: '#f87171', fontSize: 13 }}>Ocurrió un error. Por favor intenta nuevamente.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-ripple"
                    style={{
                      width: '100%', padding: '14px', borderRadius: 14,
                      background: 'linear-gradient(135deg, #4DC4C0, #2C50C8)',
                      color: 'white', fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(77,196,192,0.3)',
                      opacity: status === 'sending' ? 0.6 : 1,
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* WhatsApp card */}
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none',
                  background: 'rgba(77,196,192,0.1)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(77,196,192,0.35)',
                  borderRadius: '1.5rem', padding: '1.5rem',
                  transition: 'background 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = 'rgba(77,196,192,0.2)'
                  el.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = 'rgba(77,196,192,0.1)'
                  el.style.transform = ''
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#4DC4C0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 20px rgba(77,196,192,0.4)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.512 5.83L0 24l6.334-1.49A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.37l-.359-.214-3.757.884.937-3.657-.234-.376A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'white', marginBottom: 2 }}>WhatsApp — Canal preferido</p>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>Respuesta inmediata</p>
                </div>
              </a>

              {/* Email */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 16,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1.5rem', padding: '1.5rem',
              }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(44,80,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(44,80,200,0.4)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6A90E8" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'white', marginBottom: 2 }}>Correo electrónico</p>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>contacto@aguasmisur.cl</p>
                </div>
              </div>

              {/* Hours */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 16,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1.5rem', padding: '1.5rem',
              }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(44,80,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(44,80,200,0.4)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6A90E8" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'white', marginBottom: 2 }}>Horario de atención</p>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>Lun–Vie 8:00–18:00 / Sáb 9:00–13:00</p>
                </div>
              </div>

              {/* Quick order card */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(77,196,192,0.15), rgba(44,80,200,0.15))',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(77,196,192,0.3)',
                borderRadius: '1.5rem', padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 8px 32px rgba(77,196,192,0.1)',
              }}>
                <p style={{ color: '#4DC4C0', fontWeight: 700, marginBottom: 8, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Pedido rápido</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 20, lineHeight: 1.6 }}>
                  El canal más rápido es WhatsApp. ¡Te respondemos al instante!
                </p>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ripple pulse-glow"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'linear-gradient(135deg, #4DC4C0, #2C50C8)',
                    color: 'white', fontWeight: 700, fontSize: 14,
                    padding: '12px 28px', borderRadius: 99,
                    textDecoration: 'none',
                  }}
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0,50 C360,10 1080,70 1440,30 L1440,80 L0,80 Z" fill="#0a0f2a"/>
          </svg>
        </div>
      </section>
    </>
  )
}
