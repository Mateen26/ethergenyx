import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import logo from '../assets/ETHERGENYX_Logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isServices = location.pathname === '/services'
  const isContact = location.pathname === '/contact'

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 h-[72px] border-b border-gray-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Ethergenyx"
              className="h-10 w-auto sm:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = (link.to === '/services' && isServices) || (link.to === '/contact' && isContact)
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition hover:text-brand-purple ${isActive ? 'text-brand-purple underline decoration-brand-purple underline-offset-4' : 'text-gray-600'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden rounded-lg border border-brand-purple/60 bg-brand-purple/10 px-5 py-2.5 text-sm font-semibold text-brand-purple transition hover:border-brand-purple hover:shadow-glow-purple sm:inline-block"
            >
              Get Started
            </Link>
            <button
              type="button"
              className="rounded-lg p-2 text-gray-600 hover:text-brand-purple md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <HiMenuAlt3 className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/98 backdrop-blur-md md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex justify-end p-4">
              <button
                type="button"
                className="rounded-lg p-2 text-gray-600 hover:text-brand-purple"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <HiX className="h-8 w-8" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 px-6 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg font-medium text-gray-800 hover:text-brand-purple"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 rounded-lg border border-brand-purple/60 bg-brand-purple/10 px-6 py-3 font-semibold text-brand-purple"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
