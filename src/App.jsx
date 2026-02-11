import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import TailoredSolutions from './components/TailoredSolutions'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WhoWeAre from './components/WhoWeAre'
import JoinUs from './components/JoinUs'
import Footer from './components/Footer'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-lg border border-neon-cyan/60 bg-white text-neon-cyan shadow-lg transition hover:border-neon-cyan hover:shadow-neon-glow-cyan"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Header />
      <ProgressBar />
      <main>
        <Hero />
        <WhyChooseUs />
        <TailoredSolutions />
        <Services />
        <Testimonials />
        <WhoWeAre />
        <JoinUs />
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  )
}

export default App
