import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

import { MapContainer, TileLayer, GeoJSON, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import worldGeoJSON from "../../public/world-countries.geojson"; // Download a low-res world GeoJSON

const availableCountries = ["US", "CA", "AU", "GB"]; // ISO codes

const countryStyle = (feature) => {
  const code = feature.properties.ISO_A2;
  const isAvailable = availableCountries.includes(code);
  return {
    fillColor: isAvailable
      ? {
          US: "#00FFFF",
          CA: "#FF69B4",
          AU: "#39FF14",
          GB: "#B026FF",
        }[code]
      : "#111111",
    fillOpacity: 0.6,
    color: "#333",
    weight: 1,
  };
};

const onEachCountry = (feature, layer) => {
  layer.on({
    mouseover: (e) => e.target.setStyle({ fillColor: "#40C4FF", weight: 2 }),
    mouseout: (e) => e.target.setStyle(countryStyle(feature)),
  });
};

// Ping locations (example coords: major cities)
const pings = [
  { coords: [37.8, -122.4], color: "#00FFFF" }, // US (SF example)
  // Add more for CA, AU, GB
];

const Hero = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch("/world.geojson") // Path relative to public folder
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load GeoJSON");
        return res.json();
      })
      .then((data) => setGeoData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      id="home"
      className="w-full h-screen flex justify-center items-center flex-col"
    >
      <h1 className="text-4xl max-md:text-2xl max-sm:text-xl text-center pb-16 font-bold z-100">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 ">
          Decode
        </span>{" "}
        police, fire, and <br /> emergency{" "}
        <span
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] to-[#00FFFF]"
        >
          codes
        </span>{" "}
        used by first <br /> responders across the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B026FF] to-[#FF69B4]">globe</span>.
      </h1>
      <p className="max-sm:text-[0.6rem] pb-20 z-100">
        Available in the U.S., Canada, Australia, and the U.K.
      </p>
      <button className="bg-blue-500 hover:bg-blue-400 transition-colors w-[10rem] h-[3rem] rounded-full z-100">
        <a href="#">Download Now</a>
      </button>

      <div className="absolute top-20 left-0">
        <img
          className="w-full h-dvh opacity-30 object-cover"
          src="/world-map.png"
          alt="World map"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-100">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

    </section>
  );
};

export default Hero;
