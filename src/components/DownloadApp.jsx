import React from "react";
import { benefits } from "../constants";
import { FaCheck } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <section id="download-app" className="mt-40 px-10 grid grid-cols-2 grid-rows-1 justify-around items-center gap-4">
      <div>
        <h2 className="text-6xl font-semibold mb-10">Download APP</h2>
        <div className="flex justify-center flex-col w-full">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex items-center gap-4 mb-4">
              <div className={`${benefit.backgroundColor} w-[2rem] h-[2rem] flex justify-center items-center rounded-full`}>
                <FaCheck />
              </div>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <img className="w-36 md:w-40 object-cover lg:w-44 hover:scale-105 transition-all duration-100" src="/Google-play.png" alt="Google Play Logo" />
          <img className="w-40 md:w-44 object-cover hover:scale-105 transition-all duration-100" src="/Apple-store.png" alt="Apple Store Logo" />
        </div>
      </div>
      {/* <div className="flex-1 flex justify-center">
      </div> */}
      <img className="w-[50rem] h-[50rem] object-cotain lg:max-w-lg object-contain" src="/iPhone-15-Pro-Max.png" alt="Iphone App Mockup" />
    </section>
  );
};

export default DownloadApp;
