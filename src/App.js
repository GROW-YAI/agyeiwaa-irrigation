import React from 'react';

import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <LandingPage />
        <About />
        <Product />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
