import React from "react";
import {Link} from "react-router-dom"

function Projectcard({ title, description, project ,git }) {
  return (
    <div className="max-w-xs w-full bg-black border border-white rounded-lg min-h-[100px] max-h-[250px] overflow-auto shadow-md flex flex-col mt-10 p-5 hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-pink-400 font-bold text-lg mb-2">{title}</h1>
      <p className="text-white text-sm mb-4">{description}</p>
      <div className="flex gap-3 ">
        <Link className="bg-black border border-white text-pink-400 rounded-md px-4 py-2 hover:bg-gray-800 transition-colors duration-200" to = {project}>
          Project
        </Link>
        <Link className="bg-black  border border-white text-pink-400 rounded-md px-4 py-2 hover:bg-gray-800 transition-colors duration-200" to={git}>
          Git
        </Link>
      </div>
    </div>
  );
}

export default Projectcard;







