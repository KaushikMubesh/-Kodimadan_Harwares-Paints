import React from 'react';
import Asian from './assets/Asian.png';

export const AsianPaints = () => {
  return (

    // fucking GPT Made This !!!
    <div className="p-0 mx-0">
      <div className="w-full flex items-center justify-center h-[600px] relative">
        {/* Background with blur effect */}
        <div className="absolute inset-0 w-full h-full bg-primaryyel blur-xl bg-opacity-70 z-0"></div>

        {/* Content container */}
        <div className="z-10 absolute flex gap-72 items-center">

          {/* Text section with blurred background */}
          <div className="relative w-[500px] h-[400px] bg-gray-100 bg-opacity-40 shadow-lg flex items-center justify-center overflow-hidden">
            {/* Blurred background */}
            <div className="absolute inset-0 bg-gray-100 bg-opacity-40 blur-lg backdrop-blur-xl z-0"></div>
            
            {/* Clear text inside the cat container */}
            <div className="relative z-10 blur-none cat p-8">
              <p className="text-black font-kavivanar text-[20px] leading-[45px]"><span className="text-primaryyel/40 mr-9"></span>
                <span className='text-[40px]'>W</span>e have been proudly dealing with Asian Paints since 2023 and are an authorized dealer for the brand. With over 2200+ colors available, we offer a wide range of options to help you create the perfect look for your home. Trust us for quality, variety, and expert advice on all your painting needs!
              </p>
            </div>
          </div>

          {/* Image section (unblurred) */}
          <div className="pt-0" style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.25)', WebkitTextStroke: '1px white' }}>
            <img width={500} className="drop-shadow-[10px_20px_60px_rgba(0,0,0,5)]" src={Asian} alt="Asian Paints" />
          </div>
        </div>
      </div>
    </div>
  );
};
