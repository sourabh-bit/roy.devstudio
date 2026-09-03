import { SparkleIcon, ReactLogo, NextLogo, TailwindLogo, NodeLogo, MongoDBLogo, SupabaseLogo } from './icons'

const techStack = [
  { Logo: ReactLogo, name: 'React' },
  { Logo: NextLogo, name: 'Next.js' },
  { Logo: TailwindLogo, name: 'Tailwind CSS' },
  { Logo: NodeLogo, name: 'Node.js' },
  { Logo: MongoDBLogo, name: 'MongoDB' },
  { Logo: SupabaseLogo, name: 'Supabase' },
]

// Red section with the hanging ID-badge photo card.
// Put your photo at public/profile.jpg (3:4 portrait works best).
export default function About() {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* lanyard strap */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0" />
            {/* clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
            {/* badge card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner" />
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent flex items-center justify-center">
                <img
                  alt="Sourabh Roy — Founder, Roy Dev Studio"
                  className="w-full h-full object-cover object-top"
                  src="/profile.jpg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.innerHTML =
                      '<span class="text-white/40 text-sm font-bold text-center px-6">Add your photo at<br/>public/profile.jpg</span>'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50">
            Hi, I'm <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">Sourabh Roy</span>, founder of
            Roy Dev Studio — a web design studio based in India, crafting premium, fast, and conversion-focused websites
            for brands that want to stand out.
          </p>
          <div className="flex flex-wrap items-start gap-x-6 gap-y-6 sm:gap-x-8 md:gap-x-10 mt-8 max-w-md md:max-w-none">
            {techStack.map((t, i) => (
              <div
                key={t.name}
                data-aos="zoom-in"
                data-aos-delay={300 + i * 100}
                className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              >
                <div className="flex flex-col items-center gap-2 w-14 sm:w-16 md:w-20">
                  <t.Logo className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
                  <span className="text-[10px] sm:text-xs font-bold text-white/70 uppercase tracking-wider text-center">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <SparkleIcon className="w-16 h-16" />
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <SparkleIcon className="w-20 h-20" />
      </div>
    </section>
  )
}
