import { useEffect, useState } from 'react';
import CarFilters from './components/cars/CarFilters';
import { Loader2 } from 'lucide-react';
import CarCard from './components/cars/CarCard';
import { CARS } from '@/data/cars';
import type { ICar } from '@/types/car.interface';

export default function Vehicles() {
  const [cars, setCars] = useState<ICar[]>([]);
  const [filteredCars, setFilteredCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    brand: '',
    yearFrom: '',
    yearTo: '',
    priceMin: '',
    priceMax: '',
    fuelType: '',
  });

  useEffect(() => {
    loadCars();
  }, []);

  useEffect(() => {
    let result = [...cars];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (car) =>
          car.model?.toLowerCase().includes(searchLower) ||
          car.brand?.toLowerCase().includes(searchLower)
      );
    }

    if (filters.brand) {
      result = result.filter((car) => car.brand === filters.brand);
    }

    if (filters.yearFrom) {
      result = result.filter((car) => car.year >= parseInt(filters.yearFrom));
    }

    if (filters.yearTo) {
      result = result.filter((car) => car.year <= parseInt(filters.yearTo));
    }

    if (filters.priceMin) {
      result = result.filter(
        (car) => car.price >= parseFloat(filters.priceMin)
      );
    }

    if (filters.priceMax) {
      result = result.filter(
        (car) => car.price <= parseFloat(filters.priceMax)
      );
    }

    if (filters.fuelType) {
      result = result.filter((car) => car.fuel_type === filters.fuelType);
    }

    setFilteredCars(result);
  }, [cars, filters]);

  const loadCars = () => {
    const data = CARS;
    setCars(data);
    setLoading(false);
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      brand: '',
      yearFrom: '',
      yearTo: '',
      priceMin: '',
      priceMax: '',
      fuelType: '',
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Veículos
          </h1>
          <p className="text-gray-400 text-lg">
            Encontre o veículo perfeito para você
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CarFilters
                filters={filters}
                setFilters={setFilters}
                onClear={clearFilters}
              />
            </div>
          </div>

          {/* Cars Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-red-500" />
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <p className="text-gray-400">
                    {filteredCars.length}{' '}
                    {filteredCars.length === 1
                      ? 'veículo encontrado'
                      : 'veículos encontrados'}
                  </p>
                </div>

                {filteredCars.length > 0 ? (
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredCars.map((car) => (
                      <CarCard key={car.id} car={car} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
                    <p className="text-gray-400 text-lg mb-2">
                      Nenhum veículo encontrado
                    </p>
                    <p className="text-gray-500">Tente ajustar os filtros</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
