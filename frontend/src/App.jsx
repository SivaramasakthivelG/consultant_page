import { useState } from 'react'
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import BookingModal from "./components/BookingModal"

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection setShowModal={setShowModal}/>
      {showModal && (<BookingModal setShowModal={setShowModal} />)}

    </>
  )
}

export default App