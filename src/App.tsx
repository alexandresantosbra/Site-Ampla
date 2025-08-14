import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import ProductCatalog from './components/ProductCatalog';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
<<<<<<< HEAD
import About from './components/About';
=======
>>>>>>> 49a8f050ce753f49b9bd54fc68e77ca30a723933
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
<<<<<<< HEAD
      <section id="sobre">
        <About />
      </section>
=======
>>>>>>> 49a8f050ce753f49b9bd54fc68e77ca30a723933
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;