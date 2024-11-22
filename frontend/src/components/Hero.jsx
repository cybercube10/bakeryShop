// Hero.js
import React from 'react';
import sweetGif from '../assets/sweet.gif'; 
import { FaShoppingBag } from "react-icons/fa";
import { TbBrandCakephp } from "react-icons/tb";
 
function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${sweetGif})` }}
      ></div>

      {/* Overlay to darken the GIF for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-4">
        <div className="text-white text-2xl  font-bold flex items-center" style={{ fontFamily: 'Rubik Wet Paint, cursive' }}><TbBrandCakephp />Sweet Tooth Society</div>
        
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <input 
            type="text" 
            placeholder="Search..." 
            className="px-4 py-2 rounded-full focus:outline-none text-black"
          />
          {/* Cart icon */}
          <button className="text-white"><FaShoppingBag /></button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
        <h1 className="text-4xl font-bold mb-4 " style={{ fontFamily: 'Montserrat' }}>Life's a Mess? Eat Cake!</h1>
        <p className="text-lg mb-8">Quench your sugar rush </p>
        <button style={{ fontFamily: 'Montserrat' }} className="px-4 py-3 border border-4 border-black  font-semibold text-black  rounded-md bg-white">Treat Yo' Self!</button>
      </div>
    </div>
  );
}

export default Hero;
