'use client'
import { getOrderLink } from '@/lib/whatsapp'

export default function WhatsAppFloat() {
  return (
    <a
      href={getOrderLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="pulse-glow"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 999,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.12)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = '' }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.512 5.83L0 24l6.334-1.49A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.37l-.359-.214-3.757.884.937-3.657-.234-.376A9.818 9.818 0 1112 21.818z"/>
      </svg>
    </a>
  )
}
