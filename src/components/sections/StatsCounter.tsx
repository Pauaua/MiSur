'use client'
import { useEffect, useRef, useState } from 'react'
import { stats } from '@/data/stats'

function useCounter(target: number, duration = 2200) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    if (!started) return
    const step = Math.ceil(target / (duration / 16))
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])
  return { count, start: () => setStarted(true) }
}

const particles = Array.from({ length: 28 }, (_, i) => ({
  left: `${(i * 37 + 5) % 100}%`,
  top:  `${(i * 53 + 10) % 100}%`,
  size: 2 + (i % 4),
  delay: `${(i * 0.35) % 5}s`,
  dur: `${4 + (i % 4)}s`,
}))

function StatItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { count, start } = useCounter(value)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) start() }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const display = count >= 1000
    ? count >= 100000
      ? `${Math.round(count / 1000)}k`
      : `${(count / 1000).toFixed(1)}k`
    : count.toString()

  return (
    <div ref={ref} className="text-center relative">
      {/* Glow ring behind number */}
      <div style={{
        position: 'absolute', inset: 0, margin: 'auto',
        width: 120, height: 120, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(77,196,192,0.12) 0%, transparent 70%)',
        filter: 'blur(20px)',
        top: '50%', left: '50%', transform: 'translate(-50%, -60%)',
        pointerEvents: 'none',
      }} />

      {/* Bioluminescent number */}
      <div style={{
        fontSize: 'clamp(3rem, 7vw, 5rem)',
        fontWeight: 800,
        fontFamily: 'var(--font-display, Georgia, serif)',
        color: '#4DC4C0',
        animation: 'biolum 3s ease-in-out infinite',
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}>
        {display}{suffix}
      </div>

      {/* Label with subtle teal underline */}
      <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, marginBottom: 8 }}>{label}</div>
      <div style={{ width: 40, height: 2, background: 'rgba(77,196,192,0.5)', margin: '0 auto', borderRadius: 2 }} />
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #07102C 0%, #060D26 50%, #04091C 100%)' }}
    >
      {/* Bioluminescent particles */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {particles.map((p, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: p.left, top: p.top,
            width: p.size, height: p.size,
            borderRadius: '50%',
            background: '#4DC4C0',
            opacity: 0,
            boxShadow: `0 0 ${p.size * 3}px rgba(77,196,192,0.8)`,
            animation: `bubble-float ${p.dur} ease-in-out infinite alternate`,
            animationDelay: p.delay,
          }} />
        ))}
      </div>

      {/* Horizontal light band across middle */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '50%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(77,196,192,0.15) 20%, rgba(77,196,192,0.3) 50%, rgba(77,196,192,0.15) 80%, transparent)',
        pointerEvents: 'none',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p style={{ color: '#4DC4C0', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
            Números que nos avalan
          </p>
          <div style={{ width: 40, height: 1, background: 'rgba(77,196,192,0.4)', margin: '0 auto' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {stats.map((s, i) => (
            <StatItem key={i} label={s.label} value={s.value} suffix={s.suffix} />
          ))}
        </div>
      </div>
    </section>
  )
}
