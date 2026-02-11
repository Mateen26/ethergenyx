import { motion } from 'framer-motion'

const whoImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'

export default function WhoWeAre() {
  return (
    <section id="about" className="relative bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-0">
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-purple">
                Who We Are
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Ethergenyx: Pioneering IT Services for a Digital Future
              </h2>
              <p className="mt-6 text-gray-600">
                Ethergenyx is at the forefront of IT services in the USA, excelling in backend development, mobile app development, UI/UX design, and PBX deployment. Our innovative solutions leverage the latest technologies for our clients' success.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit rounded-lg border border-brand-purple/60 bg-brand-purple/10 px-6 py-3 font-semibold text-brand-purple transition hover:shadow-glow-purple"
              >
                Read More
              </a>
            </div>
            <div className="relative h-64 overflow-hidden lg:h-auto">
              <img
                src={whoImage}
                alt="Team collaboration"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent lg:from-transparent lg:via-transparent lg:to-white/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
