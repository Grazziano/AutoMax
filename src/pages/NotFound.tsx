import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-red-500" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Página não encontrada
      </h1>

      <p className="text-gray-400 max-w-md mb-8">
        A página que você está procurando não existe ou foi removida. Verifique
        o endereço ou volte para a página inicial.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          asChild
          variant="default"
          className="bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600"
        >
          <Link to="/">Voltar para o início</Link>
        </Button>

        <Button asChild variant="outline">
          <Link to="/veiculos">Ver veículos</Link>
        </Button>
      </div>
    </div>
  );
}
