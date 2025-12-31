import React from "react";
import { benefits } from "../constants";
import { FaCheck } from "react-icons/fa";
import { GradientLight } from "./design/Benefits";

const DownloadApp = () => {
  return (
    <section id="download-app" className="overflow-x-hidden mt-30 !pl-20 !pr-0 max-md:!pl-10 max-md:!pr-10 flex flex-row max-md:flex-col-reverse justify-around items-center gap-0">
      <div className="text-xl max-lg:text-sm max-sm:text-xs">
        <h2 className="text-6xl max-md:text-4xl font-semibold mb-10">Download APP</h2>
        <div className="flex justify-center flex-col w-full">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex justify-items-start items-start gap-4 mb-4">
              <div className={`${benefit.backgroundColor} min-w-[2rem] max-sm:min-w-[1rem] min-h-[2rem] max-sm:min-h-[1rem]  flex justify-center items-center rounded-full`}>
                <FaCheck />
              </div>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
        <div className="flex max-sm:flex-col max-sm:justify-center items-center">
          <img className="w-36 md:w-40 max-sm:h-20 object-cover lg:w-44 hover:scale-105 transition-all duration-100" src="/Google-play.png" alt="Google Play Logo" />
          <img className="w-51 max-lg:w-46 max-md:w-42 object-cover hover:scale-105 transition-all duration-100" src="/Apple-store.png" alt="Apple Store Logo" />
        </div>
      </div>
      {/* <div className="flex-1 flex justify-center">
      </div> */}
      <div>
      <img className="w-[50rem] h-[50rem] max-sm:h-[40rem] object-cover lg:max-w-lg object-contain" src="/iPhone-15-Pro-Max.png" alt="Iphone App Mockup" />
      <GradientLight />
      </div>
    </section>
  );
};

export default DownloadApp;
