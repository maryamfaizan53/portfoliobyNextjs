
"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import AdvancedAnimatedText from './components/animatedText';

const Home = () => {
  // Function to open external links in a new tab
  const openLink = (url: string) => {
    if (typeof window !== 'undefined') {  // Ensure window is available (client-side only)
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/pexels-iryna-riabchykova-264150108-12876443.jpg"
          alt="Beautiful technology mobile background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      </div>

      {/* Profile Image */}
      <div className="absolute top-4 left-10 h-60 w-60 rounded-full overflow-hidden drop-shadow-lg z-20 shadow-red-800">
        <Image
          src="/maskgirl.jpg"
          alt="Portrait of Maryam Faizan"
          layout="fill"
          style={{ objectFit: 'cover', boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }} // Orange shadow
        />
      </div>

      {/* Text Content */}
      <main className="relative z-20 text-center">
        <h1 className="font-extrabold text-7xl text-red-600 shadow-white shadow-sm">
          Hello, <br /> I am Maryam Faizan
        </h1>
        <div className="text-6xl font-extrabold text-white mt-4"> {/* Increase text size and color here */}
          <AdvancedAnimatedText text="Web Developer" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-5 space-x-8 text-4xl">
          <FaGithub 
            className="text-red-600 hover:text-zinc-600 cursor-pointer shadow-md"
            style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
            onClick={() => openLink('https://github.com')}
            aria-label="GitHub"
          />
          <FaLinkedin
            className="text-red-600 hover:text-zinc-600 cursor-pointer shadow-md"
            style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
            onClick={() => openLink('https://linkedin.com')}
            aria-label="LinkedIn"
          />
          <SiUpwork
            className="text-red-600 hover:text-zinc-600 cursor-pointer shadow-md"
            style={{ boxShadow: '0 0 30px rgba(255, 69, 0, 0.6)' }}
            onClick={() => openLink('https://upwork.com')}
            aria-label="Upwork"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
