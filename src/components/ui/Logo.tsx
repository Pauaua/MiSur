import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  inverted?: boolean
}

const sizes = { sm: 48, md: 72, lg: 80 }

export default function Logo({ size = 'md', inverted = false }: LogoProps) {
  const px = sizes[size]

  return (
    <Link href="/" aria-label="Mi Sur - Inicio">
      <Image
        src="/logo.png"
        alt="Mi Sur"
        width={px}
        height={px}
        style={{
          borderRadius: '50%',
          // Sombra blanca para visibilidad sobre fondos oscuros
          filter: inverted
            ? 'drop-shadow(0 0 6px rgba(255,255,255,0.5))'
            : 'none',
        }}
        priority
      />
    </Link>
  )
}
