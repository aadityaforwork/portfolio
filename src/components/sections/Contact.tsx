'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: 'Email',
  value: 'aadityamalani15@gmail.com',
  href: 'mailto:aadityamalani15@gmail.com'
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
  value: '9987679904',
  href: 'tel:9987679904'
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: 'Mumbai, India',
    href: '#'
  }
]

const socialLinks = [
  { name: 'GitHub', url: '#', color: 'hover:text-gray-300' },
  { name: 'LinkedIn', url: '#', color: 'hover:text-blue-400' },
  { name: 'Twitter', url: '#', color: 'hover:text-sky-400' },
  { name: 'Instagram', url: '#', color: 'hover:text-pink-400' }
]

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div id="contact" className="min-h-screen scroll-mt-24 relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-size-200 animate-gradient">
              Touch
            </span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I&apos;d love to hear from you. Let&apos;s create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and design. Feel free to reach out 
                through any of the channels below.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="group relative p-6 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-transparent transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-500 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300 text-sm">
                        {info.label}
                      </p>
                      <p className="text-white font-medium group-hover:text-gray-100 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 text-xl">
                      →
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-400/10 to-blue-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.a>
              ))}
            </div>
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={`group relative px-4 py-3 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-600/50 text-gray-300 font-medium transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/10 ${social.color}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <span className="relative z-10">{social.name}</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-500 to-pink-400 opacity-0 hover:opacity-10 blur-xl transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-3 group-focus-within:text-purple-200 transition-colors duration-300">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className="w-full px-4 py-4 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-400 rounded-full" />
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-3 group-focus-within:text-purple-200 transition-colors duration-300">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className="w-full px-4 py-4 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="aadityamalani15@gmail.com"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-400 rounded-full" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-purple-300 mb-3 group-focus-within:text-purple-200 transition-colors duration-300">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      {...register('subject')}
                      className="w-full px-4 py-4 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="What's this about?"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-400 rounded-full" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-3 group-focus-within:text-purple-200 transition-colors duration-300">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message')}
                      className="w-full px-4 py-4 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Tell me about your project or just say hello!"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-400 rounded-full" />
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-size-200 bg-pos-0 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  style={{
                    backgroundSize: '200% 100%',
                    backgroundPosition: '0% 50%'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundPosition = '100% 50%';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundPosition = '0% 50%';
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  {!isSubmitting && !isSubmitted && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-3 left-6 w-1 h-1 bg-white rounded-full animate-ping" />
                      <div className="absolute bottom-4 right-8 w-1 h-1 bg-white rounded-full animate-ping animation-delay-200" />
                      <div className="absolute top-1/2 right-6 w-1 h-1 bg-white rounded-full animate-ping animation-delay-400" />
                    </div>
                  )}
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : isSubmitted ? (
                      <CheckCircleIcon className="w-6 h-6 text-green-400" />
                    ) : (
                      <PaperAirplaneIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    )}
                    <span className="text-lg font-medium">
                      {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                    </span>
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
