'use client'
import { useState } from 'react'
import { waterTypes, containers, accessories } from '@/data/products'
import { getOrderLink } from '@/lib/whatsapp'

const WA_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.512 5.83L0 24l6.334-1.49A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.37l-.359-.214-3.757.884.937-3.657-.234-.376A9.818 9.818 0 1112 21.818z"/>
  </svg>
)

/* ── Water type icons as inline SVGs ── */
function WaterIcon({ type, color, size = 44 }: { type: string; color: string; size?: number }) {
  if (type === 'Purificada') return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ filter: `drop-shadow(0 0 10px ${color}99)` }}>
      <path d="M24 4C24 4 8 22 8 32a16 16 0 0 0 32 0C40 22 24 4 24 4Z" fill={`${color}22`} stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M16 32 C16 26 32 26 32 32" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <circle cx="30" cy="22" r="3" fill={`${color}55`}/>
    </svg>
  )
  if (type === 'Ionizada') return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ filter: `drop-shadow(0 0 10px ${color}99)` }}>
      <path d="M24 4C24 4 8 22 8 32a16 16 0 0 0 32 0C40 22 24 4 24 4Z" fill={`${color}22`} stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M20 20 L26 28 L22 28 L28 38" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
  if (type === 'Alcalinizada') return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ filter: `drop-shadow(0 0 10px ${color}99)` }}>
      <path d="M24 4C24 4 8 22 8 32a16 16 0 0 0 32 0C40 22 24 4 24 4Z" fill={`${color}22`} stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="18" cy="28" r="3" fill={`${color}55`} stroke={color} strokeWidth="1.2"/>
      <circle cx="28" cy="24" r="2.5" fill={`${color}55`} stroke={color} strokeWidth="1.2"/>
      <circle cx="24" cy="34" r="2" fill={`${color}55`} stroke={color} strokeWidth="1.2"/>
    </svg>
  )
  // Proteínas
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ filter: `drop-shadow(0 0 10px ${color}99)` }}>
      <path d="M24 4C24 4 8 22 8 32a16 16 0 0 0 32 0C40 22 24 4 24 4Z" fill={`${color}22`} stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M17 30 C17 24 23 22 24 28 C25 22 31 24 31 30" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

