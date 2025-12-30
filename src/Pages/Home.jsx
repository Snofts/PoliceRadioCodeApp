import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsOfService from "../components/TermsOfService";
import ContactUs from "../components/ContactUs";
import DownloadApp from "../components/DownloadApp";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PrivacyPolicy />
      <TermsOfService />
      <DownloadApp />
      <ContactUs />
    </div>
  );
};

export default Home;
