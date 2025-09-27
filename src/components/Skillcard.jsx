import React from 'react';

function Skillcard({ head, items }) {
  return (
    <div className="bg-black text-white rounded-xl p-5 shadow-lg hover:shadow-cyan-400/50  transform hover:scale-105">
      <h2 className="text-xl font-semibold border-b border-white/30 pb-3 hover:text-cyan-400 transition-colors">
        {head}
      </h2>

      <div className="flex items-center gap-4 flex-wrap mt-4">
        {items.map((item, index) => (
          <h1
            key={index}
            className="text-white text-xl flex justify-center items-center gap-3 border border-white px-4 py-2 rounded-full hover:bg-white/20 hover:text-indigo-400 transition-colors" >
            {item.name}<span >{item.icon}</span>
          </h1>
        ))}

      </div>
    </div>
  );
}

export default Skillcard;


