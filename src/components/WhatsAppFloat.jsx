import { useEffect, useState } from 'react'
import { WhatsAppIcon } from './icons'

// Mobile/tablet only — desktop already has WhatsApp in Hero's fixed social rail.
// Hidden over the hero (it has its own contact controls) and over the footer
// (which has its own WhatsApp icon, and would otherwise sit under this button).
export default function WhatsAppFloat() {
  const [pastHero, setPastHero] = useState(false)
  const [overFooter, setOverFooter] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('home')
    const footer = document.querySelector('footer')
    if (!hero || !footer) return
    const heroObserver = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0.1 })
    const footerObserver = new IntersectionObserver(([entry]) => setOverFooter(entry.isIntersecting), { threshold: 0.05 })
    heroObserver.observe(hero)
    footerObserver.observe(footer)
    return () => {
      heroObserver.disconnect()
      footerObserver.disconnect()
    }
  }, [])

  const visible = pastHero && !overFooter

  return (
    <a
      href="https://wa.me/918920135102"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`lg:hidden fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#ff2a2a] text-white shadow-[0_8px_24px_rgba(255,42,42,0.5)] transition-all duration-500 hover:scale-110 hover:bg-red-600 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-[#ff2a2a] animate-ping opacity-40" />
      <WhatsAppIcon className="w-6 h-6 relative z-10" />
    </a>
  )
}
