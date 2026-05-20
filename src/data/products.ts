export type ProductCategory = 'Bidones' | 'Accesorios'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  description: string
  imageUrl?: string
}

export const products: Product[] = [
  {
    id: 'bidon-5',
    name: 'Bidón 5 Litros',
    category: 'Bidones',
    description: 'Bidón retornable de 5 litros. Perfecto para uso personal, escritorio o espacios pequeños. Agua purificada, alcalina y sin cloro.',
  },
  {
    id: 'bidon-10',
    name: 'Bidón 10 Litros',
    category: 'Bidones',
    description: 'Bidón retornable de 10 litros. Ideal para familias pequeñas o uso en oficina. Agua filtrada 9 veces, alcalina y libre de cloro.',
  },
  {
    id: 'bidon-20',
    name: 'Bidón 20 Litros',
    category: 'Bidones',
    description: 'Nuestro bidón más popular. 20 litros de agua purificada para familia o empresa. Delivery gratuito en tu zona.',
  },
  {
    id: 'dispensador-manual',
    name: 'Dispensador Manual',
    category: 'Accesorios',
    description: 'Dispensador de presión manual. Se instala directamente sobre el bidón y sirve el agua con solo presionar la palanca. Sin electricidad, sin pilas.',
  },
  {
    id: 'dispensador-electrico',
    name: 'Dispensador Eléctrico USB',
    category: 'Accesorios',
    description: 'Dispensador eléctrico recargable vía USB. Sirve el agua con solo presionar un botón. Silencioso, portátil y con batería de larga duración.',
  },
]
