 import React from "react";
 import { Link } from "react-scroll";
 function Navbar() {
   return (
<nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white shadow-lg shadow-cyan-500/50">
  <div className="max-w-10xl mx-auto flex justify-center items-center px-6 py-4 gap-10">
 <Link smooth="easeOutQuart" spy={true}  className=" relative cursor-pointer hover:text-cyan-500 after:content-[''] after:block after:w-0 after:h-[3px] after:bg-cyan-500 after:duration-200  hover:after:w-full " offset={-80}   activeClass="text-cyan-500" to="home">Home</Link>
 <Link smooth="easeOutQuart" spy={true}  className=" relative cursor-pointer hover:text-cyan-500 after:content-[''] after:block after:w-0 after:h-[3px] after:bg-cyan-500 after:duration-200  hover:after:w-full" offset={-80}  activeClass="text-cyan-500" to="about">About</Link>
 <Link smooth="easeOutQuart" spy={true}  className=" relative cursor-pointer hover:text-cyan-500 after:content-[''] after:block after:w-0 after:h-[3px] after:bg-cyan-500 after:duration-200  hover:after:w-full" offset={-80}   activeClass="text-cyan-500" to="project">Project</Link>
 <Link smooth="easeOutQuart" spy={true}  className=" relative cursor-pointer hover:text-cyan-500 after:content-[''] after:block after:w-0 after:h-[3px] after:bg-cyan-500 after:duration-200  hover:after:w-full"  offset={-80}  activeClass="text-cyan-500" to="contact">Contact</Link>
  </div>
</nav>
  );
 }

export default Navbar;

