import { motion } from 'framer-motion'

const services = [
  {
    title: 'Backend Development',
    description: 'Our backend development services ensure robust, scalable architectures that power applications and streamline operations efficiently.',
  },
  {
    title: 'PBX Deployment',
    description: 'We provide seamless PBX deployment services that ensure reliable, high-quality communication systems tailored to your business needs.',
  },
  {
    title: 'Mobile App Development',
    description: 'We create engaging mobile applications that offer seamless user experiences and leverage the latest technology trends to enhance functionality.',
  },
  {
    title: 'CRM Development',
    description: 'We design and develop custom CRM solutions that streamline your sales, marketing, and customer support operations.',
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
                Innovative IT Solutions
              </span>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Explore Our Comprehensive IT Services
              </h2>
              <p className="mt-6 max-w-md text-gray-600">
                Tailored solutions in backend development, mobile apps, UI/UX design, and PBX deployment to meet your unique needs.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit rounded-lg border border-neon-cyan/60 bg-neon-cyan/10 px-6 py-3 text-sm font-semibold text-neon-cyan transition hover:border-neon-cyan hover:shadow-neon-glow-cyan"
              >
                All Services
              </a>
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
