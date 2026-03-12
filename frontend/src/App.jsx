import { useState } from 'react'
import HeroSection from './components/hero'
import Navbar from './components/navbar'
import Services from './components/services'
import ContactAbout from './components/about'
import Footer from './components/footer'
function App() {
 

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <ContactAbout />
      <Footer />
    

    </div>
  )
}

export default App
