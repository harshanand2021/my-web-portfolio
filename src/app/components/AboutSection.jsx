"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React JS</li>
        <li>Next.js</li>
        <li>Bootstrap</li>
        <li>Java Backend</li>
        <li>JDBC</li>
        <li>Spring-Boot Framework</li>
        <li>SQL Database</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Vellore Institute of Technology - (VIT Bhopal campus)</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Full-Stack Java Development Certified - Besant Technologies (Mar 2024)
        </li>
        <li>
          Meta React Basics certified frontend developer - Coursera (Mar 2024)
        </li>
        <li>Python for Beginners - Udemy (Apr 2021)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          priority
          alt="about-section-img"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello, I'm Harsh Anand, a seasoned full-stack Java developer. With a
            passion for crafting robust and efficient software solutions, I
            thrive in the dynamic realm of web development. Equipped with
            comprehensive expertise in both front-end and back-end technologies,
            I specialize in leveraging Java to build scalable and innovative
            applications. My dedication to delivering high-quality code and my
            constant drive for learning ensure that I stay at the forefront of
            technological advancements. Let's collaborate and create impactful
            solutions together.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab == "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab == "certification"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
