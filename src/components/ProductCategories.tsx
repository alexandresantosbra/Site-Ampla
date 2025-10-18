import React from 'react';
import { Hammer, Zap, Paintbrush, Wrench, Home, Shield } from 'lucide-react';

const ProductCategories: React.FC = () => {
  const categories = [
    {
      icon: <Hammer size={32} />,
      name: 'Ferramentas',
      description: 'Martelos, furadeiras, serras e mais',
      image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Zap size={32} />,
      name: 'Elétrica',
      description: 'Fios, disjuntores, interruptores',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Paintbrush size={32} />,
      name: 'Tintas',
      description: 'Tintas, vernizes e acessórios',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Wrench size={32} />,
      name: 'Hidráulica',
      description: 'Tubos, conexões, registros',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Home size={32} />,
      name: 'Estrutural',
      description: 'Cimento, tijolos, blocos',
      image: 'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Shield size={32} />,
      name: 'Segurança',
      description: 'EPIs e equipamentos de proteção',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="categorias" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Explore
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas Categorias
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre todos os materiais que você precisa para sua obra, organizados por categoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer border border-gray-100 hover:border-blue-200"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-blue-900/50 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 text-white transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Ver produtos</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;