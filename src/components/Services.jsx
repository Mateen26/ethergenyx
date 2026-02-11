import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Backend Development',
    description: 'Server-side systems that scale. We build APIs, databases, and infrastructure that keep your apps fast, secure, and ready to grow.',
  },
  {
    title: 'PBX Deployment',
    description: 'Reliable voice and communication setups. From design to rollout, we deliver PBX systems that fit your operations and improve connectivity.',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android. Clean code, smooth UX, and features that keep users coming back.',
  },
  {
    title: 'CRM Development',
    description: 'Custom CRM platforms for sales, marketing, and support. Centralize data, automate workflows, and make better decisions faster.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <span className="text-sm font-medium text-gray-500">
                What We Do
              </span>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                End-to-End Tech Solutions
              </h2>
              <p className="mt-6 max-w-md text-gray-600">
                Backend systems, mobile apps, UI/UX design, and PBX deployment—all built to fit your needs and scale with your business.
              </p>
              <Link
                to="/services"
                className="mt-8 inline-flex w-fit rounded-lg border border-brand-purple/60 bg-brand-purple/10 px-6 py-3 text-sm font-semibold text-brand-purple transition hover:border-brand-purple hover:shadow-glow-purple"
              >
                All Services
              </Link>
            </motion.div>
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
