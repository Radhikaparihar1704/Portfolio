import React from 'react'
import  Projectcard from "../components/Projectcard"

function Project(){
    const data = [ { title:"To-do-list", description:"A simple app to add, edit, delete, and mark tasks as complete. It helps users manage daily tasks and stay organized.", project:"https://to-do-list-pi-two-62.vercel.app/",git:"https://github.com/Radhikaparihar1704/To-Do-list"},
        { title:"Simon Says game", description:"A fun memory game where players repeat the sequence of colors shown by the computer. Each round adds a new step, testing focus and memory skills.", project:"",git:'https://github.com/Radhikaparihar1704/Simon-Says-Game'}
    ];
    return (
   <>
   <div  id ="project" className=' w-screen h-screen  flex gap-5  bg-radial-[at_20%_40%] from-black via-black to-cyan-900 to-90% text-white px-6 font-sans relative overflow-hidden'>
    {data.map((item,index)=>
      <Projectcard {...item}/>
    )}
   </div>
   </>
    )
}


export default Project;
