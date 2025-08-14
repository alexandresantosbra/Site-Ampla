import React from 'react';
import { ShoppingCart, Phone, Mail, MapPin, Menu } from 'lucide-react';
import MobileSidebar from './MobileSidebar';
<<<<<<< HEAD
import Contact from './Contact';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isContactOpen, setIsContactOpen] = React.useState(false);
=======

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
>>>>>>> 49a8f050ce753f49b9bd54fc68e77ca30a723933

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-white shadow-lg">
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
<<<<<<< HEAD
              <span className="text-sm">Ampla distribuidora - Materiais de Construção</span>
=======
              <span className="text-sm">ConstruMax - Materiais de Construção</span>
>>>>>>> 49a8f050ce753f49b9bd54fc68e77ca30a723933
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
              <img src="/logo.jpeg" alt="Logo" className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-lg" />
            </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Início
            </a>
            <a href="#catalogo" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Catálogo
            </a>
            <a href="#produtos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Produtos
            </a>
            <a href="#categorias" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Categorias
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sobre
            </a>
<<<<<<< HEAD
            <button 
              onClick={() => setIsContactOpen(true)}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contato
            </button>
=======
            <a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contato
            </a>
>>>>>>> 49a8f050ce753f49b9bd54fc68e77ca30a723933
          </nav>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
<<<<<<< HEAD
      
      {/* Contact Modal */}
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
=======
>>>>>>> 49a8f050ce753f49b9bd54fc68e77ca30a723933
    </>
  );
};

export default Header;