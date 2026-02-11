import { motion } from 'framer-motion'
import { HiOutlineChatAlt2 } from 'react-icons/hi'

const testimonials = [
  {
    text: 'They took our rough concept and turned it into something we’re proud to ship. Responsive, clear communicators, and the work speaks for itself.',
    name: 'Marcus Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
  },
  {
    text: 'Our app launch went smoothly thanks to Ethergenyx. They caught details we missed and delivered ahead of schedule. Couldn’t ask for more.',
    name: 'Sarah Patel',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    text: 'Professional, thorough, and genuinely invested in our success. The final product exceeded what we had in mind. Will work with them again.',
    name: 'David Okonkwo',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Client Stories
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <span className="text-amber-400">★★★★★</span> Based on Google Reviews
          </span>
          <span className="flex items-center gap-2">
            <span className="text-amber-400">★★★★★</span> Based on Yelp Reviews
          </span>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm"
            >
              <HiOutlineChatAlt2 className="absolute right-6 top-6 h-10 w-10 text-brand-purple/50" />
              <p className="pr-4 text-gray-700">{item.text}</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt=""
                  className="h-12 w-12 rounded-full border-2 border-gray-200 object-cover"
                />
                <span className="font-semibold text-gray-900">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
