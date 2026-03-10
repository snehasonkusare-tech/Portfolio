import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { StarsCanvas } from "./index";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, video_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      initial="hidden"
      animate="show"
      className="bg-tertiary p-5 rounded-2xl flex flex-col"
    >
      {/* Card image */}
      <div className="relative w-full h-[200px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        {video_link && (
          <div
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer rounded-2xl"
            onClick={() => window.open(video_link, "_blank")}
          >
            <span className="text-white text-lg font-semibold">Tap to View</span>
          </div>
        )}
      </div>

      {/* Name and description */}
      <div className="mt-5 flex-1">
        <h3 className="text-white font-bold text-[20px]">{name}</h3>
        <p className="mt-2 text-secondary text-[13px] leading-relaxed">{description}</p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[13px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>

      {/* Link */}
      <div className="mt-5 border-t border-gray-600 pt-4">
        <button
          onClick={() => window.open(source_code_link, "_blank")}
          className="flex items-center gap-2 text-white text-[13px] font-medium hover:text-blue-400 transition-colors duration-200"
        >
          <img src={github} alt="github" className="w-5 h-5 object-contain" />
          Click here to view the project
        </button>
      </div>
    </motion.div>
  );
};

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-secondary hover:text-white transition-colors duration-200 mb-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Portfolio
        </button>

        {/* Header */}
        <div className="mb-12">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Everything I've built
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            All Projects.
          </h2>
        </div>

        {/* 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>

      <StarsCanvas />
    </div>
  );
};

export default AllProjects;