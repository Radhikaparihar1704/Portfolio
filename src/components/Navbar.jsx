import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black flex justify-center items-center shadow-lg p-5 sticky top-0 z-50">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-pink-400 font-semibold border-b-2 border-pink-400 px-4 py-2 transition-all"
            : "text-white hover:text-pink-400 transition-colors px-4 py-2"
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-pink-400 font-semibold border-b-2 border-pink-400 px-4 py-2 transition-all"
            : "text-white hover:text-pink-400 transition-colors px-4 py-2"
        }
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-pink-400 font-semibold border-b-2 border-pink-400 px-4 py-2 transition-all"
            : "text-white hover:text-pink-400 transition-colors px-4 py-2"
        }
        to="/contact"
      >
        Contact
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-pink-400 font-semibold border-b-2 border-pink-400 px-4 py-2 transition-all"
            : "text-white hover:text-pink-400 transition-colors px-4 py-2"
        }
        to="/project"
      >
        Project
      </NavLink>
    </nav>
  );
}

export default Navbar;
