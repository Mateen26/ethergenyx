import { motion } from 'framer-motion'
import { HiPhone } from 'react-icons/hi'

export default function TailoredSolutions() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-wider text-neon-cyan"
        >
          Tailored IT Solutions
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-3xl font-bold text-white sm:text-4xl"
        >
          Your Solutions, Our Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-gray-600"
        >
          At Ethergenyx, we offer specialized services that cater to your unique business needs. We are committed to delivering modern and innovative solutions that impact your success.
        </motion.p>
        <motion.a
          href="tel:3082052336"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 inline-flex items-center gap-2 text-neon-cyan underline decoration-neon-cyan/60 underline-offset-4 transition hover:text-neon-cyan hover:decoration-neon-cyan"
        >
          <HiPhone className="h-5 w-5" />
          <span>(308) 205-2336</span>
        </motion.a>
      </div>
    </section>
  )
}