/* ── Container size card ── */
function SizeCard({ c, color, glowColor, typeName }: {
  c: typeof containers[0]; color: string; glowColor: string; typeName: string
}) {
  const [hovered, setHovered] = useState(false)
  const waLink = getOrderLink(`${typeName} ${c.volume}`)
  const heights = { '5L': 56, '10L': 72, '20L': 88 }
  const h = heights[c.size]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? `${color}14` : 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(14px)',
        border: `1.5px solid ${hovered ? color + '55' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '1.5rem',
        padding: '2rem 1.5rem',
        transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
        boxShadow: hovered ? `0 20px 50px ${glowColor}` : 'none',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flex: '1 1 0',
        minWidth: 0,
      }}
    >
      {c.popular && (
        <span style={{
          position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
          background: `linear-gradient(90deg, ${color}, ${color}cc)`,
          color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em',
          padding: '3px 14px', borderRadius: 99, whiteSpace: 'nowrap',
          textTransform: 'uppercase', boxShadow: `0 4px 16px ${glowColor}`,
        }}>
          Más popular
        </span>
      )}

      {/* Bottle silhouette */}
      <div style={{ marginBottom: '1.25rem', position: 'relative' }}>
        <svg width={h * 0.55} height={h} viewBox="0 0 44 80" fill="none" style={{ filter: `drop-shadow(0 0 8px ${color}66)` }}>
          {/* Cap */}
          <rect x="15" y="2" width="14" height="10" rx="4" fill={`${color}55`} stroke={color} strokeWidth="1.4"/>
          {/* Neck */}
          <rect x="17" y="11" width="10" height="6" fill={`${color}33`} stroke={color} strokeWidth="1.2"/>
          {/* Body */}
          <rect x="8" y="17" width="28" height="56" rx="6" fill={`${color}18`} stroke={color} strokeWidth="1.4"/>
          {/* Water fill */}
          <rect x="9.5" y="38" width="25" height="34" rx="5" fill={`${color}30`}/>
          {/* Label band */}
          <rect x="9" y="28" width="26" height="18" rx="3" fill={`${color}22`} stroke={`${color}44`} strokeWidth="0.8"/>
          {/* Highlight */}
          <rect x="12" y="20" width="5" height="22" rx="2.5" fill={`${color}25`}/>
        </svg>
        {c.size === '20L' && (
          <div style={{
            position: 'absolute', top: '50%', right: -8, transform: 'translateY(-50%)',
            width: 8, height: 20, borderRadius: 4,
            background: `${color}44`, border: `1px solid ${color}66`,
          }}/>
        )}
      </div>

      {/* Size badge */}
      <div style={{
        fontSize: 28, fontWeight: 900, color,
        fontFamily: 'var(--font-display, serif)', lineHeight: 1, marginBottom: 4,
        textShadow: `0 0 20px ${color}`,
      }}>
        {c.size}
      </div>

      <div style={{ fontSize: 12, fontWeight: 700, color: `${color}cc`, marginBottom: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {c.label}
      </div>

      <span style={{
        display: 'inline-block',
        background: c.containerType === 'Desechable' ? 'rgba(255,200,0,0.12)' : 'rgba(34,211,153,0.12)',
        color: c.containerType === 'Desechable' ? '#FCD34D' : '#34D399',
        fontSize: 10, fontWeight: 700, padding: '2px 10px', borderRadius: 99,
        letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.85rem',
      }}>
        {c.containerType}
      </span>

      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, lineHeight: 1.65, marginBottom: '1.25rem', flexGrow: 1 }}>
        {c.description}
      </p>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: hovered ? color : 'rgba(255,255,255,0.08)',
          border: `1.5px solid ${hovered ? color : 'rgba(255,255,255,0.15)'}`,
          color: 'white', fontSize: 12, fontWeight: 700,
          padding: '9px 20px', borderRadius: 99,
          textDecoration: 'none', transition: 'all 0.3s',
          boxShadow: hovered ? `0 6px 24px ${glowColor}` : 'none',
        }}
      >
        {WA_ICON} Pedir este formato
      </a>
    </div>
  )
}

/* ── Accessory card ── */
function AccessoryCard({ acc }: { acc: typeof accessories[0] }) {
  const [hovered, setHovered] = useState(false)
  const waLink = getOrderLink(acc.name)

  const isElectric = acc.id === 'dispensador-electrico'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? `${acc.color}10` : 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(14px)',
        border: `1.5px solid ${hovered ? acc.color + '55' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '1.5rem',
        padding: '2rem',
        transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
        boxShadow: hovered ? `0 20px 50px ${acc.glowColor}` : 'none',
        display: 'flex',
        gap: '1.75rem',
        alignItems: 'flex-start',
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute', top: -30, right: -30,
        width: 120, height: 120, borderRadius: '50%',
        background: `radial-gradient(circle, ${acc.glowColor} 0%, transparent 70%)`,
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        flexShrink: 0,
        width: 72, height: 72, borderRadius: '1.25rem',
        background: `${acc.color}15`,
        border: `1.5px solid ${acc.color}35`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: hovered ? `0 0 24px ${acc.glowColor}` : 'none',
        transition: 'box-shadow 0.35s',
      }}>
        {isElectric ? (
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" style={{ filter: `drop-shadow(0 0 6px ${acc.color}88)` }}>
            <rect x="14" y="8" width="20" height="32" rx="6" fill={`${acc.color}18`} stroke={acc.color} strokeWidth="1.6"/>
            <rect x="19" y="4" width="10" height="6" rx="3" fill={`${acc.color}44`} stroke={acc.color} strokeWidth="1.2"/>
            <rect x="18" y="26" width="12" height="8" rx="3" fill={`${acc.color}30`} stroke={`${acc.color}66`} strokeWidth="1"/>
            <circle cx="24" cy="19" r="4" fill={`${acc.color}40`} stroke={acc.color} strokeWidth="1.2"/>
            <path d="M22 19 L25 15 L25 19 L28 19 L25 23 L25 19Z" fill={acc.color}/>
            <path d="M10 38 L14 38" stroke={acc.color} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" style={{ filter: `drop-shadow(0 0 6px ${acc.color}88)` }}>
            <rect x="16" y="8" width="16" height="32" rx="6" fill={`${acc.color}18`} stroke={acc.color} strokeWidth="1.6"/>
            <rect x="21" y="4" width="6" height="6" rx="3" fill={`${acc.color}44`} stroke={acc.color} strokeWidth="1.2"/>
            <rect x="20" y="26" width="8" height="10" rx="3" fill={`${acc.color}30`} stroke={`${acc.color}66`} strokeWidth="1"/>
            <path d="M32 28 L40 28 L40 32 L32 32" stroke={acc.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <circle cx="32" cy="30" r="2" fill={acc.color}/>
          </svg>
        )}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: 10, fontWeight: 700, color: acc.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
          Accesorio
        </p>
        <h3 className="font-display font-bold text-white" style={{ fontSize: 18, lineHeight: 1.2, marginBottom: 4 }}>
          {acc.name}
        </h3>
        <p style={{ color: `${acc.color}cc`, fontSize: 12, fontWeight: 600, marginBottom: '0.75rem' }}>
          {acc.subtitle}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.65, marginBottom: '1rem' }}>
          {acc.description}
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {acc.features.map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: acc.color, flexShrink: 0 }} />
              {f}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.45)',
            background: 'rgba(255,255,255,0.06)', padding: '3px 12px', borderRadius: 99,
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            Compatible: {acc.compatible}
          </span>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: hovered ? acc.color : 'rgba(255,255,255,0.08)',
              border: `1.5px solid ${hovered ? acc.color : 'rgba(255,255,255,0.15)'}`,
              color: 'white', fontSize: 12, fontWeight: 700,
              padding: '8px 18px', borderRadius: 99,
              textDecoration: 'none', transition: 'all 0.3s',
            }}
          >
            {WA_ICON} Consultar
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ProductosPage() {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = waterTypes[activeIdx]

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-32 text-white text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #060D2C 0%, #07102C 50%, #0D1B52 100%)' }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,196,192,0.07) 0%, transparent 70%)', top: '-5%', right: '10%', filter: 'blur(50px)', animation: 'caustic-a 9s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(44,80,200,0.09) 0%, transparent 70%)', bottom: '5%', left: '5%', filter: 'blur(40px)', animation: 'caustic-b 11s ease-in-out infinite' }} />
        </div>

        {[180, 120, 70].map((size, i) => (
          <div key={i} aria-hidden="true" style={{
            position: 'absolute', right: `${8 + i * 3}%`, top: '50%',
            width: size, height: size, borderRadius: '50%',
            border: `${1.5 - i * 0.2}px solid rgba(77,196,192,${0.2 - i * 0.04})`,
            transform: 'translateY(-50%)',
            animation: `vortex-spin ${12 + i * 4}s linear infinite ${i % 2 ? 'reverse' : ''}`,
            pointerEvents: 'none',
          }} />
        ))}

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-4">Catálogo</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Nuestras Aguas</h1>
          <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto 24px', display: 'block' }}>
            <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.7 }}>
            Cuatro fórmulas de hidratación. Una para cada necesidad y estilo de vida.
          </p>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#07102C"/>
          </svg>
        </div>
      </section>

      {/* ── Type selector + detail ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #07102C 0%, #0D1B52 60%, #1A2E78 100%)', paddingBottom: '7rem' }}
      >
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${active.glowColor} 0%, transparent 70%)`, top: '5%', left: '-5%', filter: 'blur(80px)', transition: 'background 0.6s' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(44,80,200,0.06) 0%, transparent 70%)', bottom: '10%', right: '5%', filter: 'blur(50px)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

          {/* ── Type tab pills ── */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {waterTypes.map((wt, idx) => {
              const isActive = activeIdx === idx
              return (
                <button
                  key={wt.type}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    position: 'relative',
                    padding: '11px 28px', borderRadius: 99,
                    fontSize: 13, fontWeight: 700, letterSpacing: '0.04em',
                    transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
                    border: isActive ? `2px solid ${wt.color}` : '2px solid rgba(255,255,255,0.12)',
                    background: isActive ? `${wt.color}22` : 'rgba(255,255,255,0.05)',
                    color: isActive ? wt.color : 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    boxShadow: isActive ? `0 4px 20px ${wt.glowColor}` : 'none',
                  }}
                >
                  {wt.type}
                  {wt.badge && (
                    <span style={{
                      marginLeft: 8, fontSize: 9, fontWeight: 800, verticalAlign: 'middle',
                      background: wt.color, color: 'white', padding: '2px 7px', borderRadius: 99,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>
                      {wt.badge}
                    </span>
                  )}
                  {isActive && (
                    <span style={{
                      position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)',
                      width: 6, height: 6, borderRadius: '50%',
                      background: active.color,
                      boxShadow: `0 0 8px ${active.color}`,
                    }}/>
                  )}
                </button>
              )
            })}
          </div>

          {/* ── Active type detail ── */}
          <div
            key={active.type}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '3rem',
              alignItems: 'start',
              marginBottom: '4rem',
              animation: 'fadeIn 0.4s ease',
            }}
          >
            {/* Left: type info */}
            <div>
              {/* Type header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <WaterIcon type={active.type} color={active.color} size={56} />
                <div>
                  <p style={{ fontSize: 11, fontWeight: 800, color: active.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                    {active.type}
                  </p>
                  <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.2 }}>
                    {active.subtitle}
                  </h2>
                </div>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, lineHeight: 1.75, marginBottom: '2rem' }}>
                {active.description}
              </p>

              {/* Benefits */}
              <div style={{ marginBottom: '1.75rem' }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: active.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                  Beneficios clave
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {active.benefits.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: active.color, flexShrink: 0, boxShadow: `0 0 6px ${active.color}` }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${active.color}30`,
                borderRadius: '1rem',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.75rem',
              }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: active.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                  Proceso de producción
                </p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, lineHeight: 1.7 }}>
                  {active.process}
                </p>
              </div>

              {/* Ideal for */}
              <p style={{
                display: 'inline-flex', gap: '0.5rem', alignItems: 'flex-start',
                background: `${active.color}14`, border: `1px solid ${active.color}30`,
                borderRadius: '0.75rem', padding: '0.85rem 1.2rem',
                color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.6,
              }}>
                <span style={{ color: active.color, fontWeight: 700, flexShrink: 0 }}>Ideal para:</span>
                {active.idealFor}
              </p>
            </div>

            {/* Right: size cards */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
                Elige tu formato
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {containers.map(c => (
                  <SizeCard
                    key={c.size}
                    c={c}
                    color={active.color}
                    glowColor={active.glowColor}
                    typeName={active.title}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Formats summary table ── */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            marginBottom: '4rem',
          }}>
            <div style={{ padding: '1.25rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
                Todos los formatos disponibles
              </p>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <th style={{ padding: '12px 20px', textAlign: 'left', color: 'rgba(255,255,255,0.45)', fontWeight: 600, whiteSpace: 'nowrap' }}>Tipo de agua</th>
                    {containers.map(c => (
                      <th key={c.size} style={{ padding: '12px 20px', textAlign: 'center', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>
                        {c.label}
                        <div style={{ fontSize: 10, fontWeight: 500, marginTop: 2, color: 'rgba(255,255,255,0.3)' }}>{c.containerType}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {waterTypes.map((wt, i) => (
                    <tr
                      key={wt.type}
                      onClick={() => setActiveIdx(i)}
                      style={{
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        cursor: 'pointer',
                        background: activeIdx === i ? `${wt.color}10` : 'transparent',
                        transition: 'background 0.2s',
                      }}
                    >
                      <td style={{ padding: '14px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ width: 8, height: 8, borderRadius: '50%', background: wt.color, flexShrink: 0 }} />
                          <span style={{ color: activeIdx === i ? wt.color : 'rgba(255,255,255,0.75)', fontWeight: 600 }}>
                            {wt.title}
                          </span>
                          {wt.badge && (
                            <span style={{ fontSize: 9, background: wt.color, color: 'white', padding: '1px 6px', borderRadius: 99, fontWeight: 700, letterSpacing: '0.05em' }}>
                              {wt.badge}
                            </span>
                          )}
                        </div>
                      </td>
                      {containers.map(c => (
                        <td key={c.size} style={{ padding: '14px 20px', textAlign: 'center' }}>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ display: 'inline-block' }}>
                            <circle cx="9" cy="9" r="8" fill={`${wt.color}20`} stroke={`${wt.color}60`} strokeWidth="1.2"/>
                            <path d="M5.5 9.5 L8 12 L12.5 7" stroke={wt.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Accesorios ── */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                Accesorios
              </p>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {accessories.map(acc => (
                <AccessoryCard key={acc.id} acc={acc} />
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="text-center">
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 24 }}>
              ¿No sabes cuál elegir? Escríbenos y te recomendamos la opción ideal para ti.
            </p>
            <a
              href={getOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ripple"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: 'linear-gradient(135deg, #4DC4C0, #2C50C8)',
                color: 'white', fontWeight: 700, fontSize: 16,
                padding: '18px 56px', borderRadius: 99,
                textDecoration: 'none', boxShadow: '0 8px 32px rgba(77,196,192,0.3)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = '' }}
            >
              {WA_ICON} Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0,50 C360,10 1080,70 1440,30 L1440,80 L0,80 Z" fill="#0a0f2a"/>
          </svg>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
