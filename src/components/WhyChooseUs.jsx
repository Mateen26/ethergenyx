import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Tailored Solutions',
    description: 'We provide personalized IT services that cater specifically to your business needs. Our expert team ensures that each solution is unique and effective for you.',
  },
  {
    title: 'Modern Design',
    description: 'Our vibrant designs, featuring captivating neon color schemes, set your brand apart. User-centric UI/UX designs ensure an engaging experience for your customers.',
  },
  {
    title: 'AI Integration',
    description: 'Incorporating advanced AI elements, we optimize your applications to enhance functionality and user engagement, staying ahead in the fast-evolving tech landscape.',
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
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Discover the Unique Advantages of Partnering with Ethergenyx
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
