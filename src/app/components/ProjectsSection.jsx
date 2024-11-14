"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { ProjectCard } from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { getTechnologyColorClass, getTechnologyIcon } from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "DaleQueValen",
    description:
      "With a development group, qa, testing, ux, ui, scrum master, we created a website for the cerebral palsy ONG DaleQueValen in which I worked as a Front End Developer. Technologies used:",
    image: "/images/projects/1.webp",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "Next.js",
        colorClass: getTechnologyColorClass("Next.js"),
        icon: getTechnologyIcon("Next.js"),
      },
      {
        name: "Tailwind",
        colorClass: getTechnologyColorClass("Tailwind CSS"),
        icon: getTechnologyIcon("Tailwind CSS"),
      },
      {
        name: "Figma",
        colorClass: getTechnologyColorClass("Figma"),
        icon: getTechnologyIcon("Figma"),
      },
    ],
    previewUrl: "https://www.dalequevalen.com/",
  },
  {
    id: 2,
    title: "E-commerce model",
    description:
      "This project is an eCommerce platform dedicated to the sale of 3D printers and related accessories. The website provides a seamless shopping experience with a focus on usability and modern design.",
    image: "/images/projects/8.webp",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "CSS3",
        colorClass: getTechnologyColorClass("CSS3"),
        icon: getTechnologyIcon("CSS3"),
      },
      {
        name: "HTML5",
        colorClass: getTechnologyColorClass("HTML5"),
        icon: getTechnologyIcon("HTML5"),
      },
    ],
    previewUrl: "https://estebanportfolio20.netlify.app/pro7",
  },
  {
    id: 3,
    title: "CCT Project",
    description:
      "When I worked as a workshop teacher, we needed to register the emails and contacts of the kids who signed up and inform them about the course, that's why I decided to create this app. Technologies used:",
    image: "/images/projects/2.svg",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "JavaScript",
        colorClass: getTechnologyColorClass("JavaScript"),
        icon: getTechnologyIcon("JavaScript"),
      },
      {
        name: "Bootstrap",
        colorClass: getTechnologyColorClass("Bootstrap"),
        icon: getTechnologyIcon("Bootstrap"),
      },
      {
        name: "CSS3",
        colorClass: getTechnologyColorClass("CSS3"),
        icon: getTechnologyIcon("CSS3"),
      },
      {
        name: "HTML5",
        colorClass: getTechnologyColorClass("HTML5"),
        icon: getTechnologyIcon("HTML5"),
      },
    ],
    previewUrl: "https://dashing-sopapillas-760c5d.netlify.app/",
  },
  {
    id: 4,
    title: "Quiz Project",
    description:
      "This project is an interactive quiz about the highly acclaimed video game The Elder Scrolls V: Skyrim. Developed using HTML, CSS, JavaScript, and Bootstrap, it allows players to test their knowledge of the vast Skyrim universe.",
    image: "/images/projects/6.webp",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "JavaScript",
        colorClass: getTechnologyColorClass("JavaScript"),
        icon: getTechnologyIcon("JavaScript"),
      },
      {
        name: "Bootstrap",
        colorClass: getTechnologyColorClass("Bootstrap"),
        icon: getTechnologyIcon("Bootstrap"),
      },
      {
        name: "CSS3",
        colorClass: getTechnologyColorClass("CSS3"),
        icon: getTechnologyIcon("CSS3"),
      },
      {
        name: "HTML5",
        colorClass: getTechnologyColorClass("HTML5"),
        icon: getTechnologyIcon("HTML5"),
      },
    ],
    previewUrl:
      "https://64a9d6cb2211464449251141--earnest-starlight-f4cee5.netlify.app/",
  },
  {
    id: 5,
    title: "Beta Game Project",
    description:
      "This project is a beta registration page for the highly anticipated game based on the popular web novel and manhwa, Solo Leveling. The page allows users to register for exclusive access to the game's beta version.",
    image: "/images/projects/7.webp",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "CSS3",
        colorClass: getTechnologyColorClass("CSS3"),
        icon: getTechnologyIcon("CSS3"),
      },
      {
        name: "HTML5",
        colorClass: getTechnologyColorClass("HTML5"),
        icon: getTechnologyIcon("HTML5"),
      },
    ],
    previewUrl: "https://estebanportfolio20.netlify.app/pro2",
  },
  {
    id: 6,
    title: "Pomodoro Project",
    description:
      "Since I like to study Programming too much and I usually spend too many hours in front of the screen and so that this is not a long-term problem for my health and my consent, I decided to create my own pomodoro. Technologies used:",
    image: "/images/projects/4.webp",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "JavaScript",
        colorClass: getTechnologyColorClass("JavaScript"),
        icon: getTechnologyIcon("JavaScript"),
      },
      {
        name: "Bootstrap",
        colorClass: getTechnologyColorClass("Bootstrap"),
        icon: getTechnologyIcon("Bootstrap"),
      },
      {
        name: "CSS3",
        colorClass: getTechnologyColorClass("CSS3"),
        icon: getTechnologyIcon("CSS3"),
      },
      {
        name: "HTML5",
        colorClass: getTechnologyColorClass("HTML5"),
        icon: getTechnologyIcon("HTML5"),
      },
    ],
    previewUrl:
      "https://64a9d770bcf4a13f8bb0bf13--rad-duckanoo-7c71cb.netlify.app/",
  },
  {
    id: 7,
    title: "Data Project",
    description:
      "This project consists of a static website that presents data organized in a clear and accessible way.",
    image: "/images/projects/11.webp",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "CSS3",
        colorClass: getTechnologyColorClass("CSS3"),
        icon: getTechnologyIcon("CSS3"),
      },
      {
        name: "HTML5",
        colorClass: getTechnologyColorClass("HTML5"),
        icon: getTechnologyIcon("HTML5"),
      },
    ],
    previewUrl: "https://estebanportfolio20.netlify.app/pro5",
  },
  {
    id: 8,
    title: "Calculator Project",
    description:
      "Well this was one of my first projects created with javascript in which I decided to create an area, perimeter and diameter calculator. Used technology:",
    image: "/images/projects/5.webp",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "JavaScript",
        colorClass: getTechnologyColorClass("JavaScript"),
        icon: getTechnologyIcon("JavaScript"),
      },
      {
        name: "CSS3",
        colorClass: getTechnologyColorClass("CSS3"),
        icon: getTechnologyIcon("CSS3"),
      },
      {
        name: "HTML5",
        colorClass: getTechnologyColorClass("HTML5"),
        icon: getTechnologyIcon("HTML5"),
      },
    ],
    previewUrl: "https://estebanportfolio20.netlify.app/pro4",
  },
  {
    id: 9,
    title: "Portfolio Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/10.webp",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "JavaScript",
        colorClass: getTechnologyColorClass("JavaScript"),
        icon: getTechnologyIcon("JavaScript"),
      },
      {
        name: "Sass",
        colorClass: getTechnologyColorClass("Sass"),
        icon: getTechnologyIcon("Sass"),
      },
      {
        name: "HTML5",
        colorClass: getTechnologyColorClass("HTML5"),
        icon: getTechnologyIcon("HTML5"),
      },
    ],
    previewUrl: "https://estebanportfolio20.netlify.app/",
  },
  {
    id: 10,
    title: "Currency converter",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/3.svg",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "JavaScript",
        colorClass: getTechnologyColorClass("JavaScript"),
        icon: getTechnologyIcon("JavaScript"),
      },
      {
        name: "Tailwind",
        colorClass: getTechnologyColorClass("Tailwind CSS"),
        icon: getTechnologyIcon("Tailwind CSS"),
      },
      {
        name: "Next.js",
        colorClass: getTechnologyColorClass("Next.js"),
        icon: getTechnologyIcon("Next.js"),
      },
    ],
    previewUrl: "/projects",
  },
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-40 mb-6">
        My Projects
      </h2>
      <div className=" text-white text-4xl z-0 font-bold flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          OnClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          OnClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          OnClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </>
  );
};
