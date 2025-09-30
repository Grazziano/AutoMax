import { Badge } from '@/components/ui/badge';
import type { ICar } from '@/types/car.interface';
import { motion } from 'framer-motion';
import { Calendar, Car, Fuel, Gauge } from 'lucide-react';

interface CarCardProps {
  car: ICar;
}

export default function CarCard({ car }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-red-600/50 transition-all group"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={
            car.image_url ||
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80'
          }
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        {car.featured && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-amber-500 border-0">
            Destaque
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {car.brand} {car.model}
            </h3>
            <p className="text-gray-400 text-sm">{car.year}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-white">
              {formatPrice(car.price)}
            </p>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Gauge className="w-4 h-4" />
            <span>{car.mileage?.toLocaleString('pt-BR') || '0'} km</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Fuel className="w-4 h-4" />
            <span>{car.fuel_type || 'Flex'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Car className="w-4 h-4" />
            <span>{car.transmission || 'Manual'}</span>
          </div>
        </div>

        {car.color && (
          <div className="mt-4">
            <Badge variant="outline" className="border-slate-700 text-gray-300">
              {car.color}
            </Badge>
          </div>
        )}
      </div>
    </motion.div>
  );
}
