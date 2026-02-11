import { motion } from 'framer-motion'

const heroImage = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white pt-[72px]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24 xl:gap-16">
        <div className="order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-wider text-neon-cyan"
          >
            Innovative IT Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Transforming Ideas into Reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-gray-600"
          >
            At Ethergenyx, we specialize in cutting-edge backend development, mobile app solutions, and stunning UI/UX designs that meet your every need.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="mt-8 inline-block rounded-lg border-2 border-neon-cyan bg-neon-cyan/10 px-8 py-4 font-semibold text-neon-cyan transition hover:bg-neon-cyan/20 hover:shadow-neon-glow-cyan"
            >
              Get Started
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-2xl">
            <img
              src={heroImage}
              alt="Server and technology"
              className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[480px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
