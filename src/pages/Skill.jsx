import React from 'react';
import Skillcard from '../components/Skillcard';
import{FaHtml5, FaCss3Alt, FaJsSquare, FaReact , FaFigma } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";

function Skill() {
  const skills = [
    {
       head: "Technical Skills",
       items:[
        {name:"HTML", icon: <FaHtml5 className="text-orange-500"/>},
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name:"Tailwind CSS", icon:<RiTailwindCssFill className="text-blue-400" />},
        {name: "React", icon:<FaReact className="text-blue-400" />}
       ],
    },
    {
      head: "Designing Skills",
      items: [
        { name: "UI/UX Design", icon: <FaFigma className="text-pink-500" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      ],
    },
     {
      head: "Soft Skills",
      items: [
        { name: "Communication", icon: null },
        { name: "Leadership", icon: null },
        { name: "Team work", icon: null },
      ],
    },
  ];

  return (
    <section className=" mt-10 bg-black min-h-screen w-screen  bg-radial-[at_50%_75%] from-black via-black to-cyan-900 to-90% px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-col flex-wrap gap-10">
          {skills.map((section, index) => (
            <Skillcard key={index} head={section.head} items={section.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;

