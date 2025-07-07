import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Technology from '@/components/sections/Technology';
import Comparison from '@/components/sections/Comparison';
import Pricing from '@/components/sections/Pricing';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Comparison />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App; 