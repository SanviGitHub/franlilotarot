import { Ritual } from './types';

export const INITIAL_RITUALS: Ritual[] = [
  {
    id: 'union-vinculo',
    name: 'Unión de Vínculo',
    description: 'Ritual sagrado para fusionar energías dispersas y consoldiar la relación.',
    category: 'Amor',
    popular: true,
    prices: {
      '1d': 0,
      '3d': 0,
      'VDF': 30000,
      '7d': 0
    }
  },
  {
    id: 'endulzamiento',
    name: 'Endulzamiento',
    description: 'Suaviza el carácter, elimina el orgullo y fomenta la comunicación dulce.',
    category: 'Amor',
    prices: {
      '1d': 10000,
      '3d': 25000,
      'VDF': 35000,
      '7d': 45000
    }
  },
  {
    id: 'retorno',
    name: 'Retorno de Pareja',
    description: 'Para recuperar el vínculo perdido cuando aún hay sentimientos pero existen bloqueos.',
    category: 'Amor',
    prices: {
      '1d': 10000,
      '3d': 25000,
      'VDF': 35000,
      '7d': 45000
    }
  },
  {
    id: 'enamoramiento',
    name: 'Enamoramiento',
    description: 'Despierta sentimientos profundos y románticos en la persona deseada.',
    category: 'Amor',
    prices: {
      '1d': 10000,
      '3d': 25000,
      'VDF': 35000,
      '7d': 45000
    }
  },
  {
    id: 'amarres',
    name: 'Amarres de Amor',
    description: 'Vinculación energética fuerte para asegurar la permanencia de la pareja.',
    category: 'Dominio',
    popular: true,
    prices: {
      '1d': 15000,
      '3d': 35000,
      'VDF': 45000,
      '7d': 65000
    }
  },
  {
    id: 'desespero',
    name: 'Desespero',
    description: 'Genera una necesidad imperiosa de contacto y presencia en la otra persona.',
    category: 'Dominio',
    prices: {
      '1d': 15000,
      '3d': 35000,
      'VDF': 45000,
      '7d': 65000
    }
  },
  {
    id: 'desespero-sexual',
    name: 'Desespero Sexual',
    description: 'Potencia el deseo carnal y la atracción magnética irresistible.',
    category: 'Dominio',
    prices: {
      '1d': 0,
      '3d': 0,
      'VDF': 50000,
      '7d': 0
    }
  },
  {
    id: 'trabajo-sexual',
    name: 'Trabajo Sexual',
    description: 'Ritual enfocado puramente en la intimidad y el fuego de la pasión.',
    category: 'Dominio',
    prices: {
      '1d': 15000,
      '3d': 35000,
      'VDF': 45000,
      '7d': 65000
    }
  },
  {
    id: 'atraccion',
    name: 'Atracción Magnética',
    description: 'Para hacer que las personas a tu alrededor se sientan atraídas hacia vos.',
    category: 'Apertura',
    prices: {
      '1d': 10000,
      '3d': 25000,
      'VDF': 30000,
      '7d': 40000
    }
  },
  {
    id: 'comunicacion',
    name: 'Trabajo de Comunicación',
    description: 'Desbloquea el diálogo y permite que fluyan las palabras y el entendimiento.',
    category: 'Apertura',
    prices: {
      '1d': 10000,
      '3d': 25000,
      'VDF': 35000,
      '7d': 45000
    }
  },
  {
    id: 'autoendulzamiento',
    name: 'Autoendulzamiento',
    description: 'Para sanar tu propia energía, amarte más y proyectar dulzura.',
    category: 'Limpieza',
    prices: {
      '1d': 5000,
      '3d': 15000,
      'VDF': 25000,
      '7d': 35000
    }
  },
  {
    id: 'abrecaminos-amor',
    name: 'Abrecaminos en el Amor',
    description: 'Elimina la mala racha amorosa y atrae nuevas oportunidades.',
    category: 'Apertura',
    prices: {
      '1d': 5000,
      '3d': 15000,
      'VDF': 25000,
      '7d': 35000
    }
  },
  {
    id: 'combo-completo',
    name: 'Combo: Abrecaminos + Autoendulzamiento + Atracción + Empoderamiento',
    description: 'Paquete completo para renovar tu energía amorosa y magnética.',
    category: 'Apertura',
    popular: true,
    prices: {
      '1d': 0,
      '3d': 0,
      'VDF': 35000,
      '7d': 0
    }
  },
  {
    id: 'separacion-terceros',
    name: 'Separación de Terceros',
    description: 'Aleja intrusos o personas que interfieren. Corte definitivo.',
    category: 'Protección',
    prices: {
      '1d': 15000,
      '3d': 0,
      'VDF': 0,
      '7d': 0
    }
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