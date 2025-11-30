
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>

      {/* Row 1 */}
      <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="E_Kart👀"
          main="A fully responsive e-commerce website built using React.js. Integrated product APIs, reusable components, and user-friendly UI similar to modern shopping platforms. Features include product listing, category filtering, and smooth page navigation."
          demoLink="https://e-kart-gamma.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/E-Kart/blob/main/src/App.css"
        />

        <ProjectCard
          title="Todo_List✌"
          main="A simple yet efficient task-management application built with React.js + Vite. Allows users to add, update, and delete tasks with a clean UI. Designed to help users remember and organize daily activities efficiently."
          demoLink="https://todo-list-zeta-eight.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/Todo_List"
        />

        <ProjectCard
          title="AI_Tutorial😊"
          main="A modern AI-focused blog website developed using Next.js. Includes light/dark mode using ShadCN/UI, clean article layout, and fast routing. Designed to help beginners learn concepts through blog-style content."
          demoLink="https://ai-assited-blog.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/ai-assited-blog/blob/master/components/Navbar.jsx"
        />
      </div>

      {/* Row 2 */}
      <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Indian Health Advisor👀"
          main="A medical service-based website created using React.js and React Router DOM. Designed for patient service information, showcasing available treatments and service details in a simple, responsive layout."
          demoLink="https://indianhealthadvisor.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/Indian-Health-Advissor"
        />

        <ProjectCard
          title="Express Blog✌"
          main="A dynamic blog platform built with Node.js and Express.js. Includes server-side rendering, dynamic pages, and Bootstrap-based responsive UI. Currently developing additional features and improving the workflow."
          demoLink="https://express-js-blogs-page.vercel.app/"
          codeLink="https://github.com/123AbhiSahu123/ExpressJs_BlogsPage"
        />

        <ProjectCard
          title="Ekamcure😊"
          main="A large-scale multi-page website built with Next.js and Tailwind CSS. Includes approx. 20 pages with modern UI components, dynamic routing, and a language-switcher plugin for automatic translation of the entire website."
          demoLink="https://ekamcure.vercel.app/"
          codeLink="#"
        />
      </div>
    </div>

  );
};

export default Projects;

