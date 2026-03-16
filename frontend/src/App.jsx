import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './components/hero';
import Services from './components/services';
import ContactAbout from './components/about'; 
import FAQSection from './components/faq';
import Footer from './components/footer';
import ReviewSection from './components/review';
import AboutUsPage from './pages/About_us'; 
import CoursesPage from './pages/Courses';
import Service from './pages/Service';

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
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/services" element={<Service />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;