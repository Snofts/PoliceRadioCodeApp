import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import ContactUs from './components/ContactUs'
import HowItWorks from './components/HowItWorks'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <PrivacyPolicy />
      <TermsOfService />
      <ContactUs />
    </div>
  )
}

export default App