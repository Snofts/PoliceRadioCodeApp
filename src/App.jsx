import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import ContactUs from './components/ContactUs'
import HowItWorks from './components/HowItWorks'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import TermsOfServicePage from './Pages/TermsOfServicePage';
import Home from './Pages/Home'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
    <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/term-of-service" element={<TermsOfServicePage />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App