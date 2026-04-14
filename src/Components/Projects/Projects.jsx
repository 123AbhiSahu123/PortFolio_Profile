import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="w-full bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-12 md:py-20">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProjectCard
            title="A To Z Medical Store 👀"
            main={
              <>
                Designed and deployed a robust <strong className="font-bold text-indigo-600">WordPress</strong> website,
                An A to Z Medical Store is a retail pharmacy or chemist shop that aims to provide a "one-stop-shop" experience for healthcare needs.
              </>
            }
            demoLink="https://orange-turkey-193778.hostingersite.com/"
            // demoLink="https://peru-squid-982385.hostingersite.com/"
          // codeLink="https://github.com/123AbhiSahu123/Todo_List/tree/main/src"
          />

          <ProjectCard
            title="Ekamcure 😊"
            main="A large-scale multi-page website built with Next.js and Tailwind CSS. Includes ~20 pages, modern UI components, dynamic routing, and a language-switcher plugin."
            demoLink="https://ekamcure.vercel.app/"
            codeLink="https://github.com/123AbhiSahu123/ekamcure/tree/main/app"
          />

          <ProjectCard
            title="Coding Thunder ✌"
            main="A dynamic blog platform built with Node.js and Express.js. Includes server-side rendering, dynamic pages, and Bootstrap-based responsive UI."
            demoLink="https://coding-thunder.vercel.app/"
            codeLink="https://github.com/123AbhiSahu123/Coding_Thunder/tree/main/api"
          />

          <ProjectCard
            title="UI/UX Designing 👀"
            main="A modern, user-centric web interface designed with a focus on seamless navigation and visual storytelling. By combining clean HTML5 structure, advanced CSS3 styling and interactive JavaScript, I created a responsive experience that prioritizes user engagement."
            demoLink="https://blogs-opal-two.vercel.app/"
            codeLink="https://github.com/123AbhiSahu123/Blogs/blob/main/index.html"
          />

          <ProjectCard
            title="AI Tutorial 😊"
            main="A modern AI-focused blog website developed using Next.js. Includes light/dark mode using ShadCN/UI, clean article layout, and fast routing. Designed to help beginners learn concepts through blog-style content."
            demoLink="https://ai-assited-blog.vercel.app/"
            codeLink="https://github.com/123AbhiSahu123/ai-assited-blog/tree/master/app"
          />

          <ProjectCard
            title="Todo List ✌"
            main="A simple yet efficient task-management application built with React.js + Vite. Allows users to add, update, and delete tasks with a clean UI. Designed to help users remember and organize daily activities efficiently."
            demoLink="https://abhi-game.vercel.app/"
            codeLink="https://github.com/123AbhiSahu123/Todo_List/tree/main/src"
          />


        </div>
      </div>
    </section>
  );
};

export default Projects;

