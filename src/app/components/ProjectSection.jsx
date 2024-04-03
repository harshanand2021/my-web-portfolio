"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "D-Mart clone",
    description: "Clone of D-Mart web Application using HTML and CSS",
    image: "/images/projects/img2.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/harshanand2021/D-Mart_Clone.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "VTU (Visvesvaraya Technological University)",
    description: "React JS project of VTU university web application",
    image: "/images/projects/img1.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/harshanand2021/vtu_project.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="web application"
          isSelected={tag === "web"}
        />
      </div>
      <div>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
