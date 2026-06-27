import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaMaxcdn } from "react-icons/fa";  // font awesome
import { SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, 
SiMysql, SiPostman, SiRedis, SiDocker, SiNextdotjs,
 SiGit, SiGithub, SiRender, SiVercel } from "react-icons/si";   //simple icon
import rendericon from "../../assets/render.svg";
 import ducatImage from "../../assets/ducat.jpeg";
import acmeImage from "../../assets/acme.png";
import droptyImage from "../../assets/dropty.png"

const McDonaldsLogo = () => <svg viewBox="0 0 512 512" width="100" height="100"><circle cx="256" cy="256" r="256" fill="#DA291C" /><path d="M151 384s10-192 50-192 50 192 50 192 10-192 50-192 50 192 50 192" stroke="#FFC72C" strokeWidth="60" fill="none" strokeLinecap="round" /></svg>;


const Experience = () => {
  return (
    <section id="Experience" className="w-full p-10 md:p-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl text-white font-bold md:text-left">Experience</h1>
        <div className="flex flex-wrap items-center justify-around">
          <div className="flex flex-wrap md:w-2/5 gap-8 py-10">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaCss3 color="#1572B6" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaJs color="#F7DF1E" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiNodedotjs color="#5FA04E" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <FaReact color="#61DAFB" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiNextdotjs color="#fff" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiExpress color="#fff" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiMongodb color="#47A248" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiPostgresql color="#4169E1" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiMysql color="#4479A1" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiRedis color="#FF4438" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiDocker color="#2496ED" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiPostman color="#FF6C37" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiGit color="#F03C2E" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiGithub color="#fff" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <img src={rendericon} alt="rendernpm " className="w-[50px] h-auto rounded invert" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <SiVercel color="#fff" size={50} />
            </span>
          </div>


          <div>
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
              <img src={droptyImage} alt="dropty" className="w-[50px] h-auto rounded" size={80} />
              <span className="text-white">
                <h2 className="leading-tight">Mern Stack Developer, Dropty Infotech Pvt. Ltd.</h2>
                <p className="text-sm leading-tight font-thin">
                  March 2026 - Till Now
                </p>
                <ul className="text-sm p-2">
                  <li>- Industry Experience and working as a Backend Developer. </li>
                  <li>- Built scalable and secure REST APIs using Node.js and PostgreSQL. </li>
                </ul>
              </span>
            </div>

            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
              <img src={acmeImage} alt="acme" className="w-[50px] h-auto rounded" size={80} />
              <span className="text-white">
                <h2 className="leading-tight">Full Stack Developer Intern, Acme Infolabs Pvt. Ltd.</h2>
                <p className="text-sm leading-tight font-thin">
                  Internship and Industry Experience
                </p>
                <ul className="text-sm p-2">
                  <li>- Worked as a Web Developer on real-world projects. </li>
                  <li>- Collaborated with team members to deliver project requirements. </li>
                </ul>
              </span>
            </div>

            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
              <img src={ducatImage} alt="ducat" className="w-[50px] h-auto rounded" size={50} />
              <span className="text-white">
                <h2 className="leading-tight">Full Stack Developer, Ducat Pvt. Ltd.</h2>
                <p className="text-sm leading-tight font-thin">
                  Aug 05, 2024 - Aug 08, 2025
                </p>
                <ul className="text-sm p-2">
                  <li>- Learning real time code.</li>
                  <li>- MERN Full-Stack</li>
                </ul>
              </span>
            </div>

            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
              <FaMaxcdn size={50} color="yellow" />
              <span className="text-white">
                <h2 className="leading-tight">Crew , McDonald's</h2>
                <p className="text-sm leading-tight font-thin">
                  Aug 22, 2024 - Aug 02, 2025
                </p>
                <ul className="text-sm p-2">
                  <li>- Work with Crew Member</li>
                  <li>- Billing of Customer Meals and give Services</li>
                  <li>- Part Time Work</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
