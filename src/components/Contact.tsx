import React from 'react';
import { Phone, MessageCircle, Instagram, Mail, MapPin, Clock, X } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5591980259828'; // Número com código do país (55) e DDD (91)
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os materiais de construção da Ampla distribuidora.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
  const instagramUrl = 'https://instagram.com/ampladistribuidora_oficial'; // Substitua pelo Instagram real
    window.open(instagramUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = 'marajocimentos@gmail.com';
  const subject = encodeURIComponent('Contato - Ampla distribuidora');
  const body = encodeURIComponent('Olá! Gostaria de mais informações sobre os produtos da Ampla distribuidora.');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Fale Conosco</h2>
              <p className="text-blue-100">Escolha a melhor forma de entrar em contato</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl flex items-center space-x-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FaWhatsapp size={24} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-lg">WhatsApp</h3>
                <p className="text-green-100 text-sm">(91) 98025-9828</p>
                <p className="text-green-100 text-xs">Clique para conversar agora</p>
              </div>
            </button>

            {/* Instagram */}
            <button
              onClick={handleInstagramClick}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-xl flex items-center space-x-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FaInstagram size={24} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-lg">Instagram</h3>
                <p className="text-purple-100 text-sm">@ampladistribuidora_oficial</p>
                <p className="text-purple-100 text-xs">Siga-nos para novidades</p>
              </div>
            </button>

            {/* Email */}
            <button
              onClick={handleEmailClick}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl flex items-center space-x-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-lg">E-mail</h3>
                <p className="text-blue-100 text-sm">marajocimentos@gmail.com</p>
                <p className="text-blue-100 text-xs">Envie sua mensagem</p>
              </div>
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">Outras informações</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Additional Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-sm">(91) 98025-9828</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-gray-100 p-2 rounded-full">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-sm">São Paulo, SP</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="font-medium">Horário de Atendimento</p>
                  <p className="text-sm">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-sm">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 -mx-6 -mb-6 p-4 rounded-b-2xl mt-6">
              <p className="text-center text-gray-600 text-sm">
                Estamos prontos para ajudar você! 🏗️
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;