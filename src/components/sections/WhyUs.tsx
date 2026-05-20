'use client'
import { useRef } from 'react'

const features = [
  {
    icon: 'filter',
    title: 'Filtrada 9 veces',
    desc: 'Proceso de purificación multicapa que garantiza agua cristalina y libre de impurezas.',
    delay: '0s',
  },
  {
    icon: 'molecule',
    title: 'Alcalina & sin cloro',
    desc: 'pH alcalino óptimo para tu salud. Sin cloro, sin sodio, sin sabores artificiales.',
    delay: '0.15s',
  },
  {
    icon: 'truck',
    title: 'Delivery gratuito',
    desc: 'Entregamos en tu puerta sin costo adicional dentro de Quilicura. Horarios flexibles según tu comodidad.',
    delay: '0.3s',
  },
  {
    icon: 'heart',
    title: 'Salud y vida',
    desc: 'Cada bidón es un compromiso con tu bienestar y el de tu familia.',
    delay: '0.45s',
  },
]

const icons: Record<string, React.ReactNode> = {
  filter: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 3H2l8 9.46V19l4 2V12.46L22 3z"/>
    </svg>
  ),
  molecule: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/>
      <circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/>
      <line x1="9.5" y1="10.5" x2="5.5" y2="7.5"/><line x1="14.5" y1="10.5" x2="18.5" y2="7.5"/>
      <line x1="9.5" y1="13.5" x2="5.5" y2="16.5"/><line x1="14.5" y1="13.5" x2="18.5" y2="16.5"/>
    </svg>
  ),
  truck: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  heart: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
    </svg>
  ),
}

const dripDrops = [
  { left: '7%',  top: '8%',  size: 18, delay: '0s',   dur: '3.5s' },
  { left: '21%', top: '4%',  size: 12, delay: '1.2s', dur: '4s' },
  { left: '71%', top: '7%',  size: 20, delay: '0.5s', dur: '3s' },
  { left: '87%', top: '11%', size: 14, delay: '2s',   dur: '4.5s' },
  { left: '50%', top: '3%',  size: 10, delay: '0.8s', dur: '3.8s' },
]

function DropShape({ size = 24, color = '#4DC4C0', opacity = 1 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={Math.round(size * 1.3)} viewBox="0 0 24 32" fill={color} style={{ opacity }}>
      <path d="M12 0C12 0 1 14 1 21A11 11 0 0 0 23 21C23 14 12 0 12 0Z"/>
    </svg>
  )
}

function RippleCard({ f }: { f: typeof features[0] }) {
  const rippleRef = useRef<HTMLDivElement>(null)

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = rippleRef.current
    if (!el) return
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    el.style.left = `${e.clientX - rect.left}px`
    el.style.top  = `${e.clientY - rect.top}px`
    el.style.animation = 'none'
    void el.offsetHeight
    el.style.animation = 'drop-ripple 0.75s ease-out forwards'
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      className="group relative overflow-hidden cursor-pointer select-none"
      style={{
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(34,197,212,0.22)',
        borderRadius: '1.75rem',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        boxShadow: '0 4px 24px rgba(30,58,138,0.07)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        const t = e.currentTarget as HTMLDivElement
        t.style.transform = 'translateY(-6px)'
        t.style.boxShadow = '0 18px 48px rgba(34,197,212,0.18)'
      }}
      onMouseLeave={e => {
        const t = e.currentTarget as HTMLDivElement
        t.style.transform = ''
        t.style.boxShadow = '0 4px 24px rgba(30,58,138,0.07)'
      }}
    >
      {/* click ripple */}
      <div
        ref={rippleRef}
        style={{
          position: 'absolute',
          width: 60, height: 60,
          marginLeft: -30, marginTop: -30,
          borderRadius: '50%',
          background: 'rgba(34,197,212,0.28)',
          pointerEvents: 'none',
          opacity: 0,
        }}
      />
      {/* decorative micro-drop top-right */}
      <div style={{ position: 'absolute', top: 14, right: 16, opacity: 0.1, transform: 'rotate(15deg)' }}>
        <DropShape size={32} color="#2C50C8" />
      </div>

      {/* icon in drop-shaped container */}
      <div className="flex justify-center mb-6">
        <div
          className="group-hover:scale-110 transition-transform duration-300"
          style={{
            width: 72, height: 88,
            background: 'linear-gradient(160deg, rgba(34,197,212,0.18) 0%, rgba(59,130,196,0.08) 100%)',
            clipPath: 'path("M36 4C36 4 8 30 8 48A28 28 0 0 0 64 48C64 30 36 4 36 4Z")',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#4DC4C0',
            paddingTop: 18,
          }}
        >
          {icons[f.icon]}
        </div>
      </div>

      <h3 className="font-display text-xl font-bold text-navy mb-3">{f.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section
      id="por-que-elegirnos"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#eaf6fb 0%,#f0f9ff 50%,#e8f4f8 100%)' }}
    >
      {/* Subtle wave ripple texture in background */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.055, pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {[0,1,2,3,4,5].map(n => (
          <path
            key={n}
            d={`M0,${60+n*80} C240,${40+n*80} 480,${80+n*80} 720,${60+n*80} C960,${40+n*80} 1200,${80+n*80} 1440,${60+n*80}`}
            fill="none" stroke="#2C50C8" strokeWidth="1.5"
          />
        ))}
      </svg>

      {/* Dripping drops */}
      {dripDrops.map((d, i) => (
        <div key={i} style={{
          position: 'absolute', left: d.left, top: d.top,
          animation: `drip ${d.dur} ease-in infinite`,
          animationDelay: d.delay,
          opacity: 0,
          pointerEvents: 'none',
        }}>
          <DropShape size={d.size} color="#4DC4C0" opacity={0.5} />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">Nuestra diferencia</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-5">
            ¿Por qué elegirnos?
          </h2>
          {/* Wave underline instead of straight line */}
          <svg viewBox="0 0 140 16" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, margin: '0 auto', display: 'block' }}>
            <path d="M0,8 C18,2 35,14 52,8 C69,2 86,14 103,8 C120,2 132,14 140,8" fill="none" stroke="#4DC4C0" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((f, i) => <RippleCard key={i} f={f} />)}
        </div>
      </div>
    </section>
  )
}
