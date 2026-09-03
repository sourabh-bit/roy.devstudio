import { useEffect, useRef } from 'react'
import { InstagramIcon, ArrowRightIcon, ArrowUpRightIcon } from './icons'
import Wave from './Wave'

// TODO: swap the remaining DashboardMock placeholders for real product screenshots
// once you have them — just add a `cover` field like Luxe Artistry Haven has.
const projects = [
  {
    flagship: true,
    title: 'Luxe Artistry Haven',
    category: 'Beauty & Booking',
    desc: 'A booking-first beauty brand site with cinematic, editorial motion.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://meerasakhrani.in',
    cover: '/projects/luxe-artistry-cover.webp',
    video: '/projects/luxe-artistry-preview.mp4',
    glow: 'from-[#4a0f0f] via-[#1a0505] to-[#0a0a0a]',
    variant: 'stats',
  },
  {
    title: 'Lush Makeovers',
    category: 'Bridal & Destination Makeup',
    desc: 'A bridal makeup studio site built to book destination weddings across Andhra Pradesh.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://lushmakeovers.in',
    cover: '/projects/lush-makeovers-cover.webp',
    video: '/projects/lush-makeovers-preview.mp4',
    glow: 'from-[#2a1010] via-[#150808] to-[#0a0a0a]',
    variant: 'list',
  },
  {
    title: 'Sadik Masterclass',
    category: 'Course & Booking',
    desc: 'An editorial one-page site for a mobile photography masterclass, built to sell out seats.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://learnwithsadik.in',
    cover: '/projects/sadik-masterclass-cover.webp',
    video: '/projects/sadik-masterclass-preview.mp4',
    glow: 'from-[#1f1010] via-[#120808] to-[#0a0a0a]',
    variant: 'grid',
  },
]

// Abstract placeholder "screenshot" — stands in for a real product shot until one exists.
// Swap this for <img src={p.cover} className="w-full h-full object-cover" /> once you have real shots.
function DashboardMock({ variant }) {
  if (variant === 'list') {
    return (
      <div className="h-full flex flex-col justify-center gap-3 p-5">
        <div className="flex items-center justify-between">
          <div className="h-3 w-24 rounded bg-white/15" />
          <div className="h-6 w-16 rounded-full bg-red-500/20" />
        </div>
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-4">
            <div className="w-9 h-9 rounded-full bg-white/10 shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-2.5 w-3/5 rounded bg-white/15" />
              <div className="h-2 w-2/5 rounded bg-white/5" />
            </div>
            <div className="h-2.5 w-12 rounded bg-white/10" />
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'grid') {
    return (
      <div className="h-full flex flex-col justify-center gap-4 p-5">
        <div className="h-9 rounded-lg bg-white/5 flex items-center px-4 gap-2">
          <div className="w-3.5 h-3.5 rounded-full border border-white/20" />
          <div className="h-2.5 w-28 rounded bg-white/10" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-16 md:h-20 rounded-lg bg-white/5 border border-white/5" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col justify-center gap-4 p-5">
      <div className="h-3 w-32 rounded bg-white/15" />
      <div className="grid grid-cols-2 gap-3">
        {[0, 1].map((i) => (
          <div key={i} className="bg-white/5 rounded-lg p-3.5 space-y-2">
            <div className="h-2 w-14 rounded bg-white/10" />
            <div className="h-4 w-20 rounded bg-white/20" />
          </div>
        ))}
      </div>
      <div className="flex items-end gap-2 h-14 md:h-16">
        {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-red-500/30" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

// Only downloads/plays once actually scrolled into view, and pauses when
// scrolled away — keeps 3 autoplaying videos from fighting for bandwidth
// and battery on mobile, where most visitors are.
function ProjectVideo({ src, poster, title }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.25 }
    )
    observer.observe(v)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      loop
      muted
      playsInline
      preload="none"
      aria-label={`${title} — live site preview`}
      className="w-full h-full object-cover object-top"
    />
  )
}

function ProjectCard({ project: p }) {
  return (
    <div
      data-aos="fade-up"
      className="group h-full flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-red-500/30 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500"
    >
      {/* browser-frame preview */}
      <div className={`relative p-4 pb-0 bg-gradient-to-br ${p.glow}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        {p.flagship && (
          <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 text-[9px] font-bold tracking-widest uppercase text-red-300 bg-red-500/15 px-2.5 py-1 rounded-full border border-red-500/25 backdrop-blur-sm">
            ✦ Flagship
          </span>
        )}
        <div className="relative rounded-t-lg overflow-hidden border border-white/10 border-b-0 bg-[#0d0d0d] shadow-2xl translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#161616]/90 border-b border-white/5">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
            <div className="ml-3 h-3.5 flex-1 max-w-[120px] rounded-full bg-white/5" />
          </div>
          <div className="aspect-[16/10] overflow-hidden">
            {p.video ? (
              <ProjectVideo src={p.video} poster={p.cover} title={p.title} />
            ) : p.cover ? (
              <img
                src={p.cover}
                alt={`${p.title} — live site preview`}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <DashboardMock variant={p.variant} />
            )}
          </div>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between gap-3 mb-1.5">
          <h3 className="text-lg font-black text-white tracking-tight truncate">{p.title}</h3>
          {p.live ? (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.title}`}
              className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          ) : (
            <span
              aria-label="Live demo coming soon"
              title="Demo coming soon"
              className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/30 cursor-not-allowed"
            >
              <ArrowUpRightIcon className="w-4 h-4" />
            </span>
          )}
        </div>
        <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-bold">
            {p.category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-bold">
            {p.tags.join(' · ')}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] pt-28 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <Wave top fill="fill-white" />
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />
            for itself
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of projects that show how I blend premium design with modern engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="mt-16 flex justify-center">
          <a
            href="https://www.instagram.com/roy.devstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 md:gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-white/20 text-white font-bold text-sm md:text-lg whitespace-nowrap hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <InstagramIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span className="md:hidden">More on Instagram</span>
            <span className="hidden md:inline">See More Work on Instagram</span>
            <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
