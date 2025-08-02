import React from 'react';
import { ShoppingCart, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} className="text-blue-400" />
              <span>(91) 980259828</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} className="text-blue-400" />
              <span>marajocimentos@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} className="text-blue-400" />
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center"><img src="/logo.jpeg" alt="Logo" className="h-20 w-20 object-contain rounded-lg" /></div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Início
            </a>
            <a href="#produtos" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Produtos
            </a>
            <a href="#categorias" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Categorias
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contato
            </a>
          </nav>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;