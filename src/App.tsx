import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import ProductCatalog from './components/ProductCatalog';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
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
      <section id="sobre">
        <About />
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;