import { Ritual } from './types';

// CAMBIAR ESTO cada vez que modifiques la lista de rituales manualmente
// para obligar a los navegadores a actualizar sus datos guardados.
export const DATA_VERSION = 'v1.5-catalog-update'; 

export const INITIAL_RITUALS: Ritual[] = [
  // --- AMOR ---
  {
    id: 'union-vinculo',
    name: 'Unión de Vínculo',
    description: 'Ritual sagrado para fusionar energías dispersas y consolidar la relación.',
    category: 'Amor',
    popular: true,
    prices: { '1d': 0, '3d': 0, 'VDF': 30000, '7d': 0 }
  },
  {
    id: 'endulzamiento',
    name: 'Endulzamiento',
    description: 'Suaviza el carácter, elimina el orgullo y fomenta la comunicación dulce.',
    category: 'Amor',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 35000, '7d': 45000 }
  },
  {
    id: 'retorno',
    name: 'Retorno de Pareja',
    description: 'Para recuperar el vínculo perdido cuando aún hay sentimientos pero existen bloqueos.',
    category: 'Amor',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 35000, '7d': 45000 }
  },
  {
    id: 'enamoramiento',
    name: 'Enamoramiento',
    description: 'Despierta sentimientos profundos y románticos en la persona deseada.',
    category: 'Amor',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 35000, '7d': 45000 }
  },
  {
    id: 'sanacion-vinculo',
    name: 'Sanación de Vínculo',
    description: 'Reparación de heridas emocionales y rencores en la pareja para avanzar sanamente.',
    category: 'Amor',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 35000, '7d': 45000 }
  },
  {
    id: 'abrecaminos-amor-vinculo',
    name: 'Abrecaminos al Vínculo',
    description: 'Apertura de oportunidades y superación de obstáculos dentro de la pareja.',
    category: 'Amor',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 35000, '7d': 45000 }
  },
  {
    id: 'corte-vinculos',
    name: 'Corte de Vínculos',
    description: 'Para cortar el lazo energético entre vos y alguien más de forma definitiva.',
    category: 'Amor',
    prices: { '1d': 0, '3d': 0, 'VDF': 10000, '7d': 0 }
  },

  // --- LIMPIEZA & PROTECCIONES ---
  {
    id: 'limpieza-energetica',
    name: 'Limpieza Energética',
    description: 'Purificación profunda del aura y cuerpos sutiles para eliminar pesadez.',
    category: 'Limpieza',
    prices: { '1d': 5000, '3d': 15000, 'VDF': 25000, '7d': 35000 }
  },
  {
    id: 'limpieza-vincular',
    name: 'Limpieza Vincular',
    description: 'Elimina cargas negativas, envidias y bloqueos externos que afectan la relación.',
    category: 'Limpieza',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 35000, '7d': 45000 }
  },
  {
    id: 'limpieza-emprendimiento',
    name: 'Limpieza de Trabajo/Emprendimiento',
    description: 'Destrabe energético para negocios, eliminando malas vibras de clientes o competencia.',
    category: 'Limpieza',
    prices: { '1d': 5000, '3d': 15000, 'VDF': 25000, '7d': 35000 }
  },
  {
    id: 'limpieza-hogar',
    name: 'Limpieza y Armonización de Hogar',
    description: 'Restauración energética completa de los espacios de tu casa.',
    category: 'Limpieza',
    prices: { '1d': 0, '3d': 0, 'VDF': 25000, '7d': 0 }
  },
  {
    id: 'autoendulzamiento',
    name: 'Autoendulzamiento',
    description: 'Para sanar tu propia energía, amarte más y proyectar dulzura.',
    category: 'Limpieza',
    prices: { '1d': 5000, '3d': 15000, 'VDF': 25000, '7d': 35000 }
  },
  {
    id: 'desintoxicacion',
    name: 'Desintoxicación',
    description: 'Para limpiarte, protegerte y disolver vínculos que te tiren mala energía.',
    category: 'Limpieza',
    prices: { '1d': 7500, '3d': 18500, 'VDF': 0, '7d': 35000 }
  },
  {
    id: 'proteccion',
    name: 'Protección Personal',
    description: 'Escudo energético contra envidias, mal de ojo y vibraciones bajas.',
    category: 'Protecciones',
    prices: { '1d': 5000, '3d': 15000, 'VDF': 25000, '7d': 35000 }
  },
  {
    id: 'proteccion-vinculo',
    name: 'Protección al Vínculo',
    description: 'Resguarda la relación de influencias externas negativas y terceros.',
    category: 'Protecciones',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 35000, '7d': 45000 }
  },
  {
    id: 'trabajo-ajo',
    name: 'Trabajo de Ajo',
    description: 'Para limpiarte, protegerte, y que toda persona que te envidie se resfríe.',
    category: 'Protecciones',
    prices: { '1d': 10000, '3d': 0, 'VDF': 0, '7d': 0 }
  },
  {
    id: 'congelamiento',
    name: 'Congelamiento',
    description: 'Para que una persona se aleje, o para congelar sentimientos o maldades hacia vos.',
    category: 'Protecciones',
    prices: { '1d': 0, '3d': 0, 'VDF': 15000, '7d': 0 }
  },
  {
    id: 'separacion-terceros',
    name: 'Separación de Terceros',
    description: 'Aleja intrusos o personas que interfieren. Corte definitivo.',
    category: 'Protecciones',
    prices: { '1d': 0, '3d': 0, 'VDF': 15000, '7d': 0 }
  },

  // --- DIFERENTES TRABAJOS & DINERO ---
  {
    id: 'abrecaminos-general',
    name: 'Abrecaminos General',
    description: 'Destrabe para avanzar en la vida y eliminar la mala racha.',
    category: 'Diferentes Trabajos',
    prices: { '1d': 5000, '3d': 15000, 'VDF': 25000, '7d': 35000 }
  },
  {
    id: 'abrecaminos-amor',
    name: 'Abrecaminos en el Amor',
    description: 'Atrae nuevas oportunidades amorosas y renueva tu magnetismo.',
    category: 'Amor',
    prices: { '1d': 5000, '3d': 15000, 'VDF': 25000, '7d': 35000 }
  },
  {
    id: 'atraccion',
    name: 'Atracción Magnética',
    description: 'Para hacer que las personas a tu alrededor se sientan atraídas hacia vos.',
    category: 'Amor',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 30000, '7d': 40000 }
  },
  {
    id: 'comunicacion',
    name: 'Trabajo de Comunicación',
    description: 'Desbloquea el diálogo y permite que fluyan las palabras y el entendimiento.',
    category: 'Amor',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 35000, '7d': 45000 }
  },
  {
    id: 'trabajo-estudio',
    name: 'Trabajo de Estudio',
    description: 'Foco, memoria y éxito académico para exámenes o carreras.',
    category: 'Diferentes Trabajos',
    prices: { '1d': 5000, '3d': 15000, 'VDF': 25000, '7d': 35000 }
  },
  {
    id: 'trabajo-prosperidad',
    name: 'Trabajo de Prosperidad',
    description: 'Potenciador para metas materiales concretas (ej. comprarse un auto).',
    category: 'Trabajo de Dinero',
    prices: { '1d': 0, '3d': 0, 'VDF': 15000, '7d': 0 }
  },
  {
    id: 'venta-propiedad',
    name: 'Venta de Hogar/Terreno',
    description: 'Energía focalizada para acelerar transacciones inmobiliarias.',
    category: 'Trabajo de Dinero',
    prices: { '1d': 0, '3d': 0, 'VDF': 25000, '7d': 0 }
  },
  {
    id: 'combo-completo',
    name: 'Combo: Abrecaminos + Autoendulzamiento + Atracción + Empoderamiento',
    description: 'Paquete completo para renovar tu energía amorosa y magnética.',
    category: 'Diferentes Trabajos',
    popular: true,
    prices: { '1d': 0, '3d': 0, 'VDF': 35000, '7d': 0 }
  },

  // --- TRABAJO DE MAGIA NEGRA ---
  {
    id: 'amarres',
    name: 'Amarres de Amor',
    description: 'Vinculación energética fuerte para asegurar la permanencia de la pareja.',
    category: 'Trabajo de Magia Negra',
    popular: true,
    prices: { '1d': 15000, '3d': 35000, 'VDF': 45000, '7d': 65000 }
  },
  {
    id: 'desespero',
    name: 'Desespero',
    description: 'Genera una necesidad imperiosa de contacto y presencia en la otra persona.',
    category: 'Trabajo de Magia Negra',
    prices: { '1d': 15000, '3d': 35000, 'VDF': 45000, '7d': 65000 }
  },
  {
    id: 'desespero-sexual',
    name: 'Desespero Sexual',
    description: 'Potencia el deseo carnal y la atracción magnética irresistible.',
    category: 'Trabajo de Magia Negra',
    prices: { '1d': 0, '3d': 0, 'VDF': 50000, '7d': 0 }
  },
  {
    id: 'trabajo-sexual',
    name: 'Trabajo Sexual',
    description: 'Ritual enfocado puramente en la intimidad y el fuego de la pasión.',
    category: 'Trabajo de Magia Negra',
    prices: { '1d': 15000, '3d': 35000, 'VDF': 45000, '7d': 65000 }
  },
  {
    id: 'desarmonia-vinculos',
    name: 'Desarmonía de Vínculos',
    description: 'Lograr que 2 personas se peleen y se genere conflicto.',
    category: 'Trabajo de Magia Negra',
    prices: { '1d': 0, '3d': 0, 'VDF': 35000, '7d': 0 }
  },
  {
    id: 'cierre-caminos',
    name: 'Cierre de Caminos Económico',
    description: 'Bloqueo del flujo económico de un objetivo.',
    category: 'Trabajo de Magia Negra',
    prices: { '1d': 0, '3d': 0, 'VDF': 25000, '7d': 0 }
  },
  {
    id: 'trabajo-cementerio',
    name: 'Trabajo de Cementerio',
    description: 'Ritual de máxima potencia y oscuridad. Consultar antes de realizar.',
    category: 'Trabajo de Magia Negra',
    prices: { '1d': 0, '3d': 0, 'VDF': 250000, '7d': 0 }
  },

  // --- DIFERENTES TRABAJOS ---
  {
    id: 'trabajo-judicial',
    name: 'Trabajo Judicial',
    description: 'Apoyo energético para trámites legales, juicios y resoluciones a favor.',
    category: 'Diferentes Trabajos',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 35000, '7d': 40000 }
  },
  {
    id: 'trabajo-ataud',
    name: 'Trabajo de Ataúd',
    description: 'Para que una persona pague por lo que hizo y el daño se devuelva infinito.',
    category: 'Diferentes Trabajos',
    prices: { '1d': 0, '3d': 0, 'VDF': 25000, '7d': 0 }
  },
  {
    id: 'volteo-danos',
    name: 'Volteo de Daños/Brujerías',
    description: 'Devuelve cualquier daño o trabajo oscuro a su origen.',
    category: 'Diferentes Trabajos',
    prices: { '1d': 10000, '3d': 25000, 'VDF': 30000, '7d': 40000 }
  },
  {
    id: 'armonizacion-chakras',
    name: 'Armonización de Chakras',
    description: 'Alineación de centros energéticos para bienestar integral.',
    category: 'Diferentes Trabajos',
    prices: { '1d': 0, '3d': 0, 'VDF': 7500, '7d': 0 }
  },
  {
    id: 'trabajo-salud',
    name: 'Trabajo de Salud',
    description: 'Fortalecimiento energético para acompañar procesos de sanación física.',
    category: 'Diferentes Trabajos',
    prices: { '1d': 5000, '3d': 15000, 'VDF': 25000, '7d': 35000 }
  },
  {
    id: 'trabajo-fertilidad',
    name: 'Trabajo de Fertilidad',
    description: 'Apertura energética para favorecer la concepción.',
    category: 'Diferentes Trabajos',
    prices: { '1d': 0, '3d': 0, 'VDF': 20000, '7d': 0 }
  }
];

export const CANDLE_INFO = [
  {
    type: '1d',
    title: 'Iniciación (1 Día)',
    desc: 'Vela simple para peticiones rápidas o mantenimiento de energía.',
    color: 'border-white/30'
  },
  {
    type: '3d',
    title: 'Intermedio (3 Días)',
    desc: 'Trabajo sostenido. Ideal para situaciones recientes.',
    color: 'border-mystic-purple/50'
  },
  {
    type: 'VDF',
    title: 'Fuerza Mayor (VDF)',
    desc: 'Velón de Fuerza. Recomendado. Alta concentración de energía.',
    color: 'border-mystic-gold/70'
  },
  {
    type: '7d',
    title: 'Supremo (7 Días)',
    desc: 'Ritual completo de semana. La máxima potencia para casos difíciles.',
    color: 'border-mystic-gold'
  }
];