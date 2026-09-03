import { useRef } from 'react'
import { MonitorIcon, BuildingIcon, CartIcon, RefreshIcon, LayersIcon, SparkleIcon, ArrowRightIcon, ArrowUpRightIcon } from './icons'
import Wave from './Wave'

const services = [
  {
    Icon: MonitorIcon,
    title: 'Landing Pages',
    desc: 'High-impact single pages for launches, offers, and ad campaigns — designed to turn clicks into enquiries within seconds.',
  },
  {
    Icon: BuildingIcon,
    title: 'Business Websites',
    desc: 'Multi-page premium websites for clinics, gyms, salons, and studios that make your brand look established.',
  },
  {
    Icon: CartIcon,
    title: 'E-Commerce Stores',
    desc: 'Online stores that feel like a flagship boutique — smooth checkout and built to earn trust with every step.',
  },
  {
    Icon: LayersIcon,
    title: 'Full Stack Websites',
    desc: 'Complete web apps with a real backend — auth, databases, and APIs — built and shipped end to end.',
  },
  {
    Icon: RefreshIcon,
    title: 'Website Redesigns',
    desc: 'Already have a site that underperforms? I rebuild it into something faster, sharper, and worth your price.',
  },
]

// Cursor-tracked neon glow — sets CSS vars directly on the node so hovering
// doesn't trigger a React re-render on every mousemove.
function useSpotlight() {
  const ref = useRef(null)
  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }
  return { ref, onMouseMove }
}

function ServiceCard({ s, num, aosDelay }) {
  const { ref, onMouseMove } = useSpotlight()

  return (
    <a
      href="#contact"
      ref={ref}
      onMouseMove={onMouseMove}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 md:p-7 hover:border-red-500/30 transition-colors duration-500"
    >
      {/* ambient glow bleeding from the bottom — always faintly on, brightens on hover */}
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-red-600/25 blur-3xl rounded-full opacity-40 group-hover:opacity-90 transition-opacity duration-500" />

      {/* neon spotlight that follows the cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{ background: 'radial-gradient(220px circle at var(--x,50%) var(--y,50%), rgba(255,42,42,0.28), transparent 70%)' }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <span className="w-10 h-10 rounded-lg border border-red-500/20 bg-red-500/10 flex items-center justify-center group-hover:border-red-500/50 group-hover:bg-red-500/20 group-hover:scale-105 transition-all duration-300">
            <s.Icon className="w-5 h-5 text-red-500" />
          </span>
          <span className="text-white/10 text-5xl font-black leading-none select-none group-hover:text-white/[0.14] transition-colors duration-500">
            {num}
          </span>
        </div>
        <span className="block w-6 h-0.5 bg-red-500 mb-4" />
        <h3 className="text-white text-lg font-bold mb-2 tracking-tight">{s.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
      </div>

      <div className="relative z-10 pt-6 mt-2 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 group-hover:text-white transition-colors duration-300">
          Learn More
        </span>
        <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-500">
          <ArrowRightIcon className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" />
        </span>
      </div>
    </a>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#ff2a2a] pt-28 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <Wave top fill="fill-[#0a0a0a]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="relative mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-white/60" />
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white/70">What I Offer</span>
            <span className="w-1 h-1 rounded-full bg-white/60" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] mb-6 tracking-tight max-w-2xl">
            Websites built to grow your business.
          </h2>
          <p className="text-red-50 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Every service is designed around one goal — making your brand look premium and turning visitors into customers.
          </p>

          <div className="hidden lg:block absolute top-0 right-0 text-black opacity-20 animate-pulse">
            <SparkleIcon className="w-14 h-14" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} num={String(i + 1).padStart(2, '0')} aosDelay={i * 100} />
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-10 md:mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <SparkleIcon className="w-4 h-4 text-black/70 shrink-0" />
            <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/70">
              Strategy · Design · Performance · Growth
            </span>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-gray-100 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 whitespace-nowrap"
          >
            Let's Build Something Great
            <ArrowUpRightIcon className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
