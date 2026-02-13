export type CandleType = '1d' | '3d' | 'VDF' | '7d';

export interface Prices {
  '1d': number;
  '3d': number;
  'VDF': number;
  '7d': number;
}

export type Category = 'Amor' | 'Limpieza' | 'Apertura' | 'Protección' | 'Dominio' | 'Prosperidad' | 'Justicia' | 'Salud';

export interface Ritual {
  id: string;
  name: string;
  description: string;
  category: Category;
  prices: Prices;
  imageUrl?: string;
  popular?: boolean;
}

export interface AdminState {
  isAuthenticated: boolean;
  user: string | null;
}