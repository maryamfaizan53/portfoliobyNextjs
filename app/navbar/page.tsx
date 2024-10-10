"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="flex bg-red-600 h-14 w-full justify-between items-center px-4">
        {/* Logo at the start */}
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 text-white font-extrabold">
          <li className="hover:text-black transition-colors duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-black transition-colors duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-black transition-colors duration-300">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="hover:text-black transition-colors duration-300">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-black transition-colors duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

