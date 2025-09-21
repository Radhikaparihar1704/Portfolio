import React from 'react'
import  Projectcard from "../components/Projectcard"

function Project(){
    const data = [ { title:"To-do-list", description:"A simple app to add, edit, delete, and mark tasks as complete. It helps users manage daily tasks and stay organized.", project:"https://to-do-list-pi-two-62.vercel.app/",git:"https://github.com/Radhikaparihar1704/To-Do-list"},
        { title:"Simon Says game", description:"A fun memory game where players repeat the sequence of colors shown by the computer. Each round adds a new step, testing focus and memory skills.", project:"",git:'https://github.com/Radhikaparihar1704/Simon-Says-Game'}
    ];
    return (
   <>
   <div className=' w-screen h-screen  flex gap-5 bg-black'>
    {data.map((item,index)=>
      <Projectcard {...item}/>
    )}
   </div>
   </>
    )
}


export default Project;
