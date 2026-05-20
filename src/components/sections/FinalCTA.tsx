'use client'
import { getOrderLink } from '@/lib/whatsapp'

export default function FinalCTA() {
  const waLink = getOrderLink()

  return (
    <section
      className="relative py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #edf7f9 0%, #ddf0f5 100%)' }}
    >
      {/* Top wave from testimonials */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#edf7f9"/>
        </svg>
      </div>

      {/* Vortex rings */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        {[320, 240, 170, 110, 60].map((size, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: size, height: size,
            borderRadius: '50%',
            border: `${1.5 - i * 0.15}px solid rgba(77,196,192,${0.35 - i * 0.05})`,
            animation: `vortex-spin ${8 + i * 3}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
            boxShadow: `0 0 ${8 + i * 4}px rgba(77,196,192,${0.1 - i * 0.015})`,
          }} />
        ))}

        {/* Vortex fill glow */}
        <div style={{
          position: 'absolute',
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77,196,192,0.1) 0%, rgba(59,130,196,0.06) 40%, transparent 70%)',
          animation: 'vortex-pulse 4s ease-in-out infinite',
        }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p style={{ color: '#4DC4C0', fontSize: 13, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>
          El agua que mereces
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
          ¿Listo para tener<br />agua pura en casa?
        </h2>
        <p style={{ color: '#4a6a8a', fontSize: 17, marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
          Contáctanos por WhatsApp y recibe tu primer pedido hoy.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ripple pulse-glow"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: 'linear-gradient(135deg, #4DC4C0, #0D1B52)',
            color: 'white', fontWeight: 700, fontSize: 18,
            padding: '18px 44px', borderRadius: 99,
            textDecoration: 'none', boxShadow: '0 8px 32px rgba(77,196,192,0.35)',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.04)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = '' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.512 5.83L0 24l6.334-1.49A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.37l-.359-.214-3.757.884.937-3.657-.234-.376A9.818 9.818 0 1112 21.818z"/>
          </svg>
          Escribirnos por WhatsApp
        </a>

        {/* Small wave below button */}
        <div style={{ marginTop: 40, opacity: 0.3 }}>
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" style={{ width: 200, display: 'block', margin: '0 auto' }}>
            <path d="M0,10 C25,3 50,17 75,10 C100,3 125,17 150,10 C175,3 190,17 200,10" fill="none" stroke="#0D1B52" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
