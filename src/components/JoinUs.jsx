import { motion } from 'framer-motion'

export default function JoinUs() {
  return (
    <section className="relative py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl rounded-t-3xl border border-gray-200 border-b-0 bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 px-8 py-16 text-center sm:px-12 lg:px-16"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-neon-cyan">
          Join Us
        </span>
        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Take Your Business to the Next Level with Our Expert IT Solutions Today!
        </h2>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-lg bg-neon-cyan px-8 py-4 font-semibold text-white transition hover:shadow-neon-glow-cyan"
        >
          Get Started
        </a>
        <p className="mt-8 text-sm text-gray-600">or call us at:</p>
        <a
          href="tel:3082052336"
          className="mt-2 inline-block font-semibold text-neon-cyan underline decoration-neon-cyan/60 underline-offset-4 hover:decoration-neon-cyan"
        >
          (308) 205-2336
        </a>
      </motion.div>
    </section>
  )
}
