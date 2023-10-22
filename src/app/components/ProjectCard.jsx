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

export const ProjectCard = ({
  imgUrl,
  title,
  description,
  previewUrl,
  technologies,
}) => {
  return (
    <div className="shadow-xl shadow-black rounded-xl cursor-pointer">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-all duration-500">
          <Link
            href={previewUrl}
            target="_blank"
            className="h-full w-full "
          ></Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        {technologies && technologies.length > 0 && (
          <ul className="text-6xl flex gap-5 flex-wrap">
            {technologies.map((tech) => (
              <li key={tech.name} className={tech.colorClass}>
                {tech.icon}
              </li>
            ))}
          </ul>
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
      return ""; // Define la clase de color para Express si lo deseas
    case "Git":
      return "text-[#f54d27]";
    case "GitHub":
      return ""; // Define la clase de color para GitHub si lo deseas
    case "Blender":
      return "text-[#e37200]";
    case "Figma":
      return ""; // Define la clase de color para Figma si lo deseas
    default:
      return ""; // Devuelve una clase por defecto si la tecnología no se encuentra
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
      return <SiExpress />; // Define el icono para Express si lo deseas
    case "Git":
      return <BiLogoGit />;
    case "GitHub":
      return <BiLogoGithub />; // Define el icono para GitHub si lo deseas
    case "Blender":
      return <BiLogoBlender />;
    case "Figma":
      return <TbBrandFigma />; // Define el icono para Figma si lo deseas
    default:
      return null; // Devuelve null si el icono no se encuentra
  }
}
