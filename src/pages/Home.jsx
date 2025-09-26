import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_50%_75%] from-black via-black to-cyan-900 to-90% text-white px-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] "></div>
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight font-serif">
          Hello, I'm <span className="bg-gradient-to-t from-cyan-300 via-cyan-700 to-white bg-clip-text text-transparent">Radhika Parihar </span>
        </h1>   
         
<p className="text-xl md:text-xl mb-6 font-light text-gray-300">
  I am{" "}
  <span className="text-indigo-300 text-2xl font-semibold">
    <Typewriter
      options={{
        strings: [
          "Creative React.js Developer",
          "Frontend Enthusiast",
          "UI/UX Designer",
        ],
        autoStart: true,
        loop: true,
        delay: 30,
        deleteSpeed: 20,
      }}
    />
     </span>{" "}
  crafting elegant, modern, and responsive web experiences.
 </p>

        <div className="flex gap-4 justify-center mb-6">
          <a
            href="public/RADHIKA PARIHAR .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3  shadow-white rounded-full bg-cyan-400 text-black font-medium hover:bg-cyan-700 shadow-md transition duration-300"
          >
            Resume
          </a>

          <Link
            to="/Skill"
            className="px-6 py-3  shadow-white rounded-full bg-cyan-400 text-black font-medium hover:bg-cyan-700 shadow-md  transition duration-300"
          >
            Skills
          </Link>
        </div>

        <div className="flex justify-center gap-6 text-white text-xl">
          <a href="https://github.com/" target="_blank" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/radhika-parihar1720040567" target="_blank" className="hover:text-cyan-400 transition">
            <FaLinkedin />
          </a>



        </div>
      </div>
    </div>
  );
}

export default Home;
