import { useState } from 'react'
import HeroSection from './components/hero'
import Navbar from './components/navbar'
import Services from './components/services'
import ContactAbout from './components/about'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <ContactAbout />

    </div>
  )
}

export default App
