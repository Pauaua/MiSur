'use client'
import Link from 'next/link'
import { waterTypes } from '@/data/products'
import { getOrderLink } from '@/lib/whatsapp'

function WaterTypeCard({ wt, idx }: { wt: typeof waterTypes[0]; idx: number }) {
  return (
    <div
      className="water-type-card"
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(14px)',
        border: '1.5px solid rgba(255,255,255,0.1)',
        borderRadius: '1.75rem',
        padding: '2rem 1.75rem',
        transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
        overflow: 'hidden',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-6px)'
        el.style.boxShadow = `0 24px 60px ${wt.glowColor}`
        el.style.borderColor = `${wt.color}55`
        el.style.background = `${wt.color}10`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = ''
        el.style.boxShadow = ''
        el.style.borderColor = 'rgba(255,255,255,0.1)'
        el.style.background = 'rgba(255,255,255,0.04)'
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute', top: -40, right: -40,
        width: 140, height: 140, borderRadius: '50%',
        background: `radial-gradient(circle, ${wt.glowColor} 0%, transparent 70%)`,
        filter: 'blur(20px)', pointerEvents: 'none',
        animation: `caustic-${idx % 2 === 0 ? 'a' : 'b'} ${8 + idx}s ease-in-out infinite`,
      }} />

      {wt.badge && (
        <span style={{
          position: 'absolute', top: 16, right: 16,
          background: wt.color, color: 'white',
          fontSize: 9, fontWeight: 800, padding: '2px 8px', borderRadius: 99,
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          {wt.badge}
        </span>
      )}

      {/* Icon circle */}
      <div style={{
        width: 64, height: 64, borderRadius: '50%',
        background: `${wt.color}18`,
        border: `1.5px solid ${wt.color}40`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.25rem',
        boxShadow: `0 0 20px ${wt.glowColor}`,
      }}>
        <WaterSvgIcon type={wt.type} color={wt.color} />
      </div>

      <p style={{
        fontSize: 10, fontWeight: 800, color: wt.color,
        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6,
      }}>
        {wt.type}
      </p>
      <h3 className="font-display font-bold text-white" style={{ fontSize: 18, lineHeight: 1.25, marginBottom: '0.65rem' }}>
        {wt.subtitle}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.65, marginBottom: '1.25rem' }}>
        {wt.benefits.slice(0, 2).join(' · ')}
      </p>

      {/* Format dots */}
      <div style={{ display: 'flex', gap: 6, marginBottom: '1.25rem' }}>
        {['5L', '10L', '20L'].map(s => (
          <span key={s} style={{
            fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 99,
            background: `${wt.color}18`, color: wt.color,
            border: `1px solid ${wt.color}35`,
          }}>
            {s}
          </span>
        ))}
      </div>

      <div style={{ height: '1px', background: `${wt.color}25`, marginBottom: '1.25rem' }} />

      <a
        href={getOrderLink(wt.title)}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          color: wt.color, fontSize: 12, fontWeight: 700,
          textDecoration: 'none', transition: 'gap 0.2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '10px' }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '7px' }}
      >
        Pedir por WhatsApp →
      </a>
    </div>
  )
}

function WaterSvgIcon({ type, color }: { type: string; color: string }) {
  const s = { filter: `drop-shadow(0 0 6px ${color}88)` }
  if (type === 'Purificada') return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" style={s}>
      <path d="M24 4C24 4 8 22 8 32a16 16 0 0 0 32 0C40 22 24 4 24 4Z" fill={`${color}22`} stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M16 32C16 26 32 26 32 32" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  )
  if (type === 'Ionizada') return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" style={s}>
      <path d="M24 4C24 4 8 22 8 32a16 16 0 0 0 32 0C40 22 24 4 24 4Z" fill={`${color}22`} stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M20 20L26 28H22L28 38" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
  if (type === 'Alcalinizada') return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" style={s}>
      <path d="M24 4C24 4 8 22 8 32a16 16 0 0 0 32 0C40 22 24 4 24 4Z" fill={`${color}22`} stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="18" cy="28" r="3" fill={`${color}55`} stroke={color} strokeWidth="1.5"/>
      <circle cx="28" cy="24" r="2.5" fill={`${color}55`} stroke={color} strokeWidth="1.5"/>
      <circle cx="24" cy="34" r="2" fill={`${color}55`} stroke={color} strokeWidth="1.5"/>
    </svg>
  )
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" style={s}>
      <path d="M24 4C24 4 8 22 8 32a16 16 0 0 0 32 0C40 22 24 4 24 4Z" fill={`${color}22`} stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M17 30C17 24 23 22 24 28C25 22 31 24 31 30" stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export default function ProductsPreview() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #07102C 0%, #0D1B52 40%, #1A2E78 100%)' }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#e8f4f8"/>
        </svg>
      </div>

      {/* Ambient glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,212,0.06) 0%, transparent 70%)', top: '20%', left: '5%', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(106,143,255,0.05) 0%, transparent 70%)', bottom: '10%', right: '5%', filter: 'blur(60px)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">Lo que ofrecemos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">Nuestras Aguas</h2>
          <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto 16px', display: 'block' }}>
            <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, maxWidth: 480, margin: '0 auto' }}>
            Cuatro fórmulas de hidratación en formatos de 5, 10 y 20 litros con delivery gratuito.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {waterTypes.map((wt, idx) => (
            <WaterTypeCard key={wt.type} wt={wt} idx={idx} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={getOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ripple"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #4DC4C0, #2C50C8)',
              color: 'white', fontWeight: 700, fontSize: 15,
              padding: '15px 44px', borderRadius: 99,
              textDecoration: 'none', boxShadow: '0 8px 32px rgba(77,196,192,0.3)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = '' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.512 5.83L0 24l6.334-1.49A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.37l-.359-.214-3.757.884.937-3.657-.234-.376A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Hacer un pedido
          </a>
          <Link
            href="/productos"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '2px solid rgba(77,196,192,0.5)', color: '#4DC4C0',
              fontWeight: 600, fontSize: 14, padding: '13px 32px', borderRadius: 99,
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#4DC4C0' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(77,196,192,0.5)' }}
          >
            Ver catálogo completo →
          </Link>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#07102C"/>
        </svg>
      </div>
    </section>
  )
}
