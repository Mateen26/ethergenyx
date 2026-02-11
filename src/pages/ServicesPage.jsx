import { motion } from 'framer-motion'
import JoinUs from '../components/JoinUs'
import Footer from '../components/Footer'

const servicesHeroImage = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=90'
const codeImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80'

const servicesList = [
  {
    id: '01',
    title: 'Backend Development',
    description: 'Server-side systems built for speed and reliability. We handle APIs, databases, and infrastructure so your apps run smoothly and scale when you do. Performance and security are baked in from day one.',
    price: '$500',
    image: codeImage,
  },
  {
    id: '02',
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android. We focus on clean UX and solid architecture, iterate with your feedback, and ship on time. Your idea, our execution.',
    price: '$400',
    image: codeImage,
  },
  {
    id: '03',
    title: 'UI/UX Design',
    description: 'Interfaces that look good and work even better. We research how people use your product, then design flows and layouts that make sense. The result: digital experiences that feel natural and keep users engaged.',
    price: '$150',
    image: codeImage,
  },
  {
    id: '04',
    title: 'PBX Deployment',
    description: 'Voice and communication systems that fit your setup. Whether on-premise, cloud, or hybrid, we handle design, install, config, and support. You get clear calls, minimal downtime, and room to grow.',
    price: '$250',
    image: codeImage,
  },
  {
    id: '05',
    title: 'CRM Development',
    description: 'Custom CRM platforms for sales, support, and marketing. Centralize leads and contacts, automate repetitive tasks, and surface the data you need to make better decisions and grow your business.',
    price: '$350',
    image: codeImage,
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-white pt-[72px]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold uppercase tracking-wider text-brand-purple"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl"
            >
              What We Offer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-gray-600"
            >
              Backend systems, mobile apps, UI/UX design, PBX, and CRM—built to fit your needs and deliver real results.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-xl"
          >
            <img
              src={servicesHeroImage}
              alt="Code and development"
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-purple">
              Full Service List
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Every Service, Priced Transparently
            </h2>
          </motion.div>

          <div className="mt-16 space-y-24">
            {servicesList.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-2xl font-bold text-brand-purple">{service.id}</span>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-gray-600">{service.description}</p>
                  <p className="mt-6 text-gray-700">
                    Starting From{' '}
                    <span className="font-bold text-brand-purple">{service.price} Only</span>
                  </p>
                </div>
                <div className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-56 w-full object-cover sm:h-72"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <JoinUs />
      <Footer />
    </>
  )
}
