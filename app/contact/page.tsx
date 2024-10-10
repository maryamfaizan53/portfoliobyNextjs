"use client";
import React, { useState } from "react";
import Image from "next/image";
import AdvancedAnimatedText from '@/app/components/animatedText';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-700">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg" // Ensure the image is in the public folder
          alt="background image"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl px-6 py-12 bg-opacity-90 bg-gray-800 backdrop-blur-md rounded-lg shadow-2xl">
        <h2
          className="text-5xl text-center font-bold text-white mb-8"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <AdvancedAnimatedText text="Get In Touch" />
        </h2>

        <p className="text-center text-lg text-gray-300 mb-12" style={{ fontFamily: "Open Sans, sans-serif" }}>
          Whether you want to collaborate on a project or just say hi, feel free to drop me a message.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
