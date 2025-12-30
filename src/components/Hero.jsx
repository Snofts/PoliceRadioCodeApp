import React, { useEffect, useState } from "react";

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
      <h1 className="text-4xl max-md:text-2xl max-sm:text-xl text-center pb-[4rem] font-bold">
        Decode police, fire, and <br /> emergency codes used by first <br />{" "}
        responders across the globe.
      </h1>
      <p className="max-sm:text-[0.6rem] pb-[5rem]">
        Available in the U.S., Canada, Australia, and the U.K.
      </p>
      <button className="bg-blue-500 hover:bg-blue-400 transition-colors w-[10rem] h-[3rem] rounded-full">
        <a href="#">Download Now</a>
      </button>

      <div>
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "100%", background: "#000" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Or a dark one: https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png
            attribution="&copy; OpenStreetMap"
          />
          <GeoJSON
            data={geoData}
            style={countryStyle}
            onEachFeature={onEachCountry}
          />

          {pings.map((ping, i) => (
            <CircleMarker
              key={i}
              center={ping.coords}
              radius={10}
              fillColor={ping.color}
              color={ping.color}
              opacity={0.8}
              className="animate-pulse" // Tailwind or custom CSS for ping animation
            />
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Hero;
