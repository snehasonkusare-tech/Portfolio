import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, video_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col">
        {/* Card image */}
        <div className="relative w-full h-[230px]">
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
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Link */}
        <div className="mt-5 border-t border-gray-600 pt-4">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="flex items-center gap-2 text-white text-[14px] font-medium hover:text-blue-400 transition-colors duration-200"
          >
            <img src={github} alt="github" className="w-5 h-5 object-contain" />
            Click here to view the project
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      {/* Featured 3 projects */}
      <div className="mt-20 flex flex-wrap gap-7">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Arrow to all projects page */}
      <div className="mt-16 flex flex-col items-center gap-3">
        <p className="text-secondary text-[16px]">View all {projects.length} projects</p>
        <button
          onClick={() => navigate("/projects")}
          className="group flex items-center justify-center w-16 h-16 rounded-full border-2 border-white hover:bg-white transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");