import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Número com código do país (55) e DDD (11)
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os materiais de construção.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap shadow-2xl animate-fadeIn">
            Fale conosco no WhatsApp
            <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-900"></div>
          </div>
        )}
        
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300"
          aria-label="Contato via WhatsApp"
        >
          <FaWhatsapp size={32} />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;