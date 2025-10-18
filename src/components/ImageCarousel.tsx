import React, { useState, useEffect } from 'react';

const ImageCarousel: React.FC = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Cimento e Argamassa',
      subtitle: 'Produtos de alta qualidade para sua obra'
    },
    {
      url: 'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Ferramentas Profissionais',
      subtitle: 'Equipamentos para construção civil'
    },
    {
      url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Materiais Elétricos',
      subtitle: 'Fios, cabos e componentes elétricos'
    },
    {
      url: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Tintas e Vernizes',
      subtitle: 'Acabamento perfeito para seu projeto'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-96 md:h-[550px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fadeInUp drop-shadow-2xl">
                  {image.title}
                </h2>
                <p className="text-lg md:text-2xl opacity-0 animate-fadeInUp animation-delay-300 drop-shadow-lg">
                  {image.subtitle}
                </p>
                <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl opacity-0 animate-fadeInUp animation-delay-600">
                  Ver Produtos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 h-3 bg-blue-600'
                : 'w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;