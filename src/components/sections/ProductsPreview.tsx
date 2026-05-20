'use client'
import Link from 'next/link'
import { products } from '@/data/products'
import { getOrderLink } from '@/lib/whatsapp'

const featured = products.slice(0, 3)

const bubblePositions = [
  [
    { left: '20%', size: 6, delay: '0s',   dur: '3s'   },
    { left: '55%', size: 4, delay: '0.8s', dur: '4s'   },
    { left: '75%', size: 8, delay: '1.5s', dur: '2.5s' },
  ],
  [
    { left: '15%', size: 5, delay: '0.3s', dur: '3.5s' },
    { left: '45%', size: 7, delay: '1.1s', dur: '2.8s' },
    { left: '80%', size: 4, delay: '0s',   dur: '4.2s' },
  ],
  [
    { left: '25%', size: 6, delay: '0.6s', dur: '3.2s' },
    { left: '60%', size: 5, delay: '0s',   dur: '3.8s' },
    { left: '85%', size: 9, delay: '1.4s', dur: '2.6s' },
  ],
]

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

      {/* Deep-sea ambient glow blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,212,0.07) 0%, transparent 70%)', top: '20%', left: '10%', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,196,0.06) 0%, transparent 70%)', bottom: '10%', right: '5%', filter: 'blur(60px)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-20">
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">Lo que ofrecemos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Nuestros Productos
          </h2>
          <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto', display: 'block' }}>
            <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {featured.map((p, idx) => (
            <div key={p.id} className="flex flex-col items-center">
              {/* Porthole frame */}
              <div style={{
                position: 'relative',
                width: 200, height: 200,
                borderRadius: '50%',
                border: '6px solid rgba(59,130,196,0.5)',
                boxShadow: '0 0 0 3px rgba(34,197,212,0.2), 0 0 40px rgba(34,197,212,0.12), inset 0 0 30px rgba(0,0,0,0.4)',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                background: 'linear-gradient(160deg, #0a2060 0%, #062050 60%, #031030 100%)',
              }}>
                {/* Porthole rivets */}
                {[0,90,180,270].map(deg => (
                  <div key={deg} style={{
                    position: 'absolute',
                    width: 10, height: 10,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6A90E8, #1E3A8A)',
                    border: '1px solid rgba(34,197,212,0.4)',
                    top: '50%', left: '50%',
                    transform: `rotate(${deg}deg) translateY(-90px) translateX(-5px)`,
                    boxShadow: '0 0 6px rgba(34,197,212,0.3)',
                  }} />
                ))}

                {/* Bubbles rising inside porthole */}
                {bubblePositions[idx].map((b, bi) => (
                  <div key={bi} style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: b.left,
                    width: b.size,
                    height: b.size,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(34,197,212,0.7)',
                    background: 'rgba(34,197,212,0.08)',
                    animation: `rise ${b.dur} ease-in infinite`,
                    animationDelay: b.delay,
                  }} />
                ))}

                {/* Center drop icon */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="52" height="68" viewBox="0 0 24 32" fill="none" stroke="#4DC4C0" strokeWidth="1.2" style={{ filter: 'drop-shadow(0 0 8px rgba(34,197,212,0.6))' }}>
                    <path d="M12 2C12 2 2 16 2 22A10 10 0 0 0 22 22C22 16 12 2 12 2Z"/>
                    <path d="M8 22 C8 18 16 18 16 22" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Caustic light inside porthole */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(ellipse 60% 40% at 35% 30%, rgba(34,197,212,0.12) 0%, transparent 70%)',
                  animation: 'caustic-a 7s ease-in-out infinite',
                }} />
              </div>

              {/* Card info below porthole */}
              <div style={{
                width: '100%',
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(34,197,212,0.18)',
                borderRadius: '1.5rem',
                padding: '1.5rem',
                textAlign: 'center',
              }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(34,197,212,0.18)',
                  color: '#4DC4C0',
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '3px 12px',
                  borderRadius: 99,
                  marginBottom: 10,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  {p.category}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-2">{p.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Single wide WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={getOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ripple"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #4DC4C0, #2C50C8)',
              color: 'white', fontWeight: 700, fontSize: 16,
              padding: '16px 48px', borderRadius: 99,
              textDecoration: 'none', boxShadow: '0 8px 32px rgba(77,196,192,0.3)',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = '' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.512 5.83L0 24l6.334-1.49A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.37l-.359-.214-3.757.884.937-3.657-.234-.376A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Consultar por WhatsApp
          </a>
          <Link
            href="/productos"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '2px solid rgba(34,197,212,0.6)', color: '#4DC4C0',
              fontWeight: 600, padding: '14px 32px', borderRadius: 99,
              textDecoration: 'none', transition: 'all 0.2s',
            }}
          >
            Ver todos los productos →
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
