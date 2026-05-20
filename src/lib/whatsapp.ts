export function buildWhatsAppLink(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function getOrderLink(productName?: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP ?? ''
  const msg = productName
    ? `Hola! Me interesa el ${productName}, quisiera más info.`
    : 'Hola! Quisiera hacer un pedido de agua purificada.'
  return buildWhatsAppLink(phone, msg)
}
