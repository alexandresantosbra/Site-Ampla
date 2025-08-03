import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div>
              <img 
                src="/logo.jpeg" 
                 
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
              <Facebook size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#produtos" className="text-gray-400 hover:text-blue-400 transition-colors">Produtos</a></li>
              <li><a href="#categorias" className="text-gray-400 hover:text-blue-400 transition-colors">Categorias</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Ferramentas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Elétrica</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Tintas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Hidráulica</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Estrutural</a></li>
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