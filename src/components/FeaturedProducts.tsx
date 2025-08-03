import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Furadeira Bosch GSB 13 RE',
      price: 'R$ 189,90',
      originalPrice: 'R$ 249,90',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badge: 'Oferta'
    },
    {
      id: 2,
      name: 'Cimento CP-II-E-32 50kg',
      price: 'R$ 28,90',
      originalPrice: null,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badge: 'Mais Vendido'
    },
    {
      id: 3,
      name: 'Tinta Látex Branca 18L',
      price: 'R$ 89,90',
      originalPrice: 'R$ 119,90',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badge: 'Promoção'
    },
    {
      id: 4,
      name: 'Kit Chaves de Fenda 6 peças',
      price: 'R$ 45,90',
      originalPrice: null,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badge: null
    }
  ];

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Os melhores produtos com os melhores preços para sua obra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative">
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs font-semibold rounded z-10">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart size={16} />
                  <span>Adicionar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;