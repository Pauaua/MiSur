'use client'

const purificationSteps = [
  { n: 1, title: 'Captación', desc: 'Obtención de agua de fuentes certificadas y controladas.', icon: '🌊' },
  { n: 2, title: 'Pre-filtrado', desc: 'Eliminación de partículas grandes mediante filtros de sedimento.', icon: '🔵' },
  { n: 3, title: 'Sedimentación', desc: 'Decantación natural de sólidos en suspensión.', icon: '⬇️' },
  { n: 4, title: 'Carbón Activado', desc: 'Remoción de cloro, olores y sabores no deseados.', icon: '⚫' },
  { n: 5, title: 'Ósmosis Inversa', desc: 'Eliminación de metales pesados, bacterias y virus.', icon: '💎' },
  { n: 6, title: 'Mineralización', desc: 'Reintegración de minerales esenciales para la salud.', icon: '✨' },
  { n: 7, title: 'Alcalinización', desc: 'Ajuste del pH a niveles alcalinos beneficiosos (7.5–8.5).', icon: '⚗️' },
  { n: 8, title: 'Filtro UV', desc: 'Esterilización final con luz ultravioleta.', icon: '🔦' },
  { n: 9, title: 'Control de Calidad', desc: 'Verificación de parámetros antes de cada distribución.', icon: '✅' },
]

const values = [
  { title: 'Calidad', desc: 'Cada litro de agua pasa por controles estrictos antes de llegar a tu hogar.', hue: 190 },
  { title: 'Confianza', desc: 'Transparencia en nuestros procesos y compromiso con nuestros clientes.', hue: 210 },
  { title: 'Puntualidad', desc: 'Cumplimos con los horarios de entrega acordados, siempre.', hue: 220 },
  { title: 'Cercanía', desc: 'Somos tu empresa local. Te conocemos y nos importa tu bienestar.', hue: 200 },
]

