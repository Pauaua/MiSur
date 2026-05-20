'use client'

const testimonials = [
  {
    name: 'María González',
    text: 'Llevamos más de 2 años con Mi Sur y la diferencia en el sabor del agua es increíble. El delivery siempre llega puntual y el equipo es muy amable.',
    role: 'Cliente familiar',
    hue: '190',
  },
  {
    name: 'Carlos Muñoz',
    text: 'Instalamos un dispensador pedestal en la oficina y todos quedaron felices. El agua tiene un sabor limpio y refrescante. Los recomiendo 100%.',
    role: 'Empresa local',
    hue: '210',
  },
  {
    name: 'Ana Ramírez',
    text: 'Lo mejor es que el reparto es gratuito. Antes pagaba extra por el delivery de agua. Con Mi Sur ahorré bastante y la calidad es superior.',
    role: 'Cliente habitual',
    hue: '200',
  },
]

export default function Testimonials() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0fafb 0%, #e6f6f8 50%, #edf7f9 100%)' }}
    >
      {/* Sandy floor texture - subtle dots */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="sand" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1" fill="#1E3A8A"/>
          <circle cx="13" cy="13" r="1.5" fill="#1E3A8A"/>
          <circle cx="7" cy="17" r="0.8" fill="#4DC4C0"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#sand)"/>
      </svg>

      {/* Top wave transition from stats dark section */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
          <path d="M0,50 C360,10 1080,70 1440,30 L1440,0 L0,0 Z" fill="#04091C"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">Opiniones</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-5">
            Lo que dicen nuestros clientes
          </h2>
          <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto', display: 'block' }}>
            <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: `linear-gradient(135deg, hsla(${t.hue},60%,96%,0.9) 0%, hsla(${t.hue},50%,92%,0.85) 100%)`,
                backdropFilter: 'blur(16px)',
                border: `1px solid hsla(${t.hue},60%,80%,0.5)`,
                borderRadius: '2rem',
                padding: '2.5rem',
                boxShadow: `0 8px 32px hsla(${t.hue},60%,60%,0.1), inset 0 1px 0 rgba(255,255,255,0.8)`,
                transition: 'transform 0.3s, box-shadow 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = `0 20px 48px hsla(${t.hue},60%,50%,0.18), inset 0 1px 0 rgba(255,255,255,0.9)`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = ''
                el.style.boxShadow = `0 8px 32px hsla(${t.hue},60%,60%,0.1), inset 0 1px 0 rgba(255,255,255,0.8)`
              }}
            >
              {/* Sea glass sheen */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
                borderRadius: '2rem 2rem 0 0',
                pointerEvents: 'none',
              }} />

              {/* Wave quote mark */}
              <svg viewBox="0 0 48 30" width="48" style={{ marginBottom: 16, opacity: 0.35 }}>
                <path d="M2,20 C8,8 16,8 18,20 M28,20 C34,8 42,8 44,20" stroke="#4DC4C0" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#4DC4C0">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p style={{ color: '#2d4a6b', fontSize: 14, lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Avatar shaped as a water drop */}
                <svg width="44" height="54" viewBox="0 0 24 30" style={{ flexShrink: 0 }}>
                  <path d="M12 1C12 1 2 13 2 20A10 10 0 0 0 22 20C22 13 12 1 12 1Z" fill={`hsl(${t.hue},50%,75%)`}/>
                  <text x="12" y="22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" fontFamily="Georgia, serif">{t.name[0]}</text>
                </svg>
                <div>
                  <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: '#4DC4C0', fontSize: 12 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
