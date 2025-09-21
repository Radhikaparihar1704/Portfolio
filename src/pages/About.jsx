import React from 'react'

function About(){
    return (
   <div className="h-screen w-screen bg-black text-white">
    <div className="h-50 w-50 rounded-full object-fit overflow-hidden bg-gray-500 ">
    <img  src="public/picture .jpg" alt="radhika" />
   </div>
   <div className="m-8 pr-7 tight-tracking pt-5  flex flex-wrap">
    <div>
    <h1 className="text-xl font-semibold border-b border-white/30 pb-3 hover:text-pink-400">About-me</h1>
    <p className="p-5">Hi, I’m <span className ="text-pink-400 font-semibold text-xl"> Radhika</span>, a passionate web developer with a strong interest in creating modern and user-friendly websites. I enjoy turning ideas into interactive experiences using technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. Alongside technical skills, I also explore UI/UX design to craft clean and engaging interfaces. I believe in continuous learning and love working on projects that challenge me to grow as a developer.</p>
   </div>
   <div className="ml-2">
    <h1 className="text-xl font-semibold border-b border-white/30 pb-3 hover:text-pink-400">Education</h1>
    <p className="p-5"> Pursuing<span className="text-pink-400 font-semibold text-xl"> B.tech</span>  in Computer Science stream from <span className="text-pink-400 font-semibold text-xl">Radharaman Engineering College</span> Bhopal Madhya Pradesh </p>
   </div>
   </div>
   </div>
    )
}


export default About;
