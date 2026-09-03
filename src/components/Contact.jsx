import { useState } from 'react'
import { InstagramIcon, ArrowRightIcon } from './icons'
import Wave from './Wave'

// Giant background wordmark + red form panel, matching the reference layout.
export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const update = (e) => {
    let { name, value } = e.target
    // phone: digits only (with an optional leading +), max 15 digits
    if (name === 'phone') value = value.replace(/(?!^\+)[^\d]/g, '').slice(0, value.startsWith('+') ? 16 : 15)
    setForm({ ...form, [name]: value })
  }

  // Opens WhatsApp with the enquiry pre-typed to the studio number —
  // the visitor just taps send once.
  const submit = (e) => {
    e.preventDefault()
    const lines = [
      'New Project Enquiry — Roy Dev Studio',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      '',
      'Message:',
      form.message,
    ].filter((l) => l !== null)
    window.open(`https://wa.me/918920135102?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
  }

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex flex-col justify-end pt-28 pb-0 border-t border-gray-900"
    >
      <Wave top fill="fill-white" />
      {/* giant wordmark — full letters visible, baseline resting on the red panel */}
      <div className="w-full flex justify-center pointer-events-none select-none px-2">
        <h1
          className="text-[21vw] leading-none font-black text-white uppercase tracking-tighter whitespace-nowrap"
          style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
        >
          Contact
        </h1>
      </div>

      <div className="relative z-10 w-full flex justify-end items-end -mt-[3vw]">
        <div data-aos="fade-up" className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-6 md:p-16 text-white flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
            <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">Reach Me</div>
            <a
              href="https://www.instagram.com/roy.devstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white/10 hover:bg-white hover:text-red-600 border border-white/20 px-4 py-2 rounded-full transition-all duration-300"
            >
              <InstagramIcon className="w-4 h-4" />
              DM on Instagram
            </a>
          </div>

          <form onSubmit={submit} className="flex flex-col gap-8 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full">
              <div className="flex-1 flex flex-col gap-7 md:gap-10">
                <div className="relative">
                  <input
                    placeholder="Name *"
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={update}
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    placeholder="Phone Number *"
                    required
                    type="tel"
                    inputMode="numeric"
                    name="phone"
                    pattern="\+?[0-9]{10,15}"
                    title="Please enter a valid phone number (10–15 digits)"
                    value={form.phone}
                    onChange={update}
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    placeholder="Email (optional)"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea
                    name="message"
                    placeholder="Tell me about your project"
                    required
                    value={form.message}
                    onChange={update}
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-2 md:mt-4">
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input
                  id="permission"
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent cursor-pointer"
                  style={{ accentColor: 'white' }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I agree to be contacted about my enquiry on WhatsApp.
                </label>
              </div>
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  Hitting send opens WhatsApp with your message ready to go — one tap and it's in my chat. I usually
                  reply within a few hours.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For quick enquiries, reach me at{' '}
                    <a href="mailto:roysourabh9881@gmail.com" className="underline hover:text-white transition-colors">
                      roysourabh9881@gmail.com
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 group whitespace-nowrap self-start sm:self-auto hover:bg-white hover:text-[#ff2a2a]"
                  >
                    Send Message
                    <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
