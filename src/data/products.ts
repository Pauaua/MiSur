export type WaterType = 'Purificada' | 'Ionizada' | 'Alcalinizada' | 'Proteínas'
export type ContainerSize = '5L' | '10L' | '20L'

export interface WaterTypeInfo {
  type: WaterType
  title: string
  subtitle: string
  description: string
  process: string
  benefits: string[]
  idealFor: string
  color: string
  glowColor: string
  gradient: string
  badge?: string
}

export interface ContainerInfo {
  size: ContainerSize
  label: string
  containerType: 'Desechable' | 'PET Retornable'
  volume: string
  description: string
  popular?: boolean
}

export const waterTypes: WaterTypeInfo[] = [
  {
    type: 'Purificada',
    title: 'Agua Purificada',
    subtitle: 'La base de la hidratación pura',
    description:
      'Sometida a un riguroso proceso de 9 etapas que incluye sedimentación, carbón activado, ósmosis inversa, luz UV y ozonización. Libre de cloro, metales pesados y microorganismos. La pureza del agua que tu familia merece.',
    process: 'Sedimentación → Carbón Activado → Ósmosis Inversa → Luz UV → Ozonización',
    benefits: [
      'Sin cloro ni flúor',
      'Sin sodio ni metales pesados',
      'pH neutro-alcalino 7.0–7.5',
      'Libre de microorganismos',
    ],
    idealFor: 'Consumo diario familiar, preparación de alimentos y bebidas.',
    color: '#4DC4C0',
    glowColor: 'rgba(77,196,192,0.28)',
    gradient: 'linear-gradient(135deg, #062050 0%, #031030 100%)',
  },
  {
    type: 'Ionizada',
    title: 'Agua Ionizada',
    subtitle: 'Antioxidante y micromolecular',
    description:
      'Producida mediante electrólisis controlada, genera un potencial de oxidorreducción negativo (ORP) que actúa como antioxidante natural. Sus microagrupaciones moleculares penetran las células con mayor eficiencia, elevando la hidratación a nivel celular.',
    process: 'Purificación → Electrólisis → Separación Iónica → Control ORP',
    benefits: [
      'ORP negativo (antioxidante activo)',
      'Absorción celular superior',
      'pH alcalino 8.0–9.5',
      'Moléculas microagrupadas',
    ],
    idealFor: 'Personas activas, adultos mayores y quienes buscan beneficios antioxidantes.',
    color: '#6A8FFF',
    glowColor: 'rgba(106,143,255,0.28)',
    gradient: 'linear-gradient(135deg, #0a1870 0%, #060a38 100%)',
    badge: 'Premium',
  },
  {
    type: 'Alcalinizada',
    title: 'Agua Alcalinizada',
    subtitle: 'Equilibrio y vitalidad mineral',
    description:
      'Agua purificada enriquecida con minerales alcalinos naturales —calcio, magnesio y potasio— que elevan el pH de manera controlada. Contribuye a neutralizar el exceso de acidez del organismo y aporta minerales esenciales en cada sorbo.',
    process: 'Purificación → Remineralización → Alcalinización → Control de pH',
    benefits: [
      'pH alcalino controlado 8.0–8.5',
      'Rica en calcio y magnesio',
      'Neutraliza acidez corporal',
      'Sabor suave y placentero',
    ],
    idealFor: 'Estilo de vida saludable, deporte moderado y equilibrio ácido-base.',
    color: '#34D399',
    glowColor: 'rgba(52,211,153,0.28)',
    gradient: 'linear-gradient(135deg, #083020 0%, #031015 100%)',
  },
  {
    type: 'Proteínas',
    title: 'Agua con Proteínas',
    subtitle: 'Hidratación y recuperación deportiva',
    description:
      'Agua purificada formulada con proteína de suero de leche (Whey) de alta calidad o aminoácidos de cadena ramificada (BCAA). Diseñada para deportistas que necesitan recuperar músculo e hidratarse en un solo paso, sin necesidad de batidoras ni suplementos aparte.',
    process: 'Purificación → Formulación proteica → Control microbiológico → Envasado aséptico',
    benefits: [
      'Proteína de suero de alta biodisponibilidad',
      'Recuperación muscular activa',
      'Hidratación + nutrición simultánea',
      'Sin azúcar ni colorantes añadidos',
    ],
    idealFor: 'Deportistas, atletas y personas con requerimientos proteicos elevados.',
    color: '#FB923C',
    glowColor: 'rgba(251,146,60,0.28)',
    gradient: 'linear-gradient(135deg, #3a1500 0%, #1a0800 100%)',
    badge: 'Deportistas',
  },
]

export interface Accessory {
  id: string
  name: string
  subtitle: string
  description: string
  features: string[]
  compatible: string
  color: string
  glowColor: string
}

export const accessories: Accessory[] = [
  {
    id: 'dispensador-manual',
    name: 'Dispensador Manual',
    subtitle: 'Sin electricidad, sin pilas',
    description:
      'Bomba de presión manual que se instala directamente sobre el bidón. Con un solo movimiento de palanca sirves el agua con precisión, sin derramar ni contaminar. Fabricado en materiales libres de BPA.',
    features: [
      'Instalación inmediata sin herramientas',
      'Compatible con bidones 10L y 20L',
      'Libre de BPA y ftalatos',
      'Cero consumo energético',
    ],
    compatible: 'Bidones 10L y 20L',
    color: '#94A3B8',
    glowColor: 'rgba(148,163,184,0.22)',
  },
  {
    id: 'dispensador-electrico',
    name: 'Dispensador Eléctrico USB',
    subtitle: 'Un toque, agua al instante',
    description:
      'Dispensador recargable vía USB con batería de larga duración. Sirve el agua con solo presionar un botón, de forma silenciosa y precisa. Ideal para quienes buscan comodidad total en el hogar o la oficina.',
    features: [
      'Recarga USB — sin pilas desechables',
      'Operación silenciosa',
      'Batería de alta duración',
      'Libre de BPA, cabezal sellado',
    ],
    compatible: 'Bidones 10L y 20L',
    color: '#818CF8',
    glowColor: 'rgba(129,140,248,0.22)',
  },
]

export const containers: ContainerInfo[] = [
  {
    size: '5L',
    label: 'Bidón 5 Litros',
    containerType: 'Desechable',
    volume: '5 litros',
    description:
      'Envase desechable de alta barrera, ideal para uso personal, escritorio o viajes. Práctico, liviano y sin necesidad de devolución.',
  },
  {
    size: '10L',
    label: 'Bidón 10 Litros',
    containerType: 'PET Retornable',
    volume: '10 litros',
    description:
      'Envase PET retornable libre de BPA. Ideal para familias pequeñas u oficinas. Se recambia en cada entrega.',
  },
  {
    size: '20L',
    label: 'Bidón 20 Litros',
    containerType: 'PET Retornable',
    volume: '20 litros',
    description:
      'El formato más popular. Rendimiento óptimo para hogar o empresa. Envase PET retornable, libre de BPA.',
    popular: true,
  },
]
