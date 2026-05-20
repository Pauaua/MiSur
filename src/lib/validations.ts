import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  phone: z.string().min(8, 'Ingresa un teléfono válido'),
  email: z.string().email('Email inválido').optional().or(z.literal('')),
  queryType: z.enum(['Pedido de agua', 'Consulta de producto', 'Dispensadores', 'Otro']),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  consent: z.literal(true, 'Debes aceptar el uso de datos'),
})

export type ContactFormData = z.infer<typeof contactSchema>
