import React from "react";
import { FaPhone, FaGithub, FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FiX } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="w-full bg-[#465697] text-white"
    >
      <div
        className="max-w-4xl mx-auto px-6 py-10
                   flex flex-row 
                   items-start md:items-start 
                   justify-between gap-6"
      >
        {/* LEFT */}
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Contact
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-xl">
            Feel free to reach out!  
            <br className="md:hidden" />
            Click to connect 👉
          </p>
        </div>

        {/* RIGHT */}
        <ul className="flex flex-col gap-3 items-start">
          <li className="flex items-center gap-3">
            <FaPhone className="text-xl md:text-2xl" />
            <a
              href="tel:+919044961156"
              className="font-semibold hover:underline"
            >
              +91 90449 61156
            </a>
          </li>

          <li className="flex items-center gap-3">
            <MdOutlineEmail className="text-xl md:text-2xl" />
            <a
              href="mailto:sahuabhishek3810@gmail.com"
              className="font-semibold hover:underline"
            >
              Email Me
            </a>
          </li>

          <li className="flex items-center gap-3">
            <CiLinkedin className="text-xl md:text-2xl" />
            <a
              href="https://www.linkedin.com/in/abhishek-sahu-a5a3472a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              LinkedIn
            </a>
          </li>

          <li className="flex items-center gap-3">
            <FaGithub className="text-xl md:text-2xl" />
            <a
              href="https://github.com/123AbhiSahu123"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              GitHub
            </a>
          </li>

          <li className="flex items-center gap-3">
            <FaFacebookF className="text-xl md:text-2xl" />
            <a
              href="https://www.facebook.com/shivamsahu1577"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              Facebook
            </a>
          </li>

          <li className="flex items-center gap-3">
            <FiX className="text-xl md:text-2xl" />
            <a
              href="https://x.com/Abhishe62526101"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              X (Twitter)
            </a>
          </li>
        </ul>
      </div>

      {/* BOTTOM BAR */}
      <div className="text-center text-xs sm:text-sm py-4 bg-[#3a497f]">
        © {new Date().getFullYear()} Abhishek Sahu. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
