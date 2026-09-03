import { InstagramIcon, MailIcon, WhatsAppIcon } from './icons'
import Wave from './Wave'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] pt-28 pb-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] relative overflow-hidden">
      <Wave top fill="fill-[#0a0a0a]" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Web Design &amp; Development</p>
          <p>React · Next.js · Tailwind CSS</p>
          <p>Premium Websites for Brands</p>
        </div>
        <div className="flex flex-col gap-1 md:items-center">
          <p>Roy Dev Studio · India</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">
            View Work
          </a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for new projects</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="relative z-10 w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[13vw] md:text-[11vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center whitespace-nowrap">
          roy dev studio
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">
            Contact
          </a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            © {new Date().getFullYear()} Roy Dev Studio | Built with React
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-center">
          <a
            href="mailto:roysourabh9881@gmail.com"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase"
          >
            roysourabh9881@gmail.com
          </a>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.instagram.com/roy.devstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:roysourabh9881@gmail.com"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918920135102"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a
            href="https://www.instagram.com/roy.devstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
