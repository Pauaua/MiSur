'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/productos', label: 'Productos' },
  { href: '/noticias', label: 'Noticias' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const waLink = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP ?? '',
    'Hola! Quisiera hacer un pedido de agua purificada.'
  )

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? { backdropFilter: 'blur(16px)', background: 'rgba(255,255,255,0.92)', boxShadow: '0 1px 20px rgba(30,58,138,0.1)' }
          : { background: 'transparent' }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo */}
        <Logo size="md" inverted={!scrolled} />

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-teal ${scrolled ? 'text-navy' : 'text-white'}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-teal text-white text-sm font-semibold px-4 py-2 rounded-full btn-ripple hover:opacity-90 transition-opacity"
        >
          <WhatsAppIcon />
          Pedir ahora
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded ${scrolled ? 'text-navy' : 'text-white'}`}
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 mb-1.5 transition-all bg-current ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 mb-1.5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}
        style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)' }}
      >
        <nav className="flex flex-col px-4 py-4 gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-navy font-medium py-1 border-b border-cream"
            >
              {label}
            </Link>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal text-white font-semibold px-4 py-2 rounded-full w-fit"
          >
            <WhatsAppIcon />
            Pedir ahora
          </a>
        </nav>
      </div>
    </header>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.512 5.83L0 24l6.334-1.49A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.37l-.359-.214-3.757.884.937-3.657-.234-.376A9.818 9.818 0 1112 21.818z"/>
    </svg>
  )
}
