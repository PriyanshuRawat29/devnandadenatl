import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BracesComparison from './components/BracesComparison';
import ProfessionalCleaning from './components/ProfessionalCleaning';
import Reviews from './components/Reviews';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <BracesComparison />
      <ProfessionalCleaning />
      <Reviews />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
