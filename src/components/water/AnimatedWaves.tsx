const wavePath = (d: string, fill: string, opacity: number) => (
  <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
    style={{ width: '50%', height: '100%', float: 'left' as const }}>
    <path d={d} fill={fill} fillOpacity={opacity} />
  </svg>
)

export default function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* ── Caustic light blobs (simula luz filtrada bajo el agua) ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 55% 40% at 20% 35%, rgba(34,197,212,0.22) 0%, transparent 70%)',
        animation: 'caustic-a 9s ease-in-out infinite',
        mixBlendMode: 'screen',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 45% 35% at 75% 25%, rgba(59,130,196,0.20) 0%, transparent 65%)',
        animation: 'caustic-b 13s ease-in-out infinite',
        mixBlendMode: 'screen',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 35% 25% at 50% 60%, rgba(34,197,212,0.12) 0%, transparent 70%)',
        animation: 'caustic-a 7s ease-in-out infinite reverse',
        mixBlendMode: 'screen',
      }} />

      {/* ── Rayos de profundidad (god rays diagonales) ─────────── */}
      {[
        { left: '12%',  delay: '0s',   dur: '5s',  w: '180px' },
        { left: '38%',  delay: '1.8s', dur: '7s',  w: '120px' },
        { left: '62%',  delay: '0.9s', dur: '6s',  w: '200px' },
        { left: '84%',  delay: '2.4s', dur: '4.5s',w: '140px' },
      ].map((r, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: 0,
          left: r.left,
          width: r.w,
          height: '65%',
          background: 'linear-gradient(180deg, rgba(34,197,212,0.18) 0%, transparent 100%)',
          transform: 'skewX(-12deg)',
          transformOrigin: 'top center',
          animation: `depth-ray ${r.dur} ease-in-out infinite`,
          animationDelay: r.delay,
          mixBlendMode: 'screen',
          filter: 'blur(18px)',
        }} />
      ))}

      {/* ── Destello de superficie (shimmer horizontal) ─────────── */}
      <div style={{
        position: 'absolute',
        top: '18%',
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 10%, rgba(34,197,212,0.7) 40%, rgba(255,255,255,0.9) 50%, rgba(34,197,212,0.7) 60%, rgba(255,255,255,0) 90%, transparent 100%)',
        animation: 'surface-shimmer 6s ease-in-out infinite',
        filter: 'blur(2px)',
      }} />
      <div style={{
        position: 'absolute',
        top: '19%',
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(34,197,212,0.4) 35%, rgba(255,255,255,0.6) 50%, rgba(34,197,212,0.4) 65%, transparent 100%)',
        animation: 'surface-shimmer 6s ease-in-out infinite',
        animationDelay: '0.3s',
      }} />

      {/* ── Olas inferiores en 3 capas ──────────────────────────── */}
      {/* Capa 1 – navy profundo, lenta */}
      <div className="wave-animate-1 absolute bottom-0 w-[200%] h-52">
        {wavePath('M0,70 C180,110 360,30 540,70 C720,110 900,30 1080,70 C1260,110 1350,50 1440,70 L1440,120 L0,120 Z', '#2C50C8', 0.9)}
        {wavePath('M0,70 C180,110 360,30 540,70 C720,110 900,30 1080,70 C1260,110 1350,50 1440,70 L1440,120 L0,120 Z', '#2C50C8', 0.9)}
      </div>

      {/* Capa 2 – teal translúcido, velocidad media */}
      <div className="wave-animate-2 absolute bottom-0 w-[200%] h-40">
        {wavePath('M0,45 C300,85 600,10 900,50 C1100,80 1250,20 1440,45 L1440,120 L0,120 Z', '#4DC4C0', 0.45)}
        {wavePath('M0,45 C300,85 600,10 900,50 C1100,80 1250,20 1440,45 L1440,120 L0,120 Z', '#4DC4C0', 0.45)}
      </div>

      {/* Capa 3 – skyblue, rápida, muy sutil */}
      <div className="wave-animate-3 absolute bottom-0 w-[200%] h-28">
        {wavePath('M0,35 C360,65 720,10 1080,40 C1260,55 1380,20 1440,35 L1440,80 L0,80 Z', '#6A90E8', 0.28)}
        {wavePath('M0,35 C360,65 720,10 1080,40 C1260,55 1380,20 1440,35 L1440,80 L0,80 Z', '#6A90E8', 0.28)}
      </div>

    </div>
  )
}
