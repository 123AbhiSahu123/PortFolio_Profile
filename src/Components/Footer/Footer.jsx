import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
          Click to reach Me! 👉 
        </h3>
      </div>

      <ul className="text-sm md:text-xl">

        <li className="flex gap-1 items-center">
          <FaPhone size={30} />
          <a
            href="tel:+91 9044961156"
            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          >
            Call Me: +91 9044961156
          </a>
        </li>

        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={30} />
          <a
            href="mailto:sahuabhishek3810@gmail.com"
            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          >
            Email Me
          </a>
        </li>

        <li className="flex gap-1 items-center">
          <CiLinkedin size={30} />
          <a
            href="https://www.linkedin.com/in/abhishek-sahu-a5a3472a4/"
            target="_blank" // opens in a new tab
            rel="noopener noreferrer" // security best practice
            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          >
           LinkedIn
          </a>
        </li>

        <li className="flex gap-2 items-center">
          <FaGithub size={25} />
          <a
            href="https://github.com/123AbhiSahu123"
            target="_blank" // opens in a new tab
            rel="noopener noreferrer" // security best practice
            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          >
            GitHub
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaFacebookF size={25} />
          <a
            href="https://www.facebook.com/shivamsahu1577"
            target="_blank" // opens in a new tab
            rel="noopener noreferrer" // security best practice
            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          >
           FaceBook
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FiX size={30} />
          <a
            href="https://x.com/Abhishe62526101"
            target="_blank" // opens in a new tab
            rel="noopener noreferrer" // security best practice
            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          >
          X(Twitter)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
