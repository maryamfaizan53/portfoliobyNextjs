"use client";

import React from "react";
import Image from "next/image";
import AdvancedAnimatedText from '@/app/components/animatedText';

const Projects = () => {
  const projects = [
    {
      title: "Countdown Timer",
      description:
        "A fully responsive countdown timer built with Next.js and Tailwind CSS.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/ctd.jpeg", // Ensure this image is in the public directory
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio website.",
      techStack: ["React", "Tailwind CSS", "Next.js"],
      image: "/portfolio.png",
      link: "#",
    },
    {
      title: "Login page",
      description: "A modern, responsive and interactive login page.",
      techStack: ["React", "Tailwind CSS", "Next.js"],
      image: "/login.png",
      link: "#",
    },
    {
      title: "Toursit Populars",
      description: "A modern, responsive Tourists places website.",
      techStack: ["React", "Tailwind CSS", "Next.js"],
      image: "/countries.png",
      link: "#",
    },
    {
      title: "To-Do List",
      description: "A modern, responsive  and interactive To do List website.",
      techStack: ["HtML", "CSS", "Typescript"],
      image: "/todolist.png",
      link: "#",
    },
    {
      title: "Ecommerce Website",
      description: "A modern, responsive E-Commerce website.",
      techStack: ["HTML", " CSS", "Javascript"],
      image: "/amazon.png",
      link: "#",
    },
    // Add more projects here
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg" // Background image
          alt="Background image"
          fill
          className="object-cover opacity-25"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl px-6 py-12 text-center md:text-left">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-8">
        <AdvancedAnimatedText text="My Projects" />
        </h1>

        {/* Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full mb-4">
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl text-red-600 font-semibold mb-4">
                {project.title}
              </h2>
              <p className="text-white text-lg mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-red-500 font-bold underline hover:text-red-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
