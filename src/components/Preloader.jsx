import { useEffect, useState } from 'react'

// Red splash screen with the studio name reveal, then slides away.
export default function Preloader({ onDone }) {
  const [leaving, setLeaving] = useState(false)
  const name = 'Roy Dev Studio'

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1400)
    const t2 = setTimeout(onDone, 2000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#ff2a2a] flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        leaving ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight whitespace-nowrap">
        {name.split('').map((ch, i) => (
          <span key={i} className="loader-letter" style={{ animationDelay: `${0.15 + i * 0.045}s` }}>
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
        <span className="loader-letter text-black" style={{ animationDelay: `${0.15 + name.length * 0.045}s` }}>
          .
        </span>
      </h1>
    </div>
  )
}
