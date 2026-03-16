import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './components/hero';
import Services from './components/services';
import ContactAbout from './components/about'; // This is your home-page about snippet
import FAQSection from './components/faq';
import Footer from './components/footer';
import ReviewSection from './components/review';
import AboutUsPage from './pages/About_us'; // Your full-page creative About & Team

function App() {
  return (
    <Router>
      <div className="bg-[#1a1a1a]">
        <Navbar />
        
        <Routes>
          {/* MAIN LANDING PAGE */}
          <Route path="/" element={
            <>
              <HeroSection />
              <Services />
              <ContactAbout />
              <ReviewSection />
              <FAQSection />
            </>
          } />

          {/* CREATIVE FULL ABOUT & TEAM PAGE */}
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;