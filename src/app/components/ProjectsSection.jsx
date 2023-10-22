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
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    technologies: [
      {
        name: "React",
        colorClass: getTechnologyColorClass("React"),
        icon: getTechnologyIcon("React"),
      },
      {
        name: "Next.js",
        colorClass: getTechnologyColorClass("Next.js"),
        icon: getTechnologyIcon("Next.js"),
      },
    ],
    previewUrl: "https://www.dalequevalen.com/",
  },
  {
    id: 2,
    title: "CCT Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "https://dashing-sopapillas-760c5d.netlify.app/",
  },
  {
    id: 3,
    title: "App Weather Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    previewUrl: "/projects",
  },
  {
    id: 4,
    title: "Pomodoro Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    previewUrl:
      "https://64a9d770bcf4a13f8bb0bf13--rad-duckanoo-7c71cb.netlify.app/",
  },
  {
    id: 5,
    title: "Calculator Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    previewUrl: "https://estebanportfolio20.netlify.app/pro4",
  },
  {
    id: 6,
    title: "Quiz Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    previewUrl:
      "https://64a9d6cb2211464449251141--earnest-starlight-f4cee5.netlify.app/",
  },
  {
    id: 7,
    title: "Beta Game Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    previewUrl: "https://estebanportfolio20.netlify.app/pro2",
  },
  {
    id: 8,
    title: "E-commerce model",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    previewUrl: "https://estebanportfolio20.netlify.app/pro7",
  },
  {
    id: 9,
    title: "Portfolio Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    previewUrl: "https://estebanportfolio20.netlify.app/",
  },
  {
    id: 10,
    title: "Currency converter",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    previewUrl: "/projects",
  },
  {
    id: 11,
    title: "Data Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    previewUrl: "https://estebanportfolio20.netlify.app/pro5",
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </>
  );
};
