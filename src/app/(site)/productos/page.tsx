'use client'
import { useState } from 'react'
import { products, ProductCategory } from '@/data/products'
import { getOrderLink } from '@/lib/whatsapp'

const categories: ('Todos' | ProductCategory)[] = ['Todos', 'Bidones', 'Accesorios']

export default function ProductosPage() {
  const [active, setActive] = useState<'Todos' | ProductCategory>('Todos')
  const filtered = active === 'Todos' ? products : products.filter(p => p.category === active)

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-32 text-white text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #060D2C 0%, #07102C 50%, #0D1B52 100%)' }}
      >
        {/* Caustic blobs */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,196,192,0.07) 0%, transparent 70%)', top: '-5%', right: '10%', filter: 'blur(50px)', animation: 'caustic-a 9s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(44,80,200,0.09) 0%, transparent 70%)', bottom: '5%', left: '5%', filter: 'blur(40px)', animation: 'caustic-b 11s ease-in-out infinite' }} />
        </div>

        {/* Porthole rings decoration */}
        {[180, 120, 70].map((size, i) => (
          <div key={i} aria-hidden="true" style={{
            position: 'absolute', right: `${8 + i * 3}%`, top: '50%',
            width: size, height: size,
            borderRadius: '50%',
            border: `${1.5 - i * 0.2}px solid rgba(77,196,192,${0.2 - i * 0.04})`,
            transform: 'translateY(-50%)',
            animation: `vortex-spin ${12 + i * 4}s linear infinite ${i % 2 ? 'reverse' : ''}`,
            pointerEvents: 'none',
          }} />
        ))}

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-4">Catálogo</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Nuestros Productos</h1>
          <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto 24px', display: 'block' }}>
            <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.7 }}>
            Todo lo que necesitas para tener agua pura en tu hogar u oficina.
          </p>
        </div>

        {/* Bottom wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#07102C"/>
          </svg>
        </div>
      </section>

      {/* ── Catalog section ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #07102C 0%, #0D1B52 60%, #1A2E78 100%)' }}
      >
        {/* Deep-sea glow */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,212,0.05) 0%, transparent 70%)', top: '10%', left: '5%', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(44,80,200,0.06) 0%, transparent 70%)', bottom: '10%', right: '5%', filter: 'blur(50px)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '10px 28px', borderRadius: 99,
                  fontSize: 13, fontWeight: 600,
                  transition: 'all 0.3s',
                  border: active === cat ? '2px solid #4DC4C0' : '2px solid rgba(77,196,192,0.3)',
                  background: active === cat ? '#4DC4C0' : 'rgba(255,255,255,0.06)',
                  color: active === cat ? 'white' : '#4DC4C0',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filtered.map((p, idx) => (
              <div
                key={p.id}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(77,196,192,0.18)',
                  borderRadius: '1.75rem',
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = '0 24px 60px rgba(77,196,192,0.15)'
                  el.style.borderColor = 'rgba(77,196,192,0.4)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = 'rgba(77,196,192,0.18)'
                }}
              >
                {/* Porthole image area */}
                <div style={{
                  height: 180,
                  background: 'linear-gradient(160deg, #0a2060 0%, #062050 60%, #031030 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {/* Caustic overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 35% 30%, rgba(34,197,212,0.1) 0%, transparent 70%)', animation: 'caustic-a 7s ease-in-out infinite' }} />
                  {/* Surface shimmer */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, rgba(77,196,192,0.6), transparent)', animation: 'surface-shimmer 4s ease-in-out infinite', animationDelay: `${idx * 0.5}s` }} />
                  {/* Bubbles */}
                  {[{ l: '25%', s: 6, d: '0s', dur: '3s' }, { l: '55%', s: 4, d: '0.8s', dur: '4s' }, { l: '80%', s: 7, d: '1.5s', dur: '2.5s' }].map((b, bi) => (
                    <div key={bi} style={{
                      position: 'absolute', bottom: '5%', left: b.l,
                      width: b.s, height: b.s, borderRadius: '50%',
                      border: '1.5px solid rgba(34,197,212,0.7)', background: 'rgba(34,197,212,0.08)',
                      animation: `rise ${b.dur} ease-in infinite`, animationDelay: b.d,
                    }} />
                  ))}
                  {/* Water drop icon */}
                  <svg width="52" height="68" viewBox="0 0 24 32" fill="none" stroke="#4DC4C0" strokeWidth="1.2" style={{ filter: 'drop-shadow(0 0 10px rgba(34,197,212,0.7))', zIndex: 1 }}>
                    <path d="M12 2C12 2 2 16 2 22A10 10 0 0 0 22 22C22 16 12 2 12 2Z"/>
                    <path d="M8 22 C8 18 16 18 16 22" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Card body */}
                <div style={{ padding: '1.5rem' }}>
                  <span style={{
                    display: 'inline-block', background: 'rgba(77,196,192,0.18)', color: '#4DC4C0',
                    fontSize: 11, fontWeight: 700, padding: '3px 12px', borderRadius: 99,
                    marginBottom: 10, letterSpacing: '0.05em', textTransform: 'uppercase',
                  }}>
                    {p.category}
                  </span>
                  <h3 className="font-display font-bold text-white mb-2" style={{ fontSize: 20 }}>{p.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6 }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Single wide WhatsApp CTA */}
          <div className="text-center">
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 24 }}>
              ¿Tienes dudas sobre algún producto? Escríbenos y te respondemos de inmediato.
            </p>
            <a
              href={getOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ripple"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: 'linear-gradient(135deg, #4DC4C0, #2C50C8)',
                color: 'white', fontWeight: 700, fontSize: 17,
                padding: '18px 56px', borderRadius: 99,
                textDecoration: 'none', boxShadow: '0 8px 32px rgba(77,196,192,0.3)',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = '' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.512 5.83L0 24l6.334-1.49A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.37l-.359-.214-3.757.884.937-3.657-.234-.376A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Consultar por WhatsApp
            </a>
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
