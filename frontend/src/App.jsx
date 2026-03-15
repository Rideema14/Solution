import { useState } from 'react'
import HeroSection from './components/hero'
import Navbar from './components/navbar'
import Services from './components/services'
import ContactAbout from './components/about'
import FAQSection from './components/faq'
import Footer from './components/footer'
import ReviewSection from './components/review'
function App() {
 

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <ContactAbout />
      <ReviewSection />
      <FAQSection />
      <Footer />
    

    </div>
  )
}

export default App
