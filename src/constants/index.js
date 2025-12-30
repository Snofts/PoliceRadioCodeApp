const navLinks = [
  { label: "Home", url: "#home" },
  { label: "How it works", url: "#how-it-works" },
  { label: "Privacy Policy", url: "#privacy-policy" },
  { label: "Terms of Service", url: "#terms-of-service" },
  { label: "Contact Us", url: "#contact-us" },
];

const works = [
  {
    id: "0",
    title: "Select Country",
    text: "Choose from supported countries: United States, Canada, Australia, or United Kingdom.",
    backgroundUrl: "./src/assets/cardsbg/card-1.svg",
    iconUrl: "earth",
    backgroundColor: "bg-[#45a049]",
    // imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Choose Region",
    text: "Narrow down to the specific state, county, or city where the codes are used.",
    backgroundUrl: "./src/assets/cardsbg/card-2.svg",
    iconUrl: "location",
    backgroundColor: "bg-[#FF69B4]",
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "2",
    title: "View Codes",
    text: "Access a comprehensive list of police, fire, and emergency codes used by local first responders.",
    backgroundUrl: "./src/assets/cardsbg/card-3.svg",
    iconUrl: "paste",
   backgroundColor: "bg-[#B026FF]",
    // imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Understand Instantly",
    text: "Get real-time translations and clear explanations to decode radio communications on the spot.",
    backgroundUrl: "./src/assets/cardsbg/card-4.svg",
    iconUrl: "bulb",
    backgroundColor: "bg-[#FFEB3B]",
    // imageUrl: benefitImage2,
    light: true,
  }
];

export { navLinks, works };
