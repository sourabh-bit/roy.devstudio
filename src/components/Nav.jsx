import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-white text-2xl font-black tracking-tight whitespace-nowrap">
            Roy Dev Studio<span className="text-red-500">.</span>
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-md"
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)} className="text-white focus:outline-none p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100 bg-[#0a0a0a]/95 backdrop-blur-md py-6' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white hover:text-red-500 font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
