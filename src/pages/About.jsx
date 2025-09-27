import React from "react";

function About() {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_50%_75%] from-black via-black to-cyan-900 to-90% text-white px-6 font-sans relative overflow-hidden">
      
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-700/50 mb-6 max-auto">
        <img src= "public/picture .jpg" alt="radhika" className="w-full h-full object-cover object-top" />
      </div>

      {/* Education Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-300 via-indigo-400 to-white bg-clip-text text-transparent">
          Education
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Pursuing <span className="text-cyan-400 font-semibold">B.Tech</span> in Computer Science 
          from <span className="text-green-200 font-semibold">Radharaman Engineering College</span>, 
          Bhopal, Madhya Pradesh.
        </p>
        <h2 className="text-lg mt-2 text-gray-400">CGPA: <span className="font-semibold text-white">7.53</span></h2>
      </div>

      {/* About Me Section */}
      <div className="mt-10 max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-indigo-400 to-white bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed px-4">
          Hi, I’m <span className="text-cyan-400 font-semibold">Radhika</span>, a passionate web developer 
          who loves building modern and user-friendly websites. I specialize in 
          <span className="text-indigo-400 font-semibold"> React.js, Tailwind CSS,</span> and enjoy creating 
          elegant and responsive UI/UX designs. Always eager to learn and grow, I aim to 
          turn creative ideas into interactive digital experiences. 
        </p>
      </div>
    </div>
  );
}


export default About;
