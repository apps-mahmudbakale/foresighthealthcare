import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import About from './components/About';
import Services from './components/Services';
import Staff from './components/Staff';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MissionVision />
        <About />
        <Services />
        <Staff />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;