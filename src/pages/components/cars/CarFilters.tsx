import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SlidersHorizontal, X } from 'lucide-react';

interface CarFilter {
  search: string;
  brand: string;
  yearFrom: string;
  yearTo: string;
  priceMin: string;
  priceMax: string;
  fuelType: string;
}

interface CarFiltersProps {
  filters: CarFilter;
  setFilters: (filters: CarFilter) => void;
  onClear: () => void;
}

export default function CarFilters({
  filters,
  setFilters,
  onClear,
}: CarFiltersProps) {
  const brands = [
    'Toyota',
    'Honda',
    'Volkswagen',
    'Ford',
    'Chevrolet',
    'Hyundai',
    'Nissan',
    'BMW',
    'Mercedes-Benz',
    'Audi',
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  return (
    <Card className="p-6 bg-slate-900/50 backdrop-blur-sm border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-red-500" />
          <h3 className="text-lg font-semibold text-white">Filtros</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4 mr-1" />
          Limpar
        </Button>
      </div>

      <div className="space-y-4">
        {/* Search */}
        <div>
          <Label className="text-gray-300 mb-2 block">Buscar</Label>
          <Input
            placeholder="Modelo ou marca..."
            value={filters.search || ''}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500"
          />
        </div>

        {/* Brand */}
        <div>
          <Label className="text-gray-300 mb-2 block">Marca</Label>
          <Select
            value={filters.brand || 'all'}
            onValueChange={(value) =>
              setFilters({ ...filters, brand: value === 'all' ? '' : value })
            }
          >
            <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
              <SelectValue placeholder="Todas as marcas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as marcas</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Year Range */}
        <div>
          <Label className="text-gray-300 mb-2 block">Ano</Label>
          <div className="grid grid-cols-2 gap-2">
            <Select
              value={filters.yearFrom || 'all'}
              onValueChange={(value) =>
                setFilters({
                  ...filters,
                  yearFrom: value === 'all' ? '' : value,
                })
              }
            >
              <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                <SelectValue placeholder="De" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">De</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={filters.yearTo || 'all'}
              onValueChange={(value) =>
                setFilters({ ...filters, yearTo: value === 'all' ? '' : value })
              }
            >
              <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                <SelectValue placeholder="Até" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Até</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-gray-300 mb-2 block">
            Faixa de Preço (R$)
          </Label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="Mínimo"
              value={filters.priceMin || ''}
              onChange={(e) =>
                setFilters({ ...filters, priceMin: e.target.value })
              }
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500"
            />
            <Input
              type="number"
              placeholder="Máximo"
              value={filters.priceMax || ''}
              onChange={(e) =>
                setFilters({ ...filters, priceMax: e.target.value })
              }
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Fuel Type */}
        <div>
          <Label className="text-gray-300 mb-2 block">Combustível</Label>
          <Select
            value={filters.fuelType || 'all'}
            onValueChange={(value) =>
              setFilters({ ...filters, fuelType: value === 'all' ? '' : value })
            }
          >
            <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="Gasolina">Gasolina</SelectItem>
              <SelectItem value="Etanol">Etanol</SelectItem>
              <SelectItem value="Flex">Flex</SelectItem>
              <SelectItem value="Diesel">Diesel</SelectItem>
              <SelectItem value="Híbrido">Híbrido</SelectItem>
              <SelectItem value="Elétrico">Elétrico</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}
