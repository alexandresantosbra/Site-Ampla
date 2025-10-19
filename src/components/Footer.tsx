import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.svg"
                alt="Logo ConstruMax 2025"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">ConstruMax</h3>
                <p className="text-sm text-gray-400">Materiais de Construção</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Há mais de 20 anos fornecendo materiais de construção de qualidade para todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-all duration-300 transform hover:scale-110">
                <Facebook size={18} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-all duration-300 transform hover:scale-110">
                <Instagram size={18} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-all duration-300 transform hover:scale-110">
                <Twitter size={18} className="text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Início</a></li>
              <li><a href="#produtos" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Produtos</a></li>
              <li><a href="#categorias" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Categorias</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Sobre Nós</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Contato</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Ferramentas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Elétrica</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Tintas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Hidráulica</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Estrutural</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-400">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-400">contato@construmax.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-blue-400" />
                <span className="text-gray-400">Seg-Sex: 8h-18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Ampla Distribuidora. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;