import React from 'react';
import Skillcard from '../components/Skillcard';

function Skill() {
  const skills = [
    {head: "Technical Skills",items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "C programming", "React"],},
    { head: "Designing Skills", items: ["UI/UX Design", "Figma"] },
    { head: "Soft Skills", items: ["Communication", "Leadership", "Team work"] },
  ];

  return (
    <div  className="bg-black min-h-screen w-screen p-3">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl text-pink-400 font-bold mb-6 pl-5">Skills</h1>

        <div className="flex flex-col md:flex-row gap-10 max-w-7xl">
          {skills.map((section, index) => (
            <Skillcard key={index} head={section.head} items={section.items} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;

