import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroImage from '../assets/herosection.jpeg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white pt-[72px] pb-12 sm:pb-16"
    >
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-purple/[0.04]" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-purple/[0.03]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pt-10 pb-4 sm:gap-8 sm:pt-14 sm:pb-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pt-16 lg:pb-8">
        <div className="order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-brand-purple/30 bg-brand-purple/5 px-4 py-1.5 text-sm font-semibold tracking-wider text-brand-purple"
          >
            Technology Meets Creativity
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem]"
          >
            Build What You Imagine
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600"
          >
            Ethergenyx brings your vision to life with powerful backends, mobile applications, and thoughtful interface design tailored to your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-xl border-2 border-brand-purple bg-brand-purple px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-purple/25 transition hover:bg-brand-purple/90 hover:shadow-xl hover:shadow-brand-purple/30"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 shadow-xl ring-1 ring-gray-900/5">
            <img
              src={heroImage}
              alt="Futuristic technology and innovation"
              className="h-[240px] w-full object-cover object-center sm:h-[300px] lg:h-[380px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
