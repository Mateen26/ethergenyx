import { motion } from 'framer-motion'
import { HiOutlineChatAlt2 } from 'react-icons/hi'

const testimonials = [
  {
    text: 'Ethergenyx transformed our digital presence. Their team not only understood our vision but brought it to life beautifully. Highly recommended!',
    name: 'James Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
  },
  {
    text: 'Working with Ethergenyx was a game-changer for our app. Their innovative approach and attention to detail exceeded our expectations!',
    name: 'Emily Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
  },
  {
    text: "The level of service and expertise from Ethergenyx is unparalleled. They truly care about their clients' success. We're thrilled with the results!",
    name: 'Michael Brown',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
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
          What Our Clients Say
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
