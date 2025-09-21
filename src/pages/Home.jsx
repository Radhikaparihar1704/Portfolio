import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg- black rounded-full "></div>
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight font-serif text-gradient">
          Hello, I'm <span className="text-pink-400">Radhika Parihar</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 font-light text-gray-300">
          Creative <span className="font-semibold text-purple-400">React.js Developer</span> 
           crafting elegant, modern, and responsive web experiences.
        </p>
        <div className="flex gap-4 justify-center mb-6">
           <a href= "public\RADHIKA PARIHAR .pdf" target="_blank" rel="noopener noreferrer"className="px-6 py-3 rounded-full bg-pink-500 text-black font-medium hover:bg-pink-400 transition duration-300 shadow-lg">
            Resume
            </a>
           <Link className="px-6 py-3 rounded-full bg-pink-500 text-black font-medium hover:bg-pink-400 transition duration-300 shadow-lg" to ="/Skill"> Skills</Link>
       </div>
        <div className="flex justify-center gap-6 text-white text-xl">



          <a href="https://github.com/" target="_blank"  className="hover:text-pink-400 transition">
            <FaGithub />
          </a>
        
             <a href ="https:www.linkedin.com/in/radhika-parihar1720040567" target="_blank"  className="hover:text-purple-400 transition" >
            <FaLinkedin />
          </a>



        </div>
      </div>
    </div>
  );
}

export default Home;
