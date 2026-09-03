import Wave from './Wave'
import {
  SparkleIcon,
  ArrowRightIcon,
  ZapIcon,
  SmartphoneIcon,
  SearchIcon,
  PaletteIcon,
  ShieldIcon,
  UsersIcon,
} from './icons'

// Red section — refined glass cards with stroke-icon tiles.
const promises = [
  { Icon: ZapIcon, title: 'Lightning-Fast Loading', sub: 'Performance' },
  { Icon: SmartphoneIcon, title: 'Flawless on Every Phone', sub: 'Mobile-First' },
  { Icon: SearchIcon, title: 'SEO-Ready Structure', sub: 'Visibility' },
  { Icon: PaletteIcon, title: '100% Custom Design', sub: 'No Templates' },
  { Icon: ShieldIcon, title: 'Secure & Reliable Hosting', sub: 'Peace of Mind' },
  { Icon: UsersIcon, title: 'Support After Launch', sub: 'Partnership' },
]

export default function Promise() {
  return (
    <section className="bg-[#ff2a2a] pt-28 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <Wave top fill="fill-[#0a0a0a]" />

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <span className="inline-block font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-white/70 border border-white/25 rounded-full px-5 py-1.5 mb-6 backdrop-blur-sm">
            The Standard
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">The Studio Promise</h2>
          <p className="text-red-50 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Every website I ship comes with these standards — no exceptions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14">
          {promises.map((p, i) => (
            <div
              key={p.title}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
              className="group bg-black/25 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:bg-black/40 hover:-translate-y-1 transition-all duration-500 cursor-default"
            >
              <div className="flex items-center gap-5">
                <span className="shrink-0 w-12 h-12 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-white/40 group-hover:scale-105">
                  <p.Icon className="w-5 h-5 text-white" />
                </span>
                <div>
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-1">{p.title}</h3>
                  <p className="text-white/50 text-[11px] font-mono font-bold uppercase tracking-[0.2em]">{p.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center">
          <a
            href="#contact"
            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-bold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group"
          >
            Start Your Project
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <SparkleIcon className="w-12 h-12" />
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <SparkleIcon className="w-14 h-14" />
      </div>
    </section>
  )
}
