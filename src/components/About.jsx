import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { memoji } from '../assets'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
          <motion.p
            variants={fadeIn(" ", " ", 0.1, 1)}
            className="mt-4 text-secondry text-[17px] max-w-3xl leading-[30px]"
          >
            I’m a passionate Data Science professional with a strong foundation in Python, machine learning, and Analytics. I specialize in transforming complex data into actionable insights through predictive modeling, data visualization, and AI techniques. A quick learner, I’m dedicated to solving real-world problems and driving innovation. Let’s collaborate to turn data into meaningful solutions!
          </motion.p>

          {/* Resume Button */}
          <div className="mt-6 inline-block">
            <a href="/Sneha_Sonkusare.pdf" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center bg-gradient-to-r from-[#13132b] to-[#1a1a3d] rounded-full px-6 py-3 shadow-lg shadow-blue-500/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
                  <a href="/Sneha_Sonkusare.pdf" download>
                    <svg className="w-6 h-6 text-[#6b6bff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-4-4m4 4l4-4M4 12a8 8 0 1116 0 8 8 0 01-16 0z"></path>
                    </svg>
                  </a>
                </div>
                <span className="text-white font-bold text-lg ml-12">View Resume</span>
              </div>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)} // Scroll effect when coming from the right
          className="lg:w-1/2 mt-8 lg:mt-0 ml-0 p-4"
        >
          <img src={memoji} alt="About Me" className="w-50 h-50 object-cover rounded-lg" />
        </motion.div>

      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")