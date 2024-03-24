"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoGit,
  BiLogoGithub,
  BiLogoBlender,
  BiPlus,
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandFigma, TbSchool } from "react-icons/tb";
import { SiMysql, SiExpress } from "react-icons/si";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="text-5xl flex gap-5 flex-wrap">
        <li className="text-[#03f4fc]">
          <BiLogoReact />
        </li>
        <li className="text-[#00e3a3]">
          <TbBrandNextjs />
        </li>
        <li className="text-[#38bdf8]">
          <BiLogoTailwindCss />
        </li>
        <li className="text-[#9f02ed]">
          <BiLogoBootstrap />
        </li>
        <li className="text-[#0068ba]">
          <BiLogoCss3 />
        </li>
        <li className="text-[#d74d26]">
          <BiLogoHtml5 />
        </li>
        <li className="text-[#009632]">
          <BiLogoMongodb />
        </li>
        <li className="text-[#7db409]">
          <BiLogoNodejs />
        </li>
        <li className="text-[#00718b]">
          <SiMysql />
        </li>
        <li>
          <SiExpress />
        </li>
        <li className="text-[#f54d27]">
          <BiLogoGit />
        </li>
        <li>
          <BiLogoGithub />
        </li>
        <li className="text-[#e37200]">
          <BiLogoBlender />
        </li>
        <li>
          <TbBrandFigma />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li className="flex">
          <TbSchool className="text-2xl mr-3" />
          Full Stack CoderHouse
        </li>
        <li className="flex">
          <TbSchool className="text-2xl mr-3" />
          Full Stack Universidad Austral
        </li>
        <li className="flex">
          <TbSchool className="text-2xl mr-3" />
          Technical Electromechanical
        </li>
      </ul>
    ),
  },
  {
    title: "certifications",
    id: "certifications",
    content: (
      <ul className="flex flex-wrap justify-center items-center gap-2">
        <li>
          <Image
            src={"/images/certificates/1.png"}
            alt="certificado1"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/2.png"}
            alt="certificado2"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/3.png"}
            alt="certificado3"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/4.png"}
            alt="certificado4"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/5.png"}
            alt="certificado5"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/6.png"}
            alt="certificado6"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/7.png"}
            alt="certificado7"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/8.png"}
            alt="certificado8"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/9.png"}
            alt="certificado9"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/10.png"}
            alt="certificado10"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/esteban-garay-4baa94202/details/certifications/"
            target="_blank"
          >
            <BiPlus className="text-6xl flex justify-center text-center items-center cursor-pointer ml-[100px] hover:text-purple-600" />{" "}
          </Link>
        </li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white z-10">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <Image
          src={"/images/about.png"}
          alt="about"
          className="rounded-lg"
          width={300}
          height={350}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Me
            </span>{" "}
          </h2>
          <p className="text-base lg:text-xm">
            I'm 23 years old, I am a Junior Web Developer and electromechanical
            technician, currently in constant training in the programming area
            and I am looking for a job in the IT area. On the other hand, I am
            working on a group project for an NGO called DaleQueValen thanks to
            Footalent.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {" "}
            {TAB_DATA.find((t) => t.id === tab).content}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
