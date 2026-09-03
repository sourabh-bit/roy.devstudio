import Wave from './Wave'
import {
  MessageIcon,
  ClockIcon,
  TargetIcon,
  LayersIcon,
  PaletteIcon,
  ZapIcon,
  WalletIcon,
  SproutIcon,
} from './icons'

// White section — Swiss-editorial feature grid: hairline borders, mono indices,
// stroke icons. Premium and quiet, no emoji.
const traits = [
  { Icon: MessageIcon, title: 'Clear Communication', desc: 'Plain language, quick replies, and honest updates at every stage of your project.' },
  { Icon: ClockIcon, title: 'On-Time Delivery', desc: 'Clear timelines agreed upfront — and websites that actually launch when promised.' },
  { Icon: TargetIcon, title: 'Conversion Focus', desc: 'Every section is placed with purpose: turning your visitors into enquiries and sales.' },
  { Icon: LayersIcon, title: 'Strategy First', desc: 'Design decisions backed by your business goals, your customers, and your market.' },
  { Icon: PaletteIcon, title: 'Design Eye', desc: 'Premium typography, spacing, and motion that make your brand feel expensive.' },
  { Icon: ZapIcon, title: 'Fast Iterations', desc: 'Feedback turned around quickly — no waiting weeks to see your changes live.' },
  { Icon: WalletIcon, title: 'Transparent Pricing', desc: 'Clear packages and no surprise costs. You always know what you are paying for.' },
  { Icon: SproutIcon, title: 'Long-Term Support', desc: 'Launch is the beginning. Updates, fixes, and improvements whenever you need them.' },
]

export default function WhyMe() {
  return (
    <section className="bg-white pt-28 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      <Wave top fill="fill-[#ff2a2a]" />

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#ff2a2a] font-mono text-xs font-bold tracking-[0.3em] uppercase">Working With Me</span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.05] max-w-xl">
              What clients
              <br />
              can expect
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-sm leading-relaxed font-medium md:text-right">
              The standards behind every project — the reason clients stay after launch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200">
          {traits.map((t, i) => (
            <div
              key={t.title}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 80}
              className="group relative border-r border-b border-gray-200 bg-white p-8 min-h-[240px] flex flex-col justify-between transition-colors duration-500 hover:bg-[#0a0a0a]"
            >
              <div className="flex items-start justify-between">
                <t.Icon className="w-6 h-6 text-gray-900 transition-colors duration-500 group-hover:text-[#ff2a2a]" />
                <span className="font-mono text-xs font-bold text-gray-300 transition-colors duration-500 group-hover:text-white/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3 className="text-gray-900 text-base font-black tracking-tight mb-2 uppercase transition-colors duration-500 group-hover:text-white">
                  {t.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed transition-colors duration-500 group-hover:text-white/60">
                  {t.desc}
                </p>
              </div>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff2a2a] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
