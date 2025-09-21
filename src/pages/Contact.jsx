import React, { useState } from "react";

function Contact() {
  return (
    <div className=" h-screen w-screen text-white mx-auto p-6 bg-black flex flex-col">
      <h2 className="text-3xl font-bold mb-4 text-pink-400">Contact Me</h2>
      <div className="mb-6 flex flex-col gap-10 justify-center items-center">
        <p><span className="text-lg  ">Email :</span> <a className=" hover:text-pink-400"  href="mailto:radhikaparihar1704@gmail.com" target="_blank" >radhikaparihar1704@gmail.com</a></p>
        <p><span className="text-lg ">LinkedIn :</span> <a  className =" hover:text-pink-400" href= "https:www.linkedin.com/in/radhika-parihar1720040567" target="_blank" >LinkedIn</a></p>
        <form className="flex flex-col gap-3 w-full">
          <input type="text" placeholder="Your Name" className="p-3 pr-6 rounded bg-gray-800 text-white"/>
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 text-white"/>
        <textarea placeholder="Your Message" className="p-4 rounded bg-gray-800 text-white"></textarea>
         <button className="bg-pink-400 hover:bg-pink-500 text-black py-2 rounded">Send</button>
        </form>

      </div>
      </div>

     );
}
export default Contact;

