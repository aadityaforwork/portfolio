import { Suspense } from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Resume from '@/components/sections/Resume'
import Contact from '@/components/sections/Contact'
import Navbar from '@/components/ui/Navbar'
import SmoothScrolling from '@/components/ui/SmoothScrolling'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function Home() {
  return (
    <SmoothScrolling>
      <div className="relative bg-black text-white overflow-x-hidden">
  <Navbar />
  <div className="nav-spacer" />
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="home" className="relative scroll-mt-20 md:scroll-mt-24">
            <Hero />
          </section>
          <section id="about" className="relative scroll-mt-20 md:scroll-mt-24">
            <About />
          </section>
          <section id="portfolio" className="relative scroll-mt-20 md:scroll-mt-24">
            <Portfolio />
          </section>
          <section id="resume" className="relative scroll-mt-20 md:scroll-mt-24">
            <Resume />
          </section>
          <section id="contact" className="relative scroll-mt-20 md:scroll-mt-24">
            <Contact />
          </section>
        </Suspense>
      </div>
    </SmoothScrolling>
  )
}
