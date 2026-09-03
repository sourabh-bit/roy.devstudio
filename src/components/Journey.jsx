import Wave from './Wave'

// Dark timeline section — same glowing-dot timeline as the reference,
// telling the Roy Dev Studio story. TODO: edit milestones to match your journey.
const milestones = [
  {
    badge: 'Foundation',
    title: 'Started as a Developer',
    role: 'Learning the craft',
    desc: 'Began building web projects and mastering the fundamentals — HTML, CSS, JavaScript, and the discipline of shipping.',
  },
  {
    badge: 'Craft',
    title: 'Mastered the Modern Stack',
    role: 'React · Next.js · Tailwind',
    desc: 'Went deep into the modern frontend ecosystem — component architecture, animations, and performance-first builds.',
  },
  {
    badge: 'Launch',
    title: 'Founded Roy Dev Studio',
    role: 'Founder & Designer',
    desc: 'Turned the craft into a studio with one mission: premium websites for brands that refuse to look average.',
  },
  {
    badge: 'Clients',
    title: 'First Client Projects Delivered',
    role: 'Design + Development',
    desc: 'Shipped real websites for real businesses — beauty studios, fitness brands, and education platforms.',
  },
  {
    badge: 'Now',
    title: 'Growing the Studio',
    role: '@roy.devstudio',
    desc: 'Sharing the craft on Instagram and taking on select projects with brands that want to stand out online.',
  },
]

export default function Journey() {
  return (
    <section className="bg-[#0a0a0a] pt-28 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <Wave top fill="fill-[#ff2a2a]" />

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            The Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">Building Roy Dev Studio</h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            From writing the first line of code to running a design-led web studio.
          </p>
        </div>

        <div className="relative w-full">
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          <div className="w-full">
            {milestones.map((m, i) => {
              const left = i % 2 === 0
              return (
                <div key={m.title} className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 w-full group">
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ff2a2a] rounded-full border-4 border-black z-30 shadow-[0_0_15px_#ff2a2a] group-hover:scale-125 transition-transform duration-300" />

                  <div
                    data-aos={left ? 'fade-right' : 'fade-left'}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${left ? 'md:text-right md:order-1' : 'md:order-2'}`}
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_15px_35px_rgba(255,42,42,0.1)] transition-all duration-500">
                      <div className={`flex flex-wrap gap-2 items-center mb-3 ${left ? 'md:justify-end' : ''}`}>
                        <span className="bg-[#ff2a2a]/20 text-[#ff2a2a] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#ff2a2a]/30">
                          {m.badge}
                        </span>
                      </div>
                      <h3 className="text-white text-xl font-black mb-1 tracking-tight group-hover:text-[#ff2a2a] transition-colors">
                        {m.title}
                      </h3>
                      <p className="text-red-400 text-xs font-bold font-mono tracking-wider uppercase mb-4">{m.role}</p>
                      <p className="text-white/60 text-sm leading-relaxed font-medium">{m.desc}</p>
                    </div>
                  </div>
                  <div className={`hidden md:block w-[45%] ${left ? 'order-2' : 'order-1'}`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
