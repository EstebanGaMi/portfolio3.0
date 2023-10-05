"use client";
import React, { useState } from "react";
import ProjectTag from "./ProjectTag";
import { ProjectCard } from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "CCT Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Data Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "App Weather Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Conversor Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Pomodoro Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Calculator Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
  },
  {
    id: 7,
    title: "Quiz Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
  },
  {
    id: 8,
    title: "Beta Game Project",
    description:
      "Lorem ipsum dcepteur sint occaecat cupiicia deserunt mollit anim  est laborum.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
  },
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-40 mb-6">
        My Projects
      </h2>
      <div className=" text-white text-4xl z-50 font-bold flex flex-row justify-center items-center gap-2 py-6">
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 p-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project.image}
          />
        ))}
      </div>
    </>
  );
};
