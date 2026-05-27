'use client'
import AnimatedWaves from '@/components/water/AnimatedWaves'
import Bubbles from '@/components/water/Bubbles'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export default function HeroSection() {
  const waLink = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP ?? '',
    'Hola! Quisiera hacer un pedido de agua purificada.'
  )

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, #0e1e5a 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 80%, #101f5e 0%, transparent 55%),
          linear-gradient(170deg, #060D2C 0%, #0D1B52 30%, #1A2E78 60%, #2C50C8 100%)
        `,
      }}
    >
      <Bubbles />
      <AnimatedWaves />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-4">
          Delivery gratuito en Quilicura
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
          Agua pura directo<br />
          <span className="text-teal">a tu hogar</span>
        </h1>

        {/* Lema con efecto bioluminiscente */}
        <div style={{ marginBottom: 28, position: 'relative', display: 'inline-block' }}>
          {/* Líneas decorativas a los lados */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center' }}>
            <svg width="48" height="8" viewBox="0 0 48 8">
              <path d="M0,4 C8,1 16,7 24,4 C32,1 40,7 48,4" fill="none" stroke="rgba(77,196,192,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p
              className="font-display font-bold tracking-widest uppercase"
              style={{
                fontSize: 'clamp(15px, 4vw, 26px)',
                color: '#4DC4C0',
                animation: 'biolum 3s ease-in-out infinite',
                letterSpacing: '0.25em',
              }}
            >
              Salud es Vida
            </p>
            <svg width="48" height="8" viewBox="0 0 48 8">
              <path d="M0,4 C8,7 16,1 24,4 C32,7 40,1 48,4" fill="none" stroke="rgba(77,196,192,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <p className="text-white/80 text-base sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          El sur en cada gota, pureza en cada sorbo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ripple pulse-glow flex items-center justify-center gap-2 bg-teal text-white font-bold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
          >
            <WAIcon />
            Hacer un pedido
          </a>
          <a
            href="#por-que-elegirnos"
            className="flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
          >
            Conocer más
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="bounce-arrow mt-16">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mx-auto opacity-60">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

function WAIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.512 5.83L0 24l6.334-1.49A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.37l-.359-.214-3.757.884.937-3.657-.234-.376A9.818 9.818 0 1112 21.818z"/>
    </svg>
  )
}
