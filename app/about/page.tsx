"use client";

import React from "react";
import Image from "next/image";
import AdvancedAnimatedText from '@/app/components/animatedText';

const About = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"  // Ensure this is placed in the 'public' directory
          alt="background image"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>

      <div className="relative container mx-auto my-12 p-8 bg-transparent rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-center mb-8 text-6xl font-bold text-red-600"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <AdvancedAnimatedText text="About Me" />
        </h1>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10 flex justify-center">
            <Image
              src="/maskgirl.jpg"  // Ensure this image is in the public directory
              alt="My profile picture"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>

          {/* About Text */}
          <div className="md:w-1/2">
            <p className="text-lg mb-4 text-white font-extrabold"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              I am a passionate front-end developer with experience in building modern, responsive web applications using JavaScript, TypeScript, React, and Next.js. I love creating beautiful and functional user interfaces that provide a great user experience.
            </p>
            <p className="text-lg text-white font-extrabold"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              My goal is to continuously improve my skills and stay updated with the latest technologies in web development. I thrive in collaborative environments and enjoy tackling challenging projects.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <h2 className="text-5xl text-center mt-12 font-semibold text-red-600"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <AdvancedAnimatedText text="Skills" />
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <li className="bg-gray-800 p-4 rounded-lg text-center shadow-md text-white">
            JavaScript
          </li>
          <li className="bg-gray-800 p-4 rounded-lg text-center shadow-md text-white">
            TypeScript
          </li>
          <li className="bg-gray-800 p-4 rounded-lg text-center shadow-md text-white">
            React
          </li>
          <li className="bg-gray-800 p-4 rounded-lg text-center shadow-md text-white">
            Next.js
          </li>
          <li className="bg-gray-800 p-4 rounded-lg text-center shadow-md text-white">
            HTML & CSS
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
