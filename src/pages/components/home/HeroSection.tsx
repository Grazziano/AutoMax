import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920&q=80"
          alt="Hero"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <span className="text-gray-300 text-sm">
                Mais de 500 clientes satisfeitos
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Encontre o
              <span className="block bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                Carro dos Sonhos
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Veículos seminovos e novos com procedência garantida.
              Financiamento facilitado em até 60x.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to={'veiculos'}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 h-14 text-lg group"
                >
                  Ver Todos os Veículos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={'contato'}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white h-14 px-8 text-lg"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">200+</h3>
                <p className="text-gray-400 text-sm">Veículos Disponíveis</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">15+</h3>
                <p className="text-gray-400 text-sm">Anos de Mercado</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">98%</h3>
                <p className="text-gray-400 text-sm">Clientes Satisfeitos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}
