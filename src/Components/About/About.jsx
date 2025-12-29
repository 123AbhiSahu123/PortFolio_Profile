import React from "react";
import AboutImg from "../../assets/abhi.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="w-full bg-black/30 text-white"
    >
      <div
        className="max-w-7xl mx-auto px-6 py-12 md:py-20 
                   rounded-xl shadow-xl"
      >
        <h2 className="md:px-10 text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
          About Me
        </h2>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-10">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={AboutImg}
              alt="About"
              className="w-48 sm:w-64 md:w-80 lg:w-96 
                         rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-1/2 space-y-6">

            {/* ITEM */}
            <div className="flex gap-4">
              <IoArrowForward size={26} className="mt-1 text-blue-400 shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Frontend Skills
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript,
                  React.js, Next.js, JSON, jQuery, AJAX & ShadCN/UI.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-4">
              <IoArrowForward size={26} className="mt-1 text-blue-400 shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Database & AI Tools
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  MongoDB, MySQL, Git, GitHub, APIs, Material UI,
                  Copilot, ChatGPT, Gemini & AI Pieces.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-4">
              <IoArrowForward size={26} className="mt-1 text-blue-400 shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Backend Skills
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {/* Node.js, Express.js, Core Java, Advanced Java,
                  Spring, Spring Boot & Hibernate. */}
                  Node.js, Express.js, PHP.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-4">
              <IoArrowForward size={26} className="mt-1 text-blue-400 shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Deployment
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Vercel, Netlify, Render & AWS.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
