import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  const projects = [
    {
      imageUrl: "/images/projects/password-generator.png",
      link: "https://www.npmjs.com/package/jd-password-generator?activeTab=readme",
      alt: "jd-password-generator",
    },
    {
      imageUrl: "/images/projects/full-stack-class.png",
      link: "https://jayantdwivedi.github.io/Full-Stack-Class/",
      alt: "full-stack-class",
    },
    {
      imageUrl: "/images/projects/password-generator.png",
      link: "https://www.npmjs.com/package/jd-password-generator?activeTab=readme",
      alt: "jd-password-generator",
    },
  ];
  return (
    <div
      id="projects"
      className="container mx-auto px-4 md:px-6 lg:px-20 flex justify-center flex-col my-20 md:my-[150px]"
    >
      <p className="text-3xl md:text-6xl text-center">Projects</p>
      <div className="flex justify-between flex-wrap gap-28 mt-10 md:mt-20">
        {projects?.map((project) => (
          <div
            key={project.link}
            className="project-content flex flex-col gap-4 rounded-lg"
          >
            <Image
              className="w-full h-full rounded-lg"
              src={project.imageUrl}
              alt={project.alt}
              width={1000}
              height={1000}
            />
            <Link
              className="flex items-center gap-2 w-fit px-3 py-1 rounded-lg border-slate-400 border-2"
              target="_blank"
              href={project.link}
            >
              Link <span className="material-symbols-outlined">link</span> 
            </Link>
          </div>
        ))}
      </div>
      <p className="text-xl md:text-2xl text-center mt-8 md:mt-16">
        More are coming <span className="text-[#00909e]">soon...</span>
      </p>
    </div>
  );
};

export default Projects;
