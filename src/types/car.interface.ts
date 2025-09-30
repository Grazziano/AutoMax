export type FuelType =
  | 'Gasolina'
  | 'Etanol'
  | 'Flex'
  | 'Diesel'
  | 'Híbrido'
  | 'Elétrico';

export type Transmission = 'Manual' | 'Automático' | 'CVT';

export interface ICar {
  id: number;
  model: string;
  brand: string;
  year: number;
  price: number;
  mileage?: number;
  fuel_type?: FuelType;
  transmission?: Transmission;
  color?: string;
  description?: string;
  image_url?: string;
  featured?: boolean;
}
