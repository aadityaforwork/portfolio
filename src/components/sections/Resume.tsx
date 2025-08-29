'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CalendarIcon, MapPinIcon, AcademicCapIcon, BriefcaseIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    id: 1,
    title: 'Technical Intern',
    company: 'Mantrika.AI',
    location: 'Remote',
    duration: 'February 2025 - Present',
    description: 'Leading platform infrastructure development and AI integration for technical interview solutions with real-time feedback systems.',
    achievements: [
      'Engineered core platform infrastructure by developing user authentication system and multi-stage candidate progression pipeline',
      'Led integration of facial recognition service for candidate identity verification with complex security requirements',
      'Architected end-to-end technical interview feature with real-time AI feedback loop for dynamic candidate evaluation'
    ]
  },
  {
    id: 2,
    title: 'Research Intern',
    company: 'IIT Bombay',
    location: 'Mumbai, India',
    duration: 'January 2025 - Present',
    description: 'Developing autonomous systems using multi-sensor fusion and explainable AI techniques for agricultural applications.',
    achievements: [
      'Developed autonomous weed detection system by fusing LiDAR, NIR, and RGB sensor data',
      'Diagnosed model failures using explainability tools like Grad-CAM to analyze misclassifications',
      'Improved precision through class-specific confidence thresholds and dataset augmentation with hard negatives'
    ]
  },
  {
    id: 3,
    title: 'Chairperson',
    company: 'DJS Compute powered by AWS',
    location: 'Mumbai, India',
    duration: 'July 2024 - July 2025',
    description: 'Leading consulting initiatives and mentoring students through real-world problem-solving in technology and innovation.',
    achievements: [
      'Guided students through web development, machine learning, and data engineering projects',
      'Bridged the gap between theoretical knowledge and practical application',
      'Led consulting initiatives for real-world technology solutions'
    ]
  }
]

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science and Engineering (Data Science)',
    school: 'Dwarkadas J Sanghvi College of Engineering',
    location: 'Mumbai, India',
    duration: 'September 2022 - May 2026 (expected)',
    description: 'Pursuing B.Tech with specialization in Data Science. Currently maintaining CGPA of 9.0/10 with focus on machine learning, web development, and research.',
    coursework: ['Data Structures', 'Algorithms', 'Machine Learning', 'Database Systems', 'Software Engineering', 'Data Science', 'Federated Learning', 'Computer Vision']
  }
]

