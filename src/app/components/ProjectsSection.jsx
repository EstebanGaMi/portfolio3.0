"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { ProjectCard } from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CCT Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Data Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "App Weather Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Conversor Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Pomodoro Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Calculator Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Quiz Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Beta Game Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    previewUrl: "/",
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
