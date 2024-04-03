"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-16xl sm:text-28xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-violet-600">
              Hello I'm
            </span>{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Harsh",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile Application Developer",
                1000,
                "UI/UX designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "24px", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base  lg:text-xl mb-6">
          Hey there! I'm Harsh Anand, a full-stack Java developer. I specialize in crafting efficient and scalable solutions, blending front-end and back-end expertise to create impactful applications. Let's build something great together!
          </p>
          <div>
            <button className="px-4 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500 hover:bg-slate-200 text-white">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500">
                Hire Me
              </span>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500 hover:bg-slate-800 text-white">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[390px] h-[480px] lg:w-[380px] lg:h-[400px] relative">
            <Image
              src="/images/profile-image.JPG"
              alt="profile img"
              className="absolute transform : -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={190}
              height={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
