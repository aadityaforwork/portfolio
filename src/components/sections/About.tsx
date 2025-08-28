'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CodeBracketIcon, DevicePhoneMobileIcon, PaintBrushIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const skills = [
  {
    icon: CodeBracketIcon,
    title: 'Full Stack Development',
    description: 'MERN Stack, TypeScript, RESTful APIs, PostgreSQL',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Machine Learning',
    description: 'Federated Learning, Computer Vision, NLP, PyTorch',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: PaintBrushIcon,
    title: 'Cloud & DevOps',
    description: 'Amazon Web Services (AWS), Docker, Git',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Research & Innovation',
    description: 'Multimodal AI, Advanced Algorithms, Problem Solving',
    color: 'from-orange-500 to-red-500'
  }
]

const technologies = [
  'Java', 'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js',
  'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'PyTorch', 'Streamlit'
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const
      }
    }
  }

  return (
  <div id="about" className="min-h-screen scroll-mt-24 bg-gradient-to-b from-black to-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Computer Science Student & Research Enthusiast
              </h3>
              <div className="flex flex-col gap-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I&apos;m a BTech Computer Science student at DJ Sanghvi College of Engineering with a passion for 
                  machine learning, federated learning, and full-stack development. Currently maintaining a 9.0/10 CGPA 
                  while pursuing cutting-edge research in multimodal AI.
                </p>
                <p>
                  My journey spans from developing advanced federated learning frameworks to building practical 
                  web applications. I&apos;m currently interning at Mantrika.AI and conducting research at IIT Bombay, 
                  focusing on privacy-preserving machine learning techniques.
                </p>
                <p>
                  As Chairperson of DJS Compute powered by AWS, I lead initiatives that bridge the gap between 
                  academic learning and industry applications, mentoring fellow students in cloud technologies 
                  and modern development practices.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">9.0</div>
                  <div className="text-gray-400">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">2+</div>
                  <div className="text-gray-400">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">100%</div>
                  <div className="text-gray-400">Dedication</div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 border border-gray-700/50 hover:border-transparent transition-all duration-500 overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -8 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <skill.icon className="w-7 h-7 text-white drop-shadow-sm" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                        {skill.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-15 rounded-bl-full transition-opacity duration-500`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4 px-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="group relative px-6 py-3 bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-full text-white font-medium hover:border-transparent transition-all duration-400 cursor-pointer overflow-hidden"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -4,
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)'
                  }}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-400" />
                  <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-pink-200 transition-all duration-300">
                    {tech}
                  </span>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transform -translate-x-1/2 -translate-y-1/2 animate-ping group-hover:animate-pulse transition-opacity duration-300" />
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
