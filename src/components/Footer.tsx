import { Car, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-500 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">AutoMax</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sua concessionária de confiança com os melhores veículos seminovos
              e novos.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@automax.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contato@automax.com
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Av. Paulista, 1000
                  <br />
                  São Paulo - SP
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Horário de Atendimento
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Segunda a Sexta: 9h às 19h</p>
              <p>Sábado: 9h às 14h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © 2024 AutoMax. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
