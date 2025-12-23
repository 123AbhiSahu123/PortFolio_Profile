import React from "react";
import bannerImg from "../../assets/project.jpg";

const ProjectCard = ({ title, main, demoLink, codeLink }) => {
  return (
    <div
      className="
        flex flex-col 
        bg-[#0c0e19] 
        shadow-xl shadow-slate-900 
        rounded-2xl 
        w-full 
        max-w-sm 
        h-full
      "
    >
      {/* Image */}
      <img
        src={bannerImg}
        alt={title}
        className="w-full h-44 object-cover rounded-t-2xl"
      />

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>

        <p className="text-sm md:text-md leading-tight py-2 text-gray-300 flex-grow">
          {main}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white 
                py-2 px-4 
                text-sm md:text-lg 
                font-semibold 
                rounded-3xl 
                bg-[#465697]
                hover:opacity-85 
                duration-300 
                hover:scale-105
              "
            >
              Demo
            </a>
          )}

          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white 
                py-2 px-4 
                text-sm md:text-lg 
                font-semibold 
                rounded-3xl 
                bg-[#465697]
                hover:opacity-85 
                duration-300 
                hover:scale-105
              "
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



// import React from "react";
// import bannerImg from "../../assets/project.jpg";

// const ProjectCard = ({ title, main, demoLink, codeLink }) => {
//   return (
//     <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
//       <img className="p-4" src={bannerImg} alt="" />
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         {demoLink && (
//           <a
//             href={demoLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
//             hover:opacity-85 duration-300 hover:scale-105 font-semibold 
//             rounded-3xl bg-[#465697]"
//           >
//             Demo
//           </a>
//         )}
//         {codeLink && (
//           <a
//             href={codeLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
//                        hover:opacity-85 duration-300 hover:scale-105 font-semibold 
//                        rounded-3xl bg-[#465697]"
//           >
//             Code
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
