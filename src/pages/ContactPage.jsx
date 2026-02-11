import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone } from 'react-icons/hi'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <section className="bg-white pt-[72px]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-purple">
              Say Hello
            </span>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
              Let&apos;s Talk
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Got a project or a question? Drop us a line below. We usually reply within a day.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-gray-200 bg-gray-50/50 p-8 shadow-sm sm:p-10"
            >
              <h2 className="text-xl font-bold text-gray-900">Drop us a line</h2>
              <p className="mt-2 text-sm text-gray-600">
                Share your details and we&apos;ll get back to you as soon as we can.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 rounded-xl border border-brand-purple/30 bg-brand-purple/10 p-6 text-center"
                >
                  <p className="font-semibold text-brand-purple">Message sent!</p>
                  <p className="mt-2 text-sm text-gray-600">
                    We got it and will reach out shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                      placeholder="(929) 636-6629"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                      placeholder="Share your project details, questions, or ideas..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-brand-purple px-6 py-4 font-semibold text-white transition hover:shadow-glow-purple focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900">Other ways to reach us</h2>
                <p className="mt-2 text-gray-600">
                  Call or email—we&apos;re here when you need us.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:9296366629"
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition hover:border-brand-purple/40 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                    <HiPhone className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="mt-1 text-gray-600">(929) 636-6629</p>
                  </div>
                </a>
                <a
                  href="mailto:info@ethergenyx.com"
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition hover:border-brand-purple/40 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                    <HiMail className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="mt-1 text-gray-600">info@ethergenyx.com</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
