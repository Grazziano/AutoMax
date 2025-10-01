import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      alert('Em desenvolvimento!');

      setSuccess(true);
      clearForm();

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    }

    setSending(false);
  };

  const clearForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos prontos para ajudar você a encontrar o veículo ideal
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-red-600/50 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Telefone
              </h3>
              <p className="text-gray-400">(11) 99999-9999</p>
              <p className="text-gray-500 text-sm mt-1">Seg-Sex: 9h às 19h</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-red-600/50 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">E-mail</h3>
              <p className="text-gray-400">contato@automax.com</p>
              <p className="text-gray-500 text-sm mt-1">Resposta em até 24h</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-red-600/50 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Endereço
              </h3>
              <p className="text-gray-400">Av. Paulista, 1000</p>
              <p className="text-gray-500 text-sm mt-1">São Paulo - SP</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Envie uma Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              {success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-500">
                    Mensagem enviada com sucesso! Entraremos em contato em
                    breve.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-2 bg-slate-800/50 border-slate-700 text-white"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-2 bg-slate-800/50 border-slate-700 text-white"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-300">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-2 bg-slate-800/50 border-slate-700 text-white"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-2 bg-slate-800/50 border-slate-700 text-white"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white h-12"
                >
                  {sending ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map and Hours */}
          <div className="space-y-8">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 overflow-hidden">
              <div className="h-80 bg-slate-800">
                <MapContainer
                  center={[-31.4619, -52.2033] as LatLngExpression}
                  zoom={15}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  />
                  <Marker position={[-31.4619, -52.2033]}>
                    <Popup>AutoMax - Av. Paulista, 1000</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-red-500" />
                  <CardTitle className="text-xl text-white">
                    Horário de Atendimento
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                  <span className="text-gray-400">Segunda a Sexta</span>
                  <span className="text-white font-medium">9h às 19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                  <span className="text-gray-400">Sábado</span>
                  <span className="text-white font-medium">9h às 14h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Domingo</span>
                  <span className="text-gray-500">Fechado</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
