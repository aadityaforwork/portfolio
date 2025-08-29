'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'Advanced Multimodal Federated Learning',
    description: 'Cutting-edge federated learning framework integrating audio, video, and text modalities for privacy-preserving machine learning. Implements state-of-the-art techniques for cross-modal data fusion.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'PyTorch', 'Federated Learning', 'Computer Vision', 'NLP', 'Machine Learning'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Campus Hall Booking Platform',
    description: 'Comprehensive web platform for managing campus hall reservations with real-time availability, automated notifications, and administrative dashboard for efficient resource management.',
    image: '/api/placeholder/600/400',
    technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express.js', 'RESTful APIs'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'AI-Powered Content Generation',
    description: 'Machine learning application leveraging advanced NLP models for automated content generation with customizable parameters and multi-format output support.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Streamlit', 'AI Models'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization and analytics with advanced filtering, export capabilities, and responsive design.',
    image: '/api/placeholder/600/400',
    technologies: ['JavaScript', 'D3.js', 'React', 'PostgreSQL', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-transparent transition-all duration-500 h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-500 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      {project.featured && (
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full">
          Featured
        </div>
      )}
      <div className="relative overflow-hidden aspect-video">
        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border border-purple-400/30 rounded rotate-45 animate-pulse" />
            <div className="absolute bottom-4 sm:bottom-6 right-6 sm:right-8 w-4 sm:w-6 h-4 sm:h-6 border border-blue-400/30 rounded-full animate-bounce" />
            <div className="absolute top-1/2 right-2 sm:right-4 w-3 sm:w-4 h-3 sm:h-4 bg-purple-400/20 rounded" />
          </div>
          
          <div className="text-white/80 text-sm sm:text-lg font-medium z-10">Project Preview</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
          <div className="p-3 sm:p-6 w-full">
            <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row">
              <motion.a
                href={project.liveUrl}
                className="group/btn relative flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl text-xs sm:text-sm font-medium overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <ArrowTopRightOnSquareIcon className="w-3 sm:w-4 h-3 sm:h-4 relative z-10" />
                <span className="relative z-10">Live Demo</span>
              </motion.a>
              
              <motion.a
                href={project.githubUrl}
                className="group/btn relative flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 text-white rounded-xl text-xs sm:text-sm font-medium hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl" />
                <CodeBracketIcon className="w-3 sm:w-4 h-3 sm:h-4 relative z-10" />
                <span className="relative z-10">Code</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 flex-grow">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm group-hover:text-gray-200 transition-colors duration-300">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={tech}
              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800/60 text-purple-300 rounded-full text-xs font-medium border border-purple-400/20 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-tl from-purple-400/10 to-blue-500/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
  <div id="portfolio" className="min-h-screen scroll-mt-16 sm:scroll-mt-24 bg-gradient-to-b from-gray-900 to-black py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Portfolio</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed py-4 sm:py-10 mx-auto text-center px-4 sm:px-0">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
