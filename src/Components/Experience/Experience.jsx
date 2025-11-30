import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaMaxcdn } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
// import { RiNetflixFill } from "react-icons/ri";
// import { FaAmazon } from "react-icons/fa";
import ducatImage from "../../assets/ducat.jpeg";
import acmeImage from "../../assets/acme.png";


const McDonaldsLogo = () => <svg viewBox="0 0 512 512" width="100" height="100"><circle cx="256" cy="256" r="256" fill="#DA291C" /><path d="M151 384s10-192 50-192 50 192 50 192 10-192 50-192 50 192 50 192" stroke="#FFC72C" strokeWidth="60" fill="none" strokeLinecap="round" /></svg>;


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span> 
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiNetflixFill color="#FF4438" size={50} />
          </span>  */}
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaAmazon color="#FF9900" size={50} />
          </span> */}
        </div>
        <div>


          {/* <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer , Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - In Future
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Software Developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div> */}

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img src={acmeImage} alt="acme" className="w-[50px] h-auto rounded" size={80} />
            <span className="text-white">
              <h2 className="leading-tight">Full Stack Developer, Acme Infolabs Pvt. Ltd.</h2>
              <p className="text-sm leading-tight font-thin">
                Nov 18, 2024 - 25 Nov, 2025
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Web Developer.</li>
                <li>- Full Time Work</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img src={ducatImage} alt="DUCAT" className="w-[50px] h-auto rounded" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Full Stack Developer, Ducat Pvt. Ltd.</h2>
              <p className="text-sm leading-tight font-thin">
                July 01, 2024 - Dec 06, 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Learning real time code.</li>
                <li>- Mern Full-Stack</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaMaxcdn size={50} color="yellow" />
            <span className="text-white">
              <h2 className="leading-tight">Crew , McDonald's</h2>
              <p className="text-sm leading-tight font-thin">
                Feb 22, 2024 - Nov 10, 2024
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
  );
};

export default Experience;
