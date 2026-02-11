import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function JoinUs() {
  return (
    <section className="relative py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl rounded-t-3xl border border-gray-200 border-b-0 bg-gradient-to-br from-brand-purple/10 to-neon-magenta/10 px-8 py-16 text-center sm:px-12 lg:px-16"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-purple">
          Ready to Start?
        </span>
        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Let&apos;s Build Something Great Together
        </h2>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-lg bg-brand-purple px-8 py-4 font-semibold text-white transition hover:shadow-glow-purple"
        >
          Get Started
        </Link>
        <p className="mt-8 text-sm text-gray-600">or call us at:</p>
        <a
          href="tel:3082052336"
          className="mt-2 inline-block font-semibold text-brand-purple underline decoration-brand-purple/60 underline-offset-4 hover:decoration-brand-purple"
        >
          (308) 205-2336
        </a>
      </motion.div>
    </section>
  )
}
