import React from "react";
import {Link} from "react-router-dom"

function Projectcard({ title, description, project ,git }) {
  return (
    <div className="max-w-xs w-full bg-black border border-white rounded-lg min-h-[100px] max-h-[250px] overflow-auto shadow-md shadow-cyan-300 flex flex-col mt-10 p-5 hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-cyan-400 font-bold text-2xl bg-gradient-to-t from-cyan-400 via-indigo-300 to-white text-transparent bg-clip-text  mb-2">{title}</h1>
      <p className="text-white text-sm mb-4">{description}</p>
      <div className="flex gap-3 ">
        <Link className="bg-black border border-white text-indigo-400  shadow-md shadow-white rounded-md px-4 py-2 hover:bg-gray-800 hover:scale-120 transition-colors duration-200" to = {project}>
          Project
        </Link>
        <Link className="bg-black  border border-white text-indigo-400 shadow-md shadow-white rounded-md px-4 py-2 hover:bg-gray-800 hover:scale-120 transition-colors duration-200" to={git}>
          Git
        </Link>
      </div>
    </div>
  );
}

export default Projectcard;







