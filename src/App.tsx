import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Technology from '@/components/sections/Technology';
import Comparison from '@/components/sections/Comparison';
import Pricing from '@/components/sections/Pricing';
import WeChatFloat from './components/WeChatFloat';
import FloatingBackground from './components/FloatingBackground';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingBackground />
      <Header />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Comparison />
        <Pricing />
      </main>
      <Footer />
      <WeChatFloat />
    </div>
  );
}

export default App; 