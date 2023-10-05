"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </div>
            <TypeAnimation
              sequence={[
                "Esteban Garay",
                1000,
                "Web Developer",
                1000,
                "Electromechanic",
                1000,
                "3D Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
            Im 23 years old, I am a Junior Web Developer and electromechanical
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-800 to-pink-600 hover:bg-slate-200 text-white">
              <a href="">About Mi</a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-purple-800 to-pink-600 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a href="./cv.pdf" download={""}>
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-slate-200 bg-opacity-10 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatar.png"
              alt="avatar"
              className="absolute rounded-3xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
