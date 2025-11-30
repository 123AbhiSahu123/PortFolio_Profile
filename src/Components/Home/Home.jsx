import React from "react";
import avatarImg from "../../assets/AbhiBG.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          It is my Toon pic which is put in my Portfolio😊Website and it is my official Portfolio👀Website.
          In this Website using Vite and React Js Technology which is possible completed this task.
          <li>Hi, I have one year experience in Web Developer.</li>
          <li>I'm good in (MERN Full-Stack) Next Js, React Js, Node Js, Express Js and MongoDB Database.</li> 
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="https://drive.google.com/file/d/1Eg5loAlY52KN0YHO4XU8Yn9vJXOaU0ax/view?usp=sharing" target='_blank'>Resume</a>
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
