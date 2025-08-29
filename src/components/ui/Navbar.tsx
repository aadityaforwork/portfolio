'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)

      const sections = navLinks.map(link => link.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollY + 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <motion.div
            className="text-lg sm:text-xl font-bold group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
              Port
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              folio
            </span>
          </motion.div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 lg:gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    activeSection === link.href.slice(1)
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-white hover:text-purple-400 hover:bg-purple-500/5'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 lg:w-6 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                </motion.button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-white p-2 sm:p-3 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 hover:bg-purple-500/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              {isOpen ? (
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
              ) : (
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5" />
            
            <div className="relative px-3 sm:px-4 py-4 sm:py-6 flex flex-col gap-2 sm:gap-3">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`group relative w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-xl transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-purple-400 bg-purple-500/20'
                      : 'text-white hover:text-purple-400 hover:bg-purple-500/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {activeSection === link.href.slice(1) && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-400 to-blue-400 rounded-r-full" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
