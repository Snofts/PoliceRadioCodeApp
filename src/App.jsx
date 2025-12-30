import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PrivacyPolicy />
      <TermsOfService />
      <ContactUs />
    </div>
  )
}

export default App