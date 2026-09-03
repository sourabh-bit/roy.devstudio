import { useEffect, useRef, useState } from 'react'
import Wave from './Wave'

// White grid section with tilted, pinned sticky-note cards linked by a dashed path.
// Cards alternate white → red → white → red for a clear visual pattern.
const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We start with your goals, your customers, and what makes your brand different — so the website is built on strategy, not guesswork.',
    pos: 'md:absolute md:top-[140px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
    aos: 'fade-left',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Clean layouts, premium typography, and pixel-perfect screens designed to make visitors trust your brand instantly.',
    pos: 'md:absolute md:top-[560px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
    aos: 'fade-right',
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Your site is built with React, Next.js, and Tailwind — fast, responsive, animated, and tested on real devices.',
    pos: 'md:absolute md:top-[860px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
    aos: 'fade-left',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Domain, hosting, SEO basics, and analytics — all handled. Your site goes live polished, and I stay around for support.',
    pos: 'md:absolute md:top-[1160px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
    aos: 'fade-right',
  },
]

export default function Process() {
  const cardsRef = useRef(null)
  const pinRefs = useRef([])
  const [mobilePath, setMobilePath] = useState('')
  const [mobilePathHeight, setMobilePathHeight] = useState(0)

  // Measures each card's pin and draws a gentle wavy dashed curve through them —
  // scoped to the cards container only, so it never reaches up into the intro text.
  useEffect(() => {
    const container = cardsRef.current
    if (!container) return

    const recompute = () => {
      const containerRect = container.getBoundingClientRect()
      const points = pinRefs.current
        .filter(Boolean)
        .map((el) => {
          const r = el.getBoundingClientRect()
          return { x: r.left + r.width / 2 - containerRect.left, y: r.top + r.height / 2 - containerRect.top }
        })
      if (points.length < 2) return
      let d = `M ${points[0].x} ${points[0].y}`
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1]
        const curr = points[i]
        const midY = (prev.y + curr.y) / 2
        const wave = i % 2 === 1 ? 34 : -34
        d += ` C ${prev.x + wave} ${midY}, ${curr.x - wave} ${midY}, ${curr.x} ${curr.y}`
      }
      setMobilePath(d)
      setMobilePathHeight(container.scrollHeight)
    }

    recompute()
    const ro = new ResizeObserver(recompute)
    ro.observe(container)
    window.addEventListener('resize', recompute)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', recompute)
    }
  }, [])

  return (
    <section
      id="process"
      className="bg-white pt-28 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <Wave top fill="fill-[#ff2a2a]" />
      <div className="max-w-6xl mx-auto relative md:h-[1480px]">
        <div data-aos="fade-up" className="md:absolute top-0 left-0 md:w-[420px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            My Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Here's how I turn your idea into a live website
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            Four clear steps — from first call to a premium website that's live and earning for your business.
          </p>
        </div>

        {/* dashed connector path (desktop) */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1480px] pointer-events-none z-0"
          viewBox="0 0 1000 1480"
          preserveAspectRatio="none"
        >
          <path
            d="M 790 360 C 550 480, 260 500, 245 680 C 232 850, 660 810, 705 990 C 745 1130, 500 1180, 430 1270"
            fill="none"
            stroke="#111"
            strokeWidth="2"
            strokeDasharray="8 10"
            opacity="0.45"
          />
        </svg>

        <div ref={cardsRef} className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          {/* dashed connector path (mobile) — measured to match the actual pin positions, scoped to this container only */}
          {mobilePath && (
            <svg
              className="md:hidden absolute inset-x-0 top-0 w-full pointer-events-none z-0"
              style={{ height: mobilePathHeight }}
            >
              <path d={mobilePath} fill="none" stroke="#111" strokeWidth="2" strokeDasharray="6 8" opacity="0.3" />
            </svg>
          )}

          {steps.map((s, i) => {
            const red = i % 2 === 1
            return (
              <div
                key={s.num}
                data-aos={s.aos}
                data-aos-delay={(i + 1) * 100}
                className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${s.pos} ${
                  red
                    ? 'bg-white border border-red-200 shadow-[0_15px_40px_rgba(255,42,42,0.2)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.35)]'
                    : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
                }`}
              >
                {/* pin */}
                <div
                  ref={(el) => (pinRefs.current[i] = el)}
                  className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20" />
                </div>
                <div
                  className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
                    red ? 'bg-[#ff2a2a]' : 'bg-[#f4f4f4]'
                  }`}
                >
                  <span className={`text-xl font-bold mb-2 font-serif italic ${red ? 'text-white/70' : 'text-gray-400'}`}>
                    {s.num}
                  </span>
                  <h3 className={`text-2xl font-black mb-3 tracking-tight ${red ? 'text-white' : 'text-gray-900'}`}>
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-semibold ${red ? 'text-white' : 'text-gray-600'}`}>
                    {s.desc}
                  </p>
                </div>
              </div>
            )
          })}

          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:block absolute top-[1400px] left-[58%] font-hand text-3xl text-gray-600 rotate-6"
          >
            Ready to ship!
          </div>
        </div>
      </div>
    </section>
  )
}
