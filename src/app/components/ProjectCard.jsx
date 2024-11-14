import React from "react";
import Link from "next/link";
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
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandFigma } from "react-icons/tb";
import { SiMysql, SiExpress } from "react-icons/si";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io5";

// ... (imports)

export const ProjectCard = ({
  imgUrl,
  title,
  description,
  previewUrl,
  technologies,
}) => {
  return (
    <div className="shadow-xl shadow-black rounded-xl cursor-pointer flex flex-col gap-[2px] my-auto mx-1 w-full h-[450px]">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-all duration-500">
          <Link
            href={previewUrl}
            target="_blank"
            className="h-full w-full"
          ></Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#6d6d6d] py-6 px-4 h-full">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center ${tech.colorClass}`}
              >
                {tech.icon} <span className="ml-2">{tech.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export function getTechnologyColorClass(tech) {
  switch (tech) {
    case "React":
      return "text-[#03f4fc]";
    case "Next.js":
      return "text-[#00e3a3]";
    case "Tailwind CSS":
      return "text-[#38bdf8]";
    case "Bootstrap":
      return "text-[#9f02ed]";
    case "CSS3":
      return "text-[#0068ba]";
    case "HTML5":
      return "text-[#d74d26]";
    case "MongoDB":
      return "text-[#009632]";
    case "Node.js":
      return "text-[#7db409]";
    case "MySQL":
      return "text-[#00718b]";
    case "Express":
      return "";
    case "Git":
      return "text-[#f54d27]";
    case "GitHub":
      return "";
    case "Blender":
      return "text-[#e37200]";
    case "Figma":
      return "";
    default:
      return "";
    case "JavaScript":
      return "text-[#f2ff00]";
    case "Sass":
      return "text-[#ff00ff]";
  }
}
export function getTechnologyIcon(tech) {
  switch (tech) {
    case "React":
      return <BiLogoReact />;
    case "Next.js":
      return <TbBrandNextjs />;
    case "Tailwind CSS":
      return <BiLogoTailwindCss />;
    case "Bootstrap":
      return <BiLogoBootstrap />;
    case "CSS3":
      return <BiLogoCss3 />;
    case "HTML5":
      return <BiLogoHtml5 />;
    case "MongoDB":
      return <BiLogoMongodb />;
    case "Node.js":
      return <BiLogoNodejs />;
    case "MySQL":
      return <SiMysql />;
    case "Express":
      return <SiExpress />;
    case "Git":
      return <BiLogoGit />;
    case "GitHub":
      return <BiLogoGithub />;
    case "Blender":
      return <BiLogoBlender />;
    case "Figma":
      return <TbBrandFigma />;
    case "JavaScript":
      return <IoLogoJavascript />;
    case "Sass":
      return <IoLogoSass />;
    default:
      return null;
  }
}
