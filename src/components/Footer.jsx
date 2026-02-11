import logo from '../assets/ETHERGENYX_Logo.png'

const menuLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              About Us
            </h3>
            <img
              src={logo}
              alt="Ethergenyx"
              className="mt-4 h-10 w-auto opacity-90"
            />
            <p className="mt-4 max-w-sm text-sm text-gray-600">
              Ethergenyx delivers innovative IT services to empower businesses and foster growth.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Menu
            </h3>
            <ul className="mt-4 space-y-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition hover:text-neon-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <span className="text-gray-500">A:</span> 909 Kiefer Ridge Dr, Ballwin, MO 63021 USA
              </li>
              <li>
                <span className="text-gray-500">P:</span>{' '}
                <a href="tel:3082052336" className="hover:text-neon-cyan">(308) 205-2336</a>
              </li>
              <li>
                <span className="text-gray-500">E:</span>{' '}
                <a href="mailto:info@ethergenyx.com" className="hover:text-neon-cyan">info@ethergenyx.com</a>
              </li>
            </ul>
            <a
              href="#"
              className="mt-4 inline-block text-sm text-neon-cyan underline decoration-neon-cyan/60 underline-offset-4 hover:decoration-neon-cyan"
            >
              Privacy & Refund Policy
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          Copyright © 2026 Ethergenyx
        </div>
      </div>
    </footer>
  )
}
