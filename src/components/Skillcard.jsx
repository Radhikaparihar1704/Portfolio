import React from 'react';

function Skillcard({ head, items }) {
  return (
    <div className="bg-black text-white rounded-xl p-5">
      <h2 className="text-xl font-semibold border-b border-white/30 pb-3 hover:text-pink-400">
        {head}
      </h2>

      <div className="flex items-center gap-4  flex-wrap mt-4">
        {items.map((item ,index)=>(
            <h1 className='text-white  border border-white p-5 rounded-full hover:bg-white/20 hover:text-pink-400 '>{item}</h1>
        ))}

      </div>
    </div>
  );
}

export default Skillcard;

