import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../cars/CarCard';
import { CARS } from '@/data/cars';
import type { ICar } from '@/types/car.interface';

export default function FeaturedCars() {
  const [cars, setCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchCars() {
    setLoading(true);
    try {
      const data = CARS;
      setCars(data);
    } catch (error) {
      console.error('Erro ao buscar veículos em destaque:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-red-500" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Veículos em Destaque
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira nossa seleção especial de veículos com as melhores condições
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>

        {cars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Nenhum veículo em destaque no momento
            </p>
          </div>
        )}

        <div className="text-center">
          <Link to={'veiculos'}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
            >
              Ver Todos os Veículos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
