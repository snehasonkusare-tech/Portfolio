import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        {/* Left Side - Design Element */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Right Side - Content */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className='text-[#915eff]'>Sneha Sonkusare</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
           I create data-driven solutions, predictive models, and interactive visualizations to turn complex data into insights
          </motion.p>

          {/* Social Media Icons Below the Text */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='flex gap-4 mt-4'>
            <div className='flex gap-4 mt-4'>
              <div className="relative">
                <div 
                  onClick={() => window.open("https://www.linkedin.com/in/sneha-sonkuare/", "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer icon
                  transform transition-transform duration-300 hover:scale-110 hover:shadow-xl "
                  style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}
                >
                  <FaLinkedin className="text-white text-2xl transition-colors duration-300" 
                    style={{ transition: 'color 0.3s', color: 'white' }} 
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0077B5'} 
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}  
                  />
                </div>
              </div>

              <div className="relative">
                <div 
                  onClick={() => window.open("https://github.com/snehasonkusare-tech", "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer icon
                  transform transition-transform duration-300 hover:scale-110 hover:shadow-xl "
                  style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}
                >
                  <FaGithub 
                    className="text-white text-2xl transition-colors duration-300" 
                    style={{ transition: 'color 0.3s' }} 
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'} 
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'} 
                  />
                </div>
              </div>
              
              <div className="relative">
                <div 
                  onClick={() => window.open("https://medium.com/@sonkusare.sneha15", "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer icon
                  transform transition-transform duration-300 hover:scale-110 hover:shadow-xl"
                  style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}
                >
                  <FaMedium 
                    className="text-white text-2xl transition-colors duration-300" 
                    style={{ transition: 'color 0.3s' }} 
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00AB6C'} 
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'} 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ensure ComputersCanvas is always rendered */}
      <ComputersCanvas className="mt-10" />

      <div className='absolute xs:bottom-5 bottom-48 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;