import React from 'react'

function About(){
    return (
   <div className="min-h-screen flex flex-col  justify-center bg-radial-[at_50%_75%] from-black via-black to-cyan-900 to-90% text-white px-6 font-sans relative overflow-hidden">
    <div className="flex">
    <div className="h-50 w-50 rounded-full overflow-hidden bg-gray-500 ">
    <img  src="public/picture .jpg" alt="radhika" />
    </div>
    <div>
    <h1 className="ml-4 text-xl font-semibold  border-b border-white/30 pb-3 hover:text-cyan-400"><span className="shadow-md shadow-white rounded-full p-1"> Education</span></h1>
    <p className="pl-5"> Pursuing<span className="text-cyan-400 font-semibold text-xl"> B.tech</span>  in Computer Science stream from <span className="text-indigo-400 font-semibold text-xl">Radharaman Engineering College</span> Bhopal Madhya Pradesh </p>
  <h2 className="text-xl ml-4 pt-2 text-gray-400 "> CGPA: 7.53</h2> 
   </div>
   </div>
   <div className="m-8 pr-7 tight-tracking pt-5  flex flex-wrap">
    <div>
    <h1 className="text-xl font-semibold border-b border-white/30 pb-3 hover:text-cyan-400">About-me</h1>
    <p className="p-5">Hi, I’m <span className ="text-gray-400 font-semibold text-xl"> Radhika</span>, a passionate web developer with a strong interest in creating modern and user-friendly websites. I enjoy turning ideas into interactive experiences using technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. Alongside technical skills, I also explore UI/UX design to craft clean and engaging interfaces. I believe in continuous learning and love working on projects that challenge me to grow as a developer.</p>
   </div>
   
   </div>
   </div>
    )
}


export default About;
