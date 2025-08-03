import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import ProductCatalog from './components/ProductCatalog';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ImageCarousel />
      <FeaturedProducts />
      <section id="catalogo">
        <ProductCatalog />
      </section>
      <ProductCategories />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;