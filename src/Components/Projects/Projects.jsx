import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="E_Kart👀"
          main="It is a E-Commrce website which is name E_Kart using React Js Technology
          with help of API and used some component library.It is normally Shoping Website 
          like that Flipkart, Amazon."
          demoLink="https://e-kart-gamma.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/E-Kart/blob/main/src/App.css"
        />
        <ProjectCard
          title="Todo_List✌"
          main="It is like a Notes Remember app which is name of Todo_List using React Js and Vite Technology.
          It has Todo_Title and Todo_Description. It is used of remembering any work which that you will do in Future after done your pending work you 
          'Deleted'."
          demoLink="https://todo-list-zeta-eight.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/Todo_List"
        />
        <ProjectCard
          title="AI_Tutorial😊"
          main="It is AI_Tutorial Blog Website created by using Next Js 
          Technology which is 'Framework of React'.It has Blog page which 
          is Motivate for Beginner and add Dark mode and Light mode by the used of ShadCN/UI. " 
          demoLink="https://ai-assited-blog.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/ai-assited-blog/blob/master/components/Navbar.jsx"
        />
      </div>
    </div>
  );
};

export default Projects;