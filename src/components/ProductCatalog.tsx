import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Star, ShoppingCart, X } from 'lucide-react';
import { products, categories, brands, Product } from '../data/products';

interface FilterState {
  category: string;
  brand: string;
  priceRange: [number, number];
  inStock: boolean;
  minRating: number;
}

const ProductCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [filters, setFilters] = useState<FilterState>({
    category: 'Todas',
    brand: 'Todas',
    priceRange: [0, 500],
    inStock: false,
    minRating: 0
  });

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Busca por texto
      const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Filtros
      const categoryMatch = filters.category === 'Todas' || product.category === filters.category;
      const brandMatch = filters.brand === 'Todas' || product.brand === filters.brand;
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const stockMatch = !filters.inStock || product.inStock;
      const ratingMatch = product.rating >= filters.minRating;

      return searchMatch && categoryMatch && brandMatch && priceMatch && stockMatch && ratingMatch;
    });

    // Ordenação
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, filters, sortBy]);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'Todas',
      brand: 'Todas',
      priceRange: [0, 500],
      inStock: false,
      minRating: 0
    });
    setSearchTerm('');
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className={`bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 ${
      viewMode === 'list' ? 'flex' : ''
    }`}>
      <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`object-cover ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'}`}
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Fora de Estoque</span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded ml-2">
            {product.brand}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        
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
            <span className="text-lg font-bold text-blue-600">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
        </div>

        <button
          className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 font-semibold ${
            !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!product.inStock}
        >
          <ShoppingCart size={16} />
          <span>{product.inStock ? 'Adicionar' : 'Indisponível'}</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-md border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
              Explorar
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Catálogo de Produtos</h1>
          </div>
          
          {/* Search and Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos... (ex: cimento, tinta látex branca)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm focus:shadow-md"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Filter size={16} />
                <span>Filtros</span>
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <option value="name">Nome A-Z</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
                <option value="rating">Melhor Avaliado</option>
              </select>

              <div className="flex border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-all duration-300 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-all duration-300 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 h-fit animate-fadeIn">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filtros</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Limpar Tudo
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Marca</label>
                <select
                  value={filters.brand}
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Faixa de Preço: R$ {filters.priceRange[0]} - R$ {filters.priceRange[1]}
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Avaliação Mínima</label>
                <div className="flex space-x-2">
                  {[0, 3, 4, 4.5].map(rating => (
                    <button
                      key={rating}
                      onClick={() => handleFilterChange('minRating', rating)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filters.minRating === rating
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {rating === 0 ? 'Todas' : `${rating}+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stock Filter */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Apenas em estoque</span>
                </label>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between bg-blue-50 px-4 py-3 rounded-xl">
              <p className="text-gray-800 font-semibold">
                <span className="text-blue-600">{filteredProducts.length}</span> produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">Nenhum produto encontrado</p>
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Limpar filtros e tentar novamente
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;