import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiMail } from 'react-icons/hi'
import Footer from '../components/Footer'

export default function RefundPolicy() {
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
              Refund Policy
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
              At Ethergenyx, we are committed to delivering high-quality development, consulting, and digital solutions tailored to our clients' goals. Your satisfaction is important to us. Please review our refund policy carefully to understand your rights and responsibilities regarding service cancellations and refunds.
            </p>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">1. Services Covered</h2>
              <p className="mt-4">This refund policy applies to the following Ethergenyx services:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Software Development</li>
                <li>Technical Consulting</li>
                <li>UI/UX Design</li>
                <li>System Architecture & DevOps</li>
                <li>Ongoing Maintenance & Support Plans</li>
                <li>Any other professional services explicitly listed in your signed contract or agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">2. General Refund Terms</h2>
              <p className="mt-4">Due to the nature of custom consulting and development work, refunds are generally not provided once work has commenced. However, Ethergenyx may consider refund requests under the following conditions:</p>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900">a) Project Cancellations (Before Work Begins)</h3>
                  <p className="mt-2">If you cancel a service before any work has begun and before resources have been allocated, you are eligible for a full refund, minus any applicable transaction or processing fees.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">b) Project Cancellations (After Work Begins)</h3>
                  <p className="mt-2">If work has started, Ethergenyx may issue a partial refund, based on the amount of work completed, time spent, and resources committed. This will be calculated at our standard hourly rate unless otherwise agreed in writing.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">c) Missed Milestones or Breach of Contract</h3>
                  <p className="mt-2">If Ethergenyx fails to meet clearly agreed-upon contractual obligations, and we are unable to resolve the issue, clients may be eligible for a pro-rated refund, depending on the severity and impact.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">3. Non-Refundable Items</h2>
              <p className="mt-4">The following are non-refundable:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Deposits or upfront payments (unless work has not begun)</li>
                <li>Services already delivered or time already billed</li>
                <li>Domain registrations, third-party licenses, or external software costs</li>
                <li>Change-of-mind or dissatisfaction without breach of scope or delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">4. Dispute Resolution</h2>
              <p className="mt-4">If you believe you are entitled to a refund, please contact our support team at <a href="mailto:support@ethergenyx.com" className="text-brand-purple hover:underline">support@ethergenyx.com</a> within 14 days of project completion or cancellation. We aim to resolve disputes fairly and promptly. Refund requests will be reviewed by our team within 7 business days and may require further documentation.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">5. Chargebacks</h2>
              <p className="mt-4">Unwarranted chargebacks will be considered a violation of the service agreement. Ethergenyx reserves the right to suspend ongoing or future services in such cases and pursue legal remedies if necessary.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">6. Modifications to This Policy</h2>
              <p className="mt-4">We reserve the right to update or modify this refund policy at any time. The latest version will always be posted on our website.</p>
            </section>

            <section className="rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-brand-purple/30 pb-2">Contact Us</h2>
              <p className="mt-4">If you have any questions about this policy, please contact us at:</p>
              <a
                href="mailto:support@ethergenyx.com"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-purple hover:underline"
              >
                <HiMail className="h-5 w-5" />
                support@ethergenyx.com
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
