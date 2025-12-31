import React from "react";
import avatarImg from "../../assets/AbhiBG.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 
                      flex flex-col-reverse md:flex-row 
                      items-center gap-10">

        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 md:text-left px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug md:leading-tight">
            <TextChange />
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl tracking-tight leading-relaxed">
            It is my Toon pic used in my official Portfolio Website 😊
            This website is built using <strong>Vite + React JS</strong>.
          </p>

          <ul className="mt-4 space-y-2 text-sm sm:text-base md:text-lg lg:text-xl list-disc list-inside">
            <li>
              Full Stack Developer — 1 Year Experience (Including Internship)
            </li>
            <li>
              Good knowledge of MERN Stack (Next.js, React, Node, Express, MongoDB)
            </li>
          </ul>

          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1V_eNmy3DZ3yOh15Ilif8zjAzO--quLq6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#465697] px-6 py-3 rounded-full 
                 text-sm sm:text-base md:text-lg font-semibold
                 hover:opacity-90 hover:scale-105 transition-transform duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>


        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={avatarImg}
            alt="Abhishek Avatar"
            className="w-52 sm:w-64 md:w-80 lg:w-96 
                       object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;