import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quote from './components/Quote';
import About from './components/About';
import Products from './components/Products';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Menu from './pages/Menu';
import Desserts from './pages/Desserts';
import ScrollToSection from './components/ScrollToSection';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <main>
    <Hero />
    <Quote />
    <About />
    <Products />
    <Location />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToSection />
      <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 min-h-screen text-gray-800 font-outfit selection:bg-pink-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<Menu />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/menu" element={<Navigate to="/cakes" replace />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;

