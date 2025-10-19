import React from 'react';
import { ShoppingCart, Phone, Mail, MapPin, Menu } from 'lucide-react';
import MobileSidebar from './MobileSidebar';
import Contact from './Contact';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 transition-shadow duration-300">
      {/* Top bar with contact info */}
        <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} className="text-blue-400" />
              <span>(91) 980259828</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} className="text-blue-400" />
              <span>marajocimentos@gmail.com</span>
            </div>
          </div>
            <div className="sm:hidden text-center flex-1">
              <span className="text-sm">ConstruMax - Materiais de Construção</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
            <MapPin size={14} className="text-blue-400" />
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                onClick={toggleSidebar}
                className="md:hidden p-2 mr-2 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <Menu size={24} />
              </button>
              <img src="/logo.jpeg" alt="Logo ConstruMax" className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-xl shadow-lg ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300 hover:scale-105" />
            </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group">
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#catalogo" className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group">
              Catálogo
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#produtos" className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group">
              Produtos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#categorias" className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group">
              Categorias
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#sobre" className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group">
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button
              onClick={() => setIsContactOpen(true)}
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Contact Modal */}
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Header;