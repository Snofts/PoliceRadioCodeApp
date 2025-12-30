import React from "react";
import { works } from "../constants";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <section>
      <h2 className="heading">How It Works</h2>
      <div className="flex flex-wrap gap-10 mb-10">
        {works.map((item) => (
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[20rem]"
            style={{
              backgroundImage: `url(${item.backgroundUrl})`,
            }}
            key={item.id}
          >
            <div className="relative z-2 flex flex-col justify-around min-h-[22rem] p-[2.4rem] pointer-events-none">
              <div className={`flex items-center justify-center h-[3rem] w-[3rem] ${item.backgroundColor} rounded-xl`}>
                 <svg width="30" height="30" className="fill-black">
                  <use href={`/sprite.svg#icon-${item.iconUrl}`}></use>
                </svg>
              </div>
              <h5 className="text-3xl mb-5">{item.title}</h5>
              <p className="body-2 mb-6 text-n-3">{item.text}</p>
            </div>
            <div
              className="absolute inset-0.5 bg-n-8"
              style={{
                clipPath: "url(#benefits)",
              }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            {/* <ClipPath /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
