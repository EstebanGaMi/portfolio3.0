"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="lg:pt-[100px] md:pt-[250px] pt-[180px]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white mb-4 text-4xl lg:text-5xl sm:text-3xl lg:leading-normal font-extrabold">
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </div>
            <TypeAnimation
              sequence={[
                "Esteban Garay",
                1000,
                "Developer",
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
            <Link href="/about">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-800 to-pink-600 hover:bg-slate-200 text-white">
                About Mi
              </button>
            </Link>
            <a href="./cv.pdf" download={""}>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-purple-800 to-pink-600 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-slate-200 bg-opacity-10 w-[250px] h-[250px] relative ">
            <Image
              src="/images/avatar.png"
              alt="avatar"
              className="absolute rounded-3xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
