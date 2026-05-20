const bubbles = [
  { size: 120, top: '10%', left: '5%',  delay: '0s',    duration: '5s', color: '#22C5D4' },
  { size: 80,  top: '60%', left: '8%',  delay: '1.5s',  duration: '4s', color: '#3B82C4' },
  { size: 200, top: '20%', left: '80%', delay: '0.5s',  duration: '7s', color: '#22C5D4' },
  { size: 60,  top: '70%', left: '75%', delay: '2s',    duration: '4.5s', color: '#3B82C4' },
  { size: 140, top: '40%', left: '45%', delay: '1s',    duration: '6s', color: '#22C5D4' },
  { size: 90,  top: '80%', left: '30%', delay: '2.5s',  duration: '5.5s', color: '#3B82C4' },
]

export default function Bubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="bubble-float absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: b.color,
            opacity: 0.06,
            filter: 'blur(40px)',
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </div>
  )
}
