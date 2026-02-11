import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import logo from '../assets/ETHERGENYX_Logo.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 h-[72px] border-b border-gray-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Ethergenyx"
              className="h-10 w-auto sm:h-16"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition hover:text-neon-cyan"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden rounded-lg border border-neon-cyan/60 bg-neon-cyan/10 px-5 py-2.5 text-sm font-semibold text-neon-cyan transition hover:border-neon-cyan hover:shadow-neon-glow-cyan sm:inline-block"
            >
              Get Started
            </a>
            <button
              type="button"
              className="rounded-lg p-2 text-gray-600 hover:text-neon-cyan md:hidden"
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
                className="rounded-lg p-2 text-gray-600 hover:text-neon-cyan"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <HiX className="h-8 w-8" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 px-6 pt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-800 hover:text-neon-cyan"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 rounded-lg border border-neon-cyan/60 bg-neon-cyan/10 px-6 py-3 font-semibold text-neon-cyan"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
