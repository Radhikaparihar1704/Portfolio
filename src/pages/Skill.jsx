import React from 'react'
import Skillcard from '../components/Skillcard';

function Skill() {
 const skill=["HTML","CSS","JavaScript", "Tailwind CSS", "C programming" , "React" ];
 const skill1=[ "UI/Ux Design" ,"Figma"];
 const softskill=[ "Communication", "Leadership" ,"Team work"];
 
return (
        <div className='bg-black h-screen w-screen'>
            {skill.map((item, index) => (
         <Skillcard key={index} name={item} />
           ))}

        </div>
        


  )
}

export default Skill


