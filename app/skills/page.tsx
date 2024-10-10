"use client"
import Image from 'next/image';
import React from 'react';
import AdvancedAnimatedText from '@/app/components/animatedText';

const skills = [
  { name: 'HTML5', level: 'Expert' },
  { name: 'CSS3', level: 'Expert' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'React.js', level: 'Expert' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Expert' },
  { name: 'Bootstrap', level: 'Expert' },
];

const Skills = () => {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"  // Ensure this is placed in the 'public' directory
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>

      <section className="container py-10 relative z-10">
        <h2 className="text-center text-red-600 text-6xl font-bold mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <AdvancedAnimatedText text="Skills" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl">
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">{skill.name}</h4>
              <p className="text-lg text-gray-600">{skill.level}</p>
              <div className="mt-3">
                {/* Progress bar simulation */}
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r from-red-300 to-red-800 ${
                      skill.level === 'Expert' ? 'w-10/12' : 'w-8/12'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
