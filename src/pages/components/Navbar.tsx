"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/70 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center group cursor-pointer">
          <span className="text-xl font-bold tracking-tighter text-white hover:text-indigo-500">
            KAUNG KHANT PHYOE
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex gap-10 text-[13px] font-medium uppercase tracking-wider text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-lg border-b border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col items-center gap-6 py-8 text-sm font-medium uppercase tracking-widest text-gray-400">
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#skills"
                className="hover:text-white transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#projects"
                className="hover:text-white transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#contact"
                className="hover:text-white transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#contact"
                className="mt-2 px-8 py-3 bg-indigo-600 text-white rounded-full"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