export default function NosotrosPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-32 text-white text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #060D2C 0%, #0D1B52 50%, #1A2E78 100%)' }}
      >
        {/* Caustic light blobs */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,196,192,0.08) 0%, transparent 70%)', top: '-10%', left: '5%', filter: 'blur(60px)', animation: 'caustic-a 10s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(44,80,200,0.1) 0%, transparent 70%)', bottom: '0%', right: '10%', filter: 'blur(50px)', animation: 'caustic-b 12s ease-in-out infinite' }} />
        </div>

        {/* Floating bubbles */}
        {[{ s: 80, l: '15%', t: '20%', d: '0s' }, { s: 50, l: '75%', t: '30%', d: '1s' }, { s: 30, l: '55%', t: '60%', d: '2s' }, { s: 60, l: '88%', t: '10%', d: '0.5s' }].map((b, i) => (
          <div key={i} aria-hidden="true" style={{
            position: 'absolute', width: b.s, height: b.s, left: b.l, top: b.t,
            borderRadius: '50%', border: '1.5px solid rgba(77,196,192,0.25)',
            background: 'rgba(77,196,192,0.04)', animation: `bubble-float ${4 + i}s ease-in-out infinite alternate`,
            animationDelay: b.d, pointerEvents: 'none',
          }} />
        ))}

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-4">La empresa</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Nuestra Historia</h1>
          <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto 24px', display: 'block' }}>
            <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, lineHeight: 1.7 }}>
            Nacimos con el propósito de acercar agua pura y saludable a cada hogar de la Zona Norte de Santiago.
          </p>
        </div>

        {/* Bottom wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#e8f4f8"/>
          </svg>
        </div>
      </section>

      {/* ── Historia ── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #e8f4f8 0%, #ddf0f5 100%)' }}
      >
        {/* Sandy pattern */}
        <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1" fill="#2C50C8"/><circle cx="13" cy="13" r="1.5" fill="#4DC4C0"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">Quiénes somos</p>
              <h2 className="font-display text-4xl font-bold text-navy mb-6">El sur en cada sorbo</h2>
              <p style={{ color: '#3a5a7a', lineHeight: 1.8, marginBottom: 16 }}>
                Mi Sur nació de una idea simple y poderosa: que cada vez que bebas nuestra agua, sientas esa pureza cristalina que solo evoca lo más limpio de la naturaleza. No importa dónde estés — con Mi Sur, el sur llega a tu paladar.
              </p>
              <p style={{ color: '#3a5a7a', lineHeight: 1.8, marginBottom: 16 }}>
                Desde 2018, hemos perfeccionado nuestro proceso de purificación para ofrecer agua alcalina, libre de cloro y sodio, con el sabor limpio y fresco que tu familia merece.
              </p>
              <p style={{ color: '#3a5a7a', lineHeight: 1.8 }}>
                Hoy atendemos a miles de hogares y empresas, y seguimos creciendo gracias a la confianza que nuestros clientes depositan en nosotros cada día.
              </p>
            </div>

            {/* Decorative water drop card */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300, minHeight: 260 }}>
              {/* Outer ring */}
              <div style={{ position: 'absolute', width: 'min(280px, 80vw)', height: 'min(280px, 80vw)', borderRadius: '50%', border: '2px solid rgba(77,196,192,0.3)', animation: 'vortex-spin 20s linear infinite' }} />
              <div style={{ position: 'absolute', width: 'min(220px, 65vw)', height: 'min(220px, 65vw)', borderRadius: '50%', border: '1px solid rgba(44,80,200,0.2)', animation: 'vortex-spin 15s linear infinite reverse' }} />
              {/* Central card */}
              <div style={{
                width: 'min(200px, 58vw)', height: 'min(200px, 58vw)', borderRadius: '50%',
                background: 'linear-gradient(135deg, #0D1B52, #2C50C8)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(44,80,200,0.35), 0 0 0 8px rgba(77,196,192,0.12)',
              }}>
                <svg width="56" height="72" viewBox="0 0 24 32" fill="none" stroke="#4DC4C0" strokeWidth="1.2" style={{ filter: 'drop-shadow(0 0 10px rgba(77,196,192,0.7))', marginBottom: 8 }}>
                  <path d="M12 2C12 2 2 16 2 22A10 10 0 0 0 22 22C22 16 12 2 12 2Z"/>
                  <path d="M8 22 C8 18 16 18 16 22" strokeLinecap="round"/>
                </svg>
                <p className="font-display text-white font-bold text-lg">Mi Sur</p>
                <p style={{ color: 'rgba(77,196,192,0.9)', fontSize: 12 }}>Salud es Vida</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave to dark section */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0,30 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#04091C"/>
          </svg>
        </div>
      </section>

      {/* ── Proceso de purificación ── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #04091C 0%, #07102C 40%, #0D1B52 100%)' }}
      >
        {/* Bioluminescent particles */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${5 + (i * 6.2) % 90}%`,
              top: `${10 + (i * 13.7) % 80}%`,
              width: 3 + (i % 3),
              height: 3 + (i % 3),
              borderRadius: '50%',
              background: i % 3 === 0 ? 'rgba(77,196,192,0.8)' : i % 3 === 1 ? 'rgba(106,144,232,0.7)' : 'rgba(255,255,255,0.5)',
              animation: `particle-drift ${4 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.4) % 4}s`,
              boxShadow: `0 0 6px currentColor`,
            }} />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">Transparencia total</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Nuestro Proceso de Purificación
            </h2>
            <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto', display: 'block' }}>
              <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Pipeline timeline */}
          <div style={{ position: 'relative' }}>
            {/* Vertical connector line */}
            <div style={{
              position: 'absolute', left: 31, top: 24, bottom: 24, width: 2,
              background: 'linear-gradient(180deg, #4DC4C0, rgba(77,196,192,0.2))',
              borderRadius: 2,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {purificationSteps.map((step, i) => (
                <div
                  key={step.n}
                  style={{
                    display: 'flex', gap: 20, alignItems: 'flex-start',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(77,196,192,0.15)',
                    borderRadius: '1.25rem',
                    padding: '1.25rem 1.5rem',
                    transition: 'background 0.3s, border-color 0.3s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.background = 'rgba(77,196,192,0.1)'
                    el.style.borderColor = 'rgba(77,196,192,0.4)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.background = 'rgba(255,255,255,0.05)'
                    el.style.borderColor = 'rgba(77,196,192,0.15)'
                  }}
                >
                  {/* Step number bubble */}
                  <div style={{
                    flexShrink: 0, width: 44, height: 44, borderRadius: '50%',
                    background: i < 4 ? 'linear-gradient(135deg, #4DC4C0, #2C50C8)' : i < 7 ? 'linear-gradient(135deg, #2C50C8, #0D1B52)' : 'linear-gradient(135deg, #4DC4C0, #0D1B52)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 15, color: 'white',
                    boxShadow: '0 0 16px rgba(77,196,192,0.4)',
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'white', marginBottom: 4, fontSize: 15 }}>{step.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0,50 C360,10 1080,70 1440,30 L1440,80 L0,80 Z" fill="#f0fafb"/>
          </svg>
        </div>
      </section>

      {/* ── Valores ── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0fafb 0%, #e6f6f8 50%, #edf7f9 100%)' }}
      >
        {/* Sand dots */}
        <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}>
          <pattern id="sand2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1" fill="#1E3A8A"/><circle cx="13" cy="13" r="1.5" fill="#1E3A8A"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#sand2)"/>
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">Lo que nos define</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-5">Nuestros Valores</h2>
            <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto', display: 'block' }}>
              <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: `linear-gradient(135deg, hsla(${v.hue},60%,96%,0.9) 0%, hsla(${v.hue},50%,92%,0.85) 100%)`,
                  backdropFilter: 'blur(16px)',
                  border: `1px solid hsla(${v.hue},60%,80%,0.5)`,
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  boxShadow: `0 8px 32px hsla(${v.hue},60%,60%,0.1), inset 0 1px 0 rgba(255,255,255,0.8)`,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 20px 48px hsla(${v.hue},60%,50%,0.2), inset 0 1px 0 rgba(255,255,255,0.9)`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = ''
                  el.style.boxShadow = `0 8px 32px hsla(${v.hue},60%,60%,0.1), inset 0 1px 0 rgba(255,255,255,0.8)`
                }}
              >
                {/* Sheen */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)', borderRadius: '2rem 2rem 0 0', pointerEvents: 'none' }} />
                {/* Drop icon */}
                <svg viewBox="0 0 24 30" width="40" style={{ margin: '0 auto 16px' }}>
                  <path d={`M12 1C12 1 2 13 2 20A10 10 0 0 0 22 20C22 13 12 1 12 1Z`} fill={`hsl(${v.hue},50%,65%)`} opacity="0.7"/>
                </svg>
                <h3 className="font-display font-bold text-navy mb-3" style={{ fontSize: 20 }}>{v.title}</h3>
                <p style={{ color: '#3a5a7a', fontSize: 13, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
