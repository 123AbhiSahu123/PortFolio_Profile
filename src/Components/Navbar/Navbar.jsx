import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white bg-[#0f172a]/80 backdrop-blur-md px-10 pt-6 md:px-20 py-5 sm-py-3 fixed top-0 left-0 w-full z-50">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`
          ${menu ? "block" : "hidden"}
          mx-24 mt-4 font-semibold
          bg-black bg-opacity-30 px-2 rounded-xl
          text-center
          md:bg-transparent md:static md:mx-0 md:flex gap-6
        `}
      >

        <a href="#Home" onClick={() => setMenu(false)}>
          <li className="scroll-mt-24 text-md transition-all duration-300 p-1 md:p-0">
            Home
          </li>
        </a>

        <a href="#About" onClick={() => setMenu(false)}>
          <li className="scroll-mt-24 text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>

        <a href="#Experience" onClick={() => setMenu(false)}>
          <li className="scroll-mt-24 text-md transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>

        <a href="#Projects" onClick={() => setMenu(false)}>
          <li className="scroll-mt-24 text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>

        <a href="#Achievements" onClick={() => setMenu(false)}>
          <li className="scroll-mt-24 text-md transition-all duration-300 p-1 md:p-0">
            Achievements
          </li>
        </a>

        <a href="#Footer" onClick={() => setMenu(false)}>
          <li className="scroll-mt-24 text-md transition-all duration-300 p-1 md:p-0">
            Contact Me
          </li>
        </a>
      </ul>

      {/* Toggle Button */}
      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer z-50"
          onClick={() => setMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer z-50"
          onClick={() => setMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
