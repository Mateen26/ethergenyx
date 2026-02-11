import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Built for You',
    description: 'Every project gets a custom approach. No templates or one-size-fits-all—we craft solutions that fit your workflow, scale, and long-term ambitions.',
  },
  {
    title: 'Thoughtful Design',
    description: 'We create interfaces that feel intuitive and engaging. Clear layouts, purposeful interactions, and a focus on how users actually experience your product.',
  },
  {
    title: 'Smart Tech Stack',
    description: 'We harness modern tools—including AI where it adds value—to build faster, smarter applications that adapt to an ever-changing technical landscape.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-purple">
            Why Work With Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            What Makes Ethergenyx Different
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-brand-purple/40 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
              <div className="mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-brand-purple to-neon-magenta" />
              <p className="mt-5 text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
