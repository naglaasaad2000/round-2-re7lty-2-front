import './App.css'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import PricingSection from './Components/PricingSection'
import TestimonialSection from './Components/TestimonialSection'
import ServicesSection from './Components/ServicesSection'
import TripSection from './Components/TripSection'
import ContactUsSection from './Components/ContactUsSection'
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
      <NavBar/>
      <Hero/>
      <TripSection/>
      <ServicesSection/>
      <PricingSection/>
      <TestimonialSection/>
      <ContactUsSection/>
      <Footer/>
    </>
  )
}

export default App

