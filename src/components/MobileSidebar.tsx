import React from 'react';
import { X, Home, Package, Grid3X3, Info, Phone, ShoppingCart } from 'lucide-react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }

    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [isOpen]);

  const menuItems = [
    { icon: <Home size={20} />, label: 'Início', href: '#home' },
    { icon: <Package size={20} />, label: 'Catálogo', href: '#catalogo' },
    { icon: <Package size={20} />, label: 'Produtos', href: '#produtos' },
    { icon: <Grid3X3 size={20} />, label: 'Categorias', href: '#categorias' },
    { icon: <Info size={20} />, label: 'Sobre', href: '#sobre' },
    { icon: <Phone size={20} />, label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden sidebar-overlay"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.jpeg" 
              alt="Logo" 
              className="h-10 w-10 object-contain rounded-lg" 
            />
            <div>
              <h3 className="font-bold text-gray-800">ConstruMax</h3>
              <p className="text-xs text-gray-500">Materiais de Construção</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="py-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleLinkClick}
              className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-r-4 hover:border-blue-600 transition-all duration-200"
            >
              <span className="text-gray-500">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Cart Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            <ShoppingCart size={20} />
            <span>Ver Carrinho (3)</span>
          </button>
        </div>

        {/* Contact Info */}
        <div className="absolute bottom-20 left-0 right-0 px-6 py-4 bg-gray-50">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Fale conosco:</p>
            <p className="text-sm font-semibold text-gray-800">(91) 980259828</p>
            <p className="text-xs text-gray-500">marajocimentos@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;