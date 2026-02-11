import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiMail } from 'react-icons/hi'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-white pt-[72px]">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-500">Effective Date: February 1, 2026</p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-gray max-w-none space-y-10 text-gray-700"
          >
            <p className="text-lg leading-relaxed">
              Ethergenyx (“we,” “us,” or “our”) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and share your data when you interact with our website or use our services. By accessing our site or engaging our services, you agree to the terms of this policy.
            </p>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">1. Information We Collect</h2>
              <p className="mt-4">We may collect the following types of information:</p>
              <h3 className="mt-4 font-semibold text-gray-900">a) Personal Information</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Billing and payment information</li>
                <li>Project-related data (as provided by you)</li>
              </ul>
              <h3 className="mt-4 font-semibold text-gray-900">b) Non-Personal Information</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on the site</li>
                <li>Referring websites or sources</li>
              </ul>
              <p className="mt-4">We collect this data when you: fill out contact forms; request a quote or consultation; subscribe to newsletters or updates; or engage with our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">2. How We Use Your Information</h2>
              <p className="mt-4">We use the information we collect to:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Provide and deliver our services</li>
                <li>Communicate with you regarding your project or inquiry</li>
                <li>Respond to your support requests</li>
                <li>Improve our website and offerings</li>
                <li>Send important updates or marketing content (only if you opt in)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">3. Data Sharing and Third Parties</h2>
              <p className="mt-4">We do not sell or rent your personal information. We may share your data with trusted third-party providers who help us operate our business, such as: payment processors; hosting providers; analytics tools (e.g., Google Analytics); legal or accounting advisors (only if necessary). These providers are required to protect your data and may only use it for the services they provide to us.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">4. Cookies and Tracking Technologies</h2>
              <p className="mt-4">We use cookies and similar technologies to improve user experience, analyze website performance, and remember user preferences. You can control cookies through your browser settings. Disabling cookies may limit some functionality of our site.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">5. Data Security</h2>
              <p className="mt-4">We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, misuse, or disclosure. However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">6. Data Retention</h2>
              <p className="mt-4">We retain personal information only as long as necessary for the purposes outlined in this policy or to comply with legal requirements. If you wish to request deletion of your data, contact us at <a href="mailto:privacy@ethergenyx.com" className="text-brand-purple hover:underline">privacy@ethergenyx.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">7. Your Rights</h2>
              <p className="mt-4">Depending on your location, you may have rights to: access the personal data we hold about you; request correction or deletion; withdraw consent at any time; object to processing for certain purposes; or file a complaint with a supervisory authority. To exercise any of these rights, contact us at <a href="mailto:privacy@ethergenyx.com" className="text-brand-purple hover:underline">privacy@ethergenyx.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">8. International Data Transfers</h2>
              <p className="mt-4">If you are located outside of the country where our servers are hosted, please be aware that your data may be transferred to, processed, and stored in a different jurisdiction. We ensure adequate safeguards are in place where required by law.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">9. Third-Party Links</h2>
              <p className="mt-4">Our website may contain links to external sites not operated by Ethergenyx. We are not responsible for the privacy practices or content of such third-party websites.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">10. Changes to This Policy</h2>
              <p className="mt-4">We may update this Privacy Policy from time to time. The most current version will always be available on our website with the updated effective date.</p>
            </section>

            <section className="rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-brand-purple/30 pb-2">11. Contact Us</h2>
              <p className="mt-4">If you have questions or concerns about this Privacy Policy or your personal data, contact us at:</p>
              <a
                href="mailto:privacy@ethergenyx.com"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-purple hover:underline"
              >
                <HiMail className="h-5 w-5" />
                privacy@ethergenyx.com
              </a>
            </section>
          </motion.article>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <Link to="/" className="text-brand-purple hover:underline font-medium">
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