const skills = [
  { 
    category: 'Languages', 
    items: ['Java', 'JavaScript', 'TypeScript', 'C', 'Python'] 
  },
  { 
    category: 'Web Development', 
    items: ['MERN Stack', 'React', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Tailwind CSS', 'PostgreSQL', 'WebRTC'] 
  },
  { 
    category: 'Cloud & DevOps', 
    items: ['Amazon Web Services (AWS)', 'Docker', 'Git', 'GitHub'] 
  },
  { 
    category: 'Tools & Platforms', 
    items: ['Postman', 'Streamlit', 'Canva', 'VS Code', 'Jupyter Notebooks', 'Grad-CAM'] 
  }
]


const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 pb-16 last:pb-0"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-500 to-pink-400" />
      <motion.div 
        className="absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform -translate-x-1/2 ring-4 ring-black shadow-lg"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
      <motion.div 
        className="group relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-transparent transition-all duration-500 overflow-hidden"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
            <div className="flex-1">
              <motion.h3 
                className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 mb-1"
                whileHover={{ x: 4 }}
              >
                {experience.title}
              </motion.h3>
              <p className="text-blue-400 font-semibold text-lg group-hover:text-blue-300 transition-colors duration-300">{experience.company}</p>
            </div>
            <div className="flex flex-col sm:items-end mt-3 sm:mt-0 sm:ml-6">
              <motion.div 
                className="flex items-center text-gray-300 text-sm bg-gray-800/40 px-3 py-1.5 rounded-full mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <CalendarIcon className="w-4 h-4 mr-2 text-blue-400" />
                {experience.duration}
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-300 text-sm bg-gray-800/40 px-3 py-1.5 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <MapPinIcon className="w-4 h-4 mr-2 text-purple-400" />
                {experience.location}
              </motion.div>
            </div>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {experience.description}
          </p>

          <div className="flex flex-col gap-3">
            {experience.achievements.map((achievement, i) => (
              <motion.div 
                key={i} 
                className="flex items-start group/item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-200 leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  )
}

const EducationCard = ({ education: edu, index }: { education: typeof education[0], index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      className="group relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-transparent transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-500 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <motion.div 
            className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg"
            whileHover={{ rotate: 5 }}
          >
            <AcademicCapIcon className="w-8 h-8 text-white" />
          </motion.div>
          <div className="ml-6 flex-grow">
            <motion.h3 
              className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300 mb-1"
              whileHover={{ x: 4 }}
            >
              {edu.degree}
            </motion.h3>
            <p className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">{edu.school}</p>
            <motion.div 
              className="inline-flex items-center text-gray-300 text-sm mt-2 bg-gray-800/40 px-3 py-1.5 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <MapPinIcon className="w-4 h-4 mr-2 text-purple-400" />
              {edu.location} • {edu.duration}
            </motion.div>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {edu.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {edu.coursework.map((course, i) => (
            <motion.span
              key={course}
              className="px-3 py-1.5 bg-gray-800/60 text-purple-300 rounded-full text-xs font-medium border border-purple-400/20 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {course}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-blue-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

export default function Resume() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey, education, and skills that make me a versatile developer.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24">
          <div>
            <motion.div
              className="flex items-center mb-12"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BriefcaseIcon className="w-8 h-8 text-blue-400 mr-4" />
              <h3 className="text-3xl font-semibold text-white">Experience</h3>
            </motion.div>

            <div className="relative">
              {experiences.map((experience, index) => (
                <ExperienceCard key={experience.id} experience={experience} index={index} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div>
              <motion.div
                className="flex items-center mb-12"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <AcademicCapIcon className="w-8 h-8 text-purple-400 mr-4" />
                <h3 className="text-3xl font-semibold text-white">Education</h3>
              </motion.div>
              <div className="flex flex-col gap-8">
                {education.map((edu, index) => (
                  <EducationCard key={edu.id} education={edu} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-white text-center mb-12">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Technologies</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="group relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-transparent transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      skillGroup.category === 'Frontend' ? 'bg-blue-400' :
                      skillGroup.category === 'Backend' ? 'bg-green-400' :
                      skillGroup.category === 'Tools' ? 'bg-purple-400' :
                      'bg-pink-400'
                    }`} />
                    <h4 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill} 
                        className="flex items-center text-gray-300 text-sm py-2 px-3 rounded-lg bg-gray-800/30 group-hover:bg-gray-700/40 transition-all duration-300 hover:text-white hover:translate-x-1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-3 group-hover:bg-blue-400 transition-colors duration-300" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className={`absolute top-0 right-0 w-16 h-16 ${
                  skillGroup.category === 'Frontend' ? 'bg-blue-400/10' :
                  skillGroup.category === 'Backend' ? 'bg-green-400/10' :
                  skillGroup.category === 'Tools' ? 'bg-purple-400/10' :
                  'bg-pink-400/10'
                } rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="/Aaditya Resume.pdf"
            download="Aaditya_Malani_Resume.pdf"
            className="group relative inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-size-200 bg-pos-0 text-white font-semibold rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundSize: '200% 100%',
              backgroundPosition: '0% 50%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = '100% 50%';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = '0% 50%';
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 animate-pulse" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-transparent rounded-2xl" />
            </div>
            
            <span className="relative z-10 flex items-center justify-center">
              <ArrowDownTrayIcon className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}