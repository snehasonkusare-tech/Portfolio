import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { clippingAlpha } from "three/src/nodes/accessors/ClippingNode.js";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl w-full max-w-[1000px] flex flex-col items-center'
  >
    <div className="flex w-full gap-7">
      {/* Left side of the card */}
      <div className="relative w-2/5 h-[200px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Right side of the card */}
      <div className="w-3/5 flex flex-col justify-between">
      <motion.h3 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className='text-white font-bold text-[28px] mb-0.5'
        >
          {testimonial}
        </motion.h3>

        <div className='flex items-center gap-3'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[20px] leading-tight'>
              {name}
            </p>

            <p className='mt-0.5 text-red-500 text-[24px]'>
              {designation}{company}
            </p>

            
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);


const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My journey</p>
          <h2 className={styles.sectionHeadText}>Education</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "education");