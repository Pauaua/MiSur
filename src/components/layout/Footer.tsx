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

export default function Footer() {
  const waLink = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP ?? '',
    'Hola! Quisiera hacer un pedido.'
  )

  return (
    <>
      {/* Wave top */}
      <div style={{ lineHeight: 0, backgroundColor: '#F5F7FA' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#0D1B52" />
        </svg>
      </div>

      <footer style={{ backgroundColor: '#0D1B52' }} className="text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <Logo size="lg" inverted />
              <p className="mt-3 text-teal text-sm font-semibold tracking-widest uppercase">
                Salud es Vida
              </p>
              <p className="mt-2 text-sm text-white/70 max-w-xs">
                Agua purificada de calidad, directo a tu hogar u oficina. Filtrada 9 veces. Alcalina y sin cloro.
              </p>
            </div>

            {/* Nav */}
            <div>
              <h3 className="font-semibold mb-4 text-teal">Navegación</h3>
              <ul className="space-y-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/70 hover:text-teal transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-teal">Contacto</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal transition-colors">
                    <WhatsAppIcon /> +{process.env.NEXT_PUBLIC_WHATSAPP}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${process.env.CONTACT_EMAIL}`} className="hover:text-teal transition-colors">
                    {process.env.CONTACT_EMAIL ?? 'contacto@aguasmisur.cl'}
                  </a>
                </li>
                <li className="flex items-center gap-3 pt-2">
                  <a
                    href={`https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM ?? 'aguasmisur'}`}
                    target="_blank" rel="noopener noreferrer"
                    className="hover:text-teal transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={`https://facebook.com/${process.env.NEXT_PUBLIC_FACEBOOK ?? 'aguas.misur'}`}
                    target="_blank" rel="noopener noreferrer"
                    className="hover:text-teal transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Mi Sur. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.512 5.83L0 24l6.334-1.49A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.37l-.359-.214-3.757.884.937-3.657-.234-.376A9.818 9.818 0 1112 21.818z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
