import { motion } from 'framer-motion'

export default function TailoredSolutions() {
  return (
    <section className="relative bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-wider text-brand-purple"
        >
          Custom Development
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          Your Goals, Our Craft
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base text-gray-600"
        >
          We work with businesses of all sizes to design and build software that solves real problems and drives measurable results.
        </motion.p>
      </div>
    </section>
  )
}
