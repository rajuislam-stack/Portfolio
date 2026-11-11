import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { projects } from '../data.js'; 

export default function Projects() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projects[currentIndex];

  // Next Slide Handler
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Prev Slide Handler
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <>

    <div className='flex flex-col justify-center items-center '>
       <span id='works'>My Projects</span>
       <h1>Featured Works & Practice Projects</h1>
       <p>A showcase of real-world applications built with clean architecture, modern frontend frameworks, and structured backend logic.</p>
    </div>


    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col justify-between py-8 px-4 md:px-12">
        
       
        


      {/* 1. Dynamic Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0 opacity-40"
        style={{ backgroundImage: `url(${currentProject.bgImage})` }}
      />
      {/* Gradient Dark Overlay for Perfect Readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/40 z-10" />

      {/* 2. Top Navigation Tabs (Projects List like Seasons) */}
      <div className="relative z-20 flex flex-wrap gap-4 md:gap-8 justify-center items-center border-b border-white/15 pb-4 pt-2">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => setCurrentIndex(idx)}
            className={`text-xs md:text-sm uppercase tracking-widest transition-all pb-1 ${
              currentIndex === idx 
                ? 'text-white border-b-2 border-white font-bold scale-105' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            0{proj.id} / {proj.title}
          </button>
        ))}
      </div>

      {/* 3. Middle Section: Left & Right Arrow Buttons for Changing Projects */}
      <div className="relative z-20 flex justify-between items-center my-auto px-2 md:px-6">
        {/* Left Arrow Button */}
        <button 
          onClick={handlePrev}
          className="p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 transition-all text-white cursor-pointer"
          aria-label="Previous Project"
        >
          <Icon icon="mdi:chevron-left" className="text-2xl md:text-3xl" />
        </button>

        {/* Right Arrow Button */}
        <button 
          onClick={handleNext}
          className="p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 transition-all text-white cursor-pointer"
          aria-label="Next Project"
        >
          <Icon icon="mdi:chevron-right" className="text-2xl md:text-3xl" />
        </button>
      </div>

      {/* 4. Bottom Main Content Area */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mt-8">
        
        {/* Left Side: Title & Subtitle */}
        <div>
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2 block">
            Featured Project 0{currentProject.id}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">
            {currentProject.title}
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mb-4 leading-relaxed">
            {currentProject.subtitle}
          </p>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {currentProject.tech.map((t, idx) => (
              <span key={idx} className="text-xs bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-gray-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Key Features & Action Buttons */}
        <div className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
          <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">Key Features</h4>
          <ul className="space-y-2 text-sm text-gray-200 mb-6">
            {currentProject.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action Buttons (Live Demo & GitHub) */}
          <div className="flex flex-wrap gap-4">
            <a 
              href={currentProject.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-gray-200 transition shadow-md"
            >
              <Icon icon="mdi:external-link" className="text-lg" />
              Live Demo
            </a>
            <a 
              href={currentProject.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-sm font-semibold rounded-xl hover:bg-white/20 transition backdrop-blur-md"
            >
              <Icon icon="mdi:github" className="text-lg" />
              GitHub Code
            </a>
          </div>
        </div>

      </div>

    </section>
    </>
  );
}