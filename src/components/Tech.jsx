import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion"; 
import { styles } from "../styles"; 

const Tech = () => {
  const [currentCategory, setCurrentCategory] = useState("languages");
  const categories = Object.keys(technologies);

  // Mapping of category keys to display names
  const categoryDisplayNames = {
    languages: "Languages",
    machineLearning: "Machine Learning & AI",
    dataScience: "Data Science & Visualization",
    BigDataandCloud: "Big Data And Cloud",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prevCategory) => {
        const currentIndex = categories.indexOf(prevCategory);
        const nextIndex = (currentIndex + 1) % categories.length; // Loop back to the first category
        return categories[nextIndex];
      });
    }, 5000); // Change category every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [categories]);

  const handleNext = () => {
    setCurrentCategory((prevCategory) => {
      const currentIndex = categories.indexOf(prevCategory);
      const nextIndex = (currentIndex + 1) % categories.length; // Loop back to the first category
      return categories[nextIndex];
    });
  };

  const handlePrevious = () => {
    setCurrentCategory((prevCategory) => {
      const currentIndex = categories.indexOf(prevCategory);
      const prevIndex = (currentIndex - 1 + categories.length) % categories.length; // Loop back to the last category
      return categories[prevIndex];
    });
  };

  return (
    <>
      {/* Motion Wrapper for Heading */}
      <motion.div variants={textVariant()} animate="visible">
        <p className={styles.sectionSubText}>Skills I Know</p>
        <h2 className={styles.sectionHeadText}>
          {categoryDisplayNames[currentCategory]}.
        </h2>
      </motion.div>

      <div className="flex items-center justify-between mt-4">
        {/* Conditionally render the left arrow */}
        {currentCategory !== "languages" && (
          <button onClick={handlePrevious} className="arrow-button left-arrow">
            &lt; {/* Left Arrow */}
          </button>
        )}
        <AnimatePresence>
          <motion.div
            key={currentCategory} // Key to trigger exit and enter animations
            className="flex flex-row justify-center items-center gap-10 mt-8" // Ensure items are in a single row
            initial={{ opacity: 0, scale: 0.9 }} // Start off slightly smaller and invisible
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
            exit={{ opacity: 0, scale: 0.9 }} // Fade out and scale down
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
          >
            {technologies[currentCategory].map((technology) => (
              <div key={technology.name} className="w-36 h-36 flex flex-col items-center"> {/* Increased size */}
                <BallCanvas icon={technology.icon} />
                <span className="mt-2 text-center">{technology.name}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <button onClick={handleNext} className="arrow-button right-arrow">
          &gt; {/* Right Arrow */}
        </button>
      </div>

      <style jsx>{`
        .arrow-button {
          background-color: transparent;
          border: none;
          font-size: 30px; /* Increased font size */
          font-weight: bold; /* Make the arrow bold */
          cursor: pointer;
          padding: 15px; /* Increased padding for a larger clickable area */
          border-radius: 100%; /* Make it circular */
          transition: background-color 0.3s, transform 0.3s; /* Smooth transition */
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
        }

        .arrow-button:hover {
          background-color: purple; /* Change to purple on hover */
          color: white; /* Change text color to white */
          transform: scale(1.1); /* Slightly enlarge on hover */
        }

        .left-arrow {
          margin-right: 20px; /* Space between left arrow and balls */
        }

        .right-arrow {
          margin-left: 20px; /* Space between right arrow and balls */
        }
      `}</style>
    </>
  );
};

// Try without SectionWrapper if issues persist
export default SectionWrapper(Tech, "skills");