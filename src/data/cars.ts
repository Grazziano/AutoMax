import type { FuelType, ICar, Transmission } from '@/types/car.interface';

const cars = [
  {
    model: 'Civic',
    brand: 'Honda',
    year: 2023,
    price: 145900,
    mileage: 0,
    fuel_type: 'Flex',
    transmission: 'Automático',
    color: 'Prata Metálico',
    description:
      'Honda Civic Touring 2023 com acabamento premium, teto solar, sistema multimídia completo e assistentes de direção.',
    image_url:
      'https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
  },
  {
    model: 'Corolla',
    brand: 'Toyota',
    year: 2022,
    price: 132500,
    mileage: 15000,
    fuel_type: 'Flex',
    transmission: 'Automático',
    color: 'Branco',
    description:
      'Toyota Corolla XEI 2022, único dono, revisões em concessionária, completo com todos os opcionais.',
    image_url:
      'https://images.unsplash.com/photo-1621968175389-f1a0c0692cdc?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
  },
  {
    model: 'Onix',
    brand: 'Chevrolet',
    year: 2024,
    price: 85900,
    mileage: 0,
    fuel_type: 'Flex',
    transmission: 'Manual',
    color: 'Vermelho',
    description:
      'Chevrolet Onix LT 2024 0km, ar-condicionado, direção elétrica e conectividade Android Auto/Apple CarPlay.',
    image_url:
      'https://images.unsplash.com/photo-1725565959456-5963c54ed584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hldnJvbGV0JTIwb25peHxlbnwwfHwwfHx8MA%3D%3D',
    featured: false,
  },
  {
    model: 'T-Cross',
    brand: 'Volkswagen',
    year: 2023,
    price: 127800,
    mileage: 8000,
    fuel_type: 'Flex',
    transmission: 'Automático',
    color: 'Azul',
    description:
      'Volkswagen T-Cross Highline 2023, SUV compacto com teto panorâmico, sensores de estacionamento e central multimídia.',
    image_url:
      'https://images.unsplash.com/photo-1620616756605-96f0b13532c1?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
  },
  {
    model: 'HB20',
    brand: 'Hyundai',
    year: 2021,
    price: 68900,
    mileage: 35000,
    fuel_type: 'Flex',
    transmission: 'Automático',
    color: 'Cinza',
    description:
      'Hyundai HB20S Platinum 2021, bem conservado, pneus novos, documentação em dia.',
    image_url:
      'https://images.unsplash.com/photo-1645145214095-84fca73e0cc5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: false,
  },
  {
    model: 'Ranger',
    brand: 'Ford',
    year: 2022,
    price: 189900,
    mileage: 25000,
    fuel_type: 'Diesel',
    transmission: 'Automático',
    color: 'Preto',
    description:
      'Ford Ranger XLT 2022 4x4, cabine dupla, turbo diesel, ideal para trabalho e aventura.',
    image_url:
      'https://images.unsplash.com/photo-1700943937372-12c2611b5af8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: false,
  },
  {
    model: 'Model 3',
    brand: 'Tesla',
    year: 2023,
    price: 299000,
    mileage: 5000,
    fuel_type: 'Elétrico',
    transmission: 'Automático',
    color: 'Branco',
    description:
      'Tesla Model 3 Long Range 2023, autonomia de 602km, piloto automático completo, teto de vidro.',
    image_url:
      'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
  },
  {
    model: 'Compass',
    brand: 'Jeep',
    year: 2023,
    price: 178500,
    mileage: 12000,
    fuel_type: 'Flex',
    transmission: 'Automático',
    color: 'Verde',
    description:
      'Jeep Compass Limited 2023, tração 4x4, sistema Uconnect, bancos em couro e teto solar.',
    image_url:
      'https://images.unsplash.com/photo-1642047826426-a9d091ddca6e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: false,
  },
  {
    model: 'Kicks',
    brand: 'Nissan',
    year: 2022,
    price: 112000,
    mileage: 18000,
    fuel_type: 'Flex',
    transmission: 'CVT',
    color: 'Laranja',
    description:
      'Nissan Kicks SV 2022, design moderno, interior espaçoso, excelente consumo de combustível.',
    image_url:
      'https://images.unsplash.com/photo-1687730594701-88cdea1ef5ae?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: false,
  },
  {
    model: 'Prius',
    brand: 'Toyota',
    year: 2023,
    price: 165000,
    mileage: 3000,
    fuel_type: 'Híbrido',
    transmission: 'CVT',
    color: 'Prata',
    description:
      'Toyota Prius 2023, tecnologia híbrida, baixo consumo, emissões reduzidas e design futurista.',
    image_url:
      'https://images.unsplash.com/photo-1697316052164-6b832d49516c?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
  },
  {
    model: '320i',
    brand: 'BMW',
    year: 2021,
    price: 245000,
    mileage: 22000,
    fuel_type: 'Gasolina',
    transmission: 'Automático',
    color: 'Preto',
    description:
      'BMW Série 3 320i 2021, luxo e performance, pacote M Sport, bancos em couro, navegador.',
    image_url:
      'https://images.unsplash.com/photo-1606173929045-3dd85676897b?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: false,
  },
  {
    model: 'A3',
    brand: 'Audi',
    year: 2022,
    price: 228000,
    mileage: 15000,
    fuel_type: 'Gasolina',
    transmission: 'Automático',
    color: 'Cinza',
    description:
      'Audi A3 Sportback 2022, design esportivo, tecnologia virtual cockpit, acabamento premium.',
    image_url:
      'https://images.unsplash.com/photo-1628277559460-cf6ab4f0016b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
  },
];

export const CARS: ICar[] = cars.map((car, index) => {
  return {
    ...car,
    id: index,
    fuel_type: car.fuel_type as FuelType | undefined,
    transmission: car.transmission as Transmission | undefined,
  };
});
