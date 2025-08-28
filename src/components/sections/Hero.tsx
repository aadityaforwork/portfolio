'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import ThreeBackground from '@/components/three/ThreeBackground'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const letters = titleRef.current.querySelectorAll('.letter')
        gsap.fromTo(letters, 
          { y: 100, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.2, 
            stagger: 0.1, 
            ease: 'power3.out',
            delay: 0.5
          }
        )
      }

      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const titleText = "CS Student & Full Stack Developer"
  const letters = titleText.split('').map((letter, index) => (
    <span key={index} className="letter inline-block">
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ))

  return (
    <div ref={heroRef} className="relative sm:mt-10 min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <motion.p
              className="text-blue-400 text-lg sm:text-xl font-light tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.p>
            
            <h1 className="text-2xl sm:text-5xl lg:text-5xl font-bold text-white mb-4">
              <div data-text-boundary className="inline-block">
                <div className="mb-2">
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    Aaditya Malani
                  </motion.span>
                </div>
                <div ref={titleRef} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                  {letters}
                </div>
              </div>
            </h1>
          </div>
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            BTech Computer Science student passionate about machine learning, federated learning, and building innovative web applications with modern technologies
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-size-200 bg-pos-0 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25"
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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping" />
                <div className="absolute bottom-3 right-6 w-1 h-1 bg-white rounded-full animate-ping animation-delay-200" />
                <div className="absolute top-1/2 right-4 w-1 h-1 bg-white rounded-full animate-ping animation-delay-400" />
              </div>
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <motion.span
                  className="text-lg"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 border-2 border-purple-400/50 text-white font-semibold rounded-2xl backdrop-blur-sm hover:border-purple-400 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-2xl" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm font-light tracking-wider uppercase">Scroll</span>
          <div className="relative">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full group-hover:border-purple-400 transition-colors duration-300">
              <motion.div
                className="w-1 h-2 bg-white/60 rounded-full mx-auto mt-2 group-hover:bg-purple-400"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <div className="absolute inset-0 w-6 h-10 border-2 border-purple-400 rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />
          </div>
          
          <ChevronDownIcon className="w-5 h-5 group-hover:text-purple-400 transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </div>
  )
}
