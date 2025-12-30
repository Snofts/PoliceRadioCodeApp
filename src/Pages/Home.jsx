import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsOfService from "../components/TermsOfService";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PrivacyPolicy />
      <TermsOfService />
      <ContactUs />
    </div>
  );
};

export default Home;
