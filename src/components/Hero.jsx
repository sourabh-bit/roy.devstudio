import { useEffect, useRef, useState } from 'react'
import { InstagramIcon, MailIcon, WhatsAppIcon, PlayIcon, PauseIcon, VolumeIcon, MuteIcon, ChevronDownIcon } from './icons'

// Fullscreen hero with background video.
// Drop your hero reel at public/hero.mp4 — until then a dark gradient shows.
//
// The video defaults to unmuted (product decision: sound matters more than
// guaranteed autoplay). Browsers hard-block unmuted autoplay until a real
// click/tap/keypress has happened on the page, so a first-time visitor's
// video will sit on frame 1 until they hit play — at which point it plays
// with sound immediately, no separate unmute step needed. Play/pause and
// mute/unmute stay two independent controls either way.
export default function Hero() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  // starts false rather than assuming autoplay succeeded — unmuted autoplay
  // is not guaranteed, and the real 'play' event (below) flips this true
  // the moment playback actually starts, whether that's immediate or on click
  const [isPlaying, setIsPlaying] = useState(false)
  // state-driven, not just an imperative video.muted = x: React re-applies the
  // JSX `muted` prop on every re-render, which would silently undo a plain
  // ref mutation the next time isPlaying (or anything else) changes.
  const [isMuted, setIsMuted] = useState(false)

  // keep the play/pause icon in sync with the video's real state, whichever
  // triggered it (manual click, or the visibility observer below)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    return () => {
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
    }
  }, [])

  // pause when the hero scrolls out of view, resume automatically when it scrolls back in.
  // If a resume gets blocked (unmuted + not a fresh gesture), it just stays
  // paused rather than being forced muted — muted is the user's call only, via
  // the mute button.
  useEffect(() => {
    const section = sectionRef.current
    const v = videoRef.current
    if (!section || !v) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.25 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const togglePlayback = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  return (
    <section ref={sectionRef} id="home" className="relative w-full h-svh overflow-hidden bg-black">
      {/* gradient fallback behind the video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-[radial-gradient(ellipse_at_top_right,#3a0d0d_0%,#0a0a0a_55%),radial-gradient(ellipse_at_bottom_left,#1a0505_0%,#0a0a0a_60%)]" />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-[65%_center] md:object-center z-0"
        onError={(e) => (e.currentTarget.style.display = 'none')}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* scrim: darkens the text side so copy stays readable over busy footage.
          On mobile this needs to be near-opaque behind the outline-style heading —
          a partial scrim lets the video's bright/red frames bleed through the
          transparent letter fill, making the stroke text flicker as the video plays. */}
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black from-15% via-black/85 via-45% to-transparent md:bg-linear-to-r md:from-black/80 md:via-black/30 md:to-transparent" />

      {/* fixed social rail */}
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        <a
          href="https://www.instagram.com/roy.devstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#ff2a2a] transition-all duration-300 transform hover:scale-125"
          aria-label="Instagram"
        >
          <InstagramIcon className="w-5 h-5" />
        </a>
        <a
          href="mailto:roysourabh9881@gmail.com"
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="Email"
        >
          <MailIcon className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/918920135102"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>
      </div>

      <div className="absolute inset-0 z-20 px-4 pb-10 sm:px-6 sm:pb-16 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <div data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-4 mb-3 sm:mb-4 lg:hidden">
            <a href="https://www.instagram.com/roy.devstudio/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#ff2a2a]" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="mailto:roysourabh9881@gmail.com" className="text-white/60 hover:text-white" aria-label="Email">
              <MailIcon className="w-5 h-5" />
            </a>
          </div>

          <h1 data-aos="fade-up" className="text-white text-[6.4vw] leading-tight tracking-normal sm:text-3xl md:text-5xl md:tracking-tight mb-3 md:mb-4 font-bold whitespace-nowrap">
            Hi, I'm Sourabh Roy, <br />
            <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:1.5px_white]">Web Designer &amp; Developer</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="hidden md:block text-white/90 text-lg font-semibold mb-8 max-w-md">
            I build premium, conversion-focused websites for brands using React, Next.js, and Tailwind CSS.
          </p>
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-row flex-wrap items-center gap-2.5 sm:gap-3 w-full">
            <a
              href="#projects"
              className="px-4 py-2.5 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              View My Work
            </a>
            <a
              href="https://wa.me/918920135102"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </a>

            {/* mobile-only: compact play/pause + mute controls sit right in the button row */}
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/50 bg-black/40 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
            >
              {isPlaying ? <PauseIcon className="w-3.5 h-3.5" /> : <PlayIcon className="w-3.5 h-3.5 ml-0.5" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/50 bg-black/40 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
            >
              {isMuted ? <MuteIcon className="w-4 h-4" /> : <VolumeIcon className="w-4 h-4" />}
            </button>

            <a
              href="https://www.instagram.com/roy.devstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-transparent border border-white/50 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4" />
              @roy.devstudio
            </a>
          </div>
        </div>

        {/* desktop-only: the larger corner play/pause indicator, plus a small mute toggle beside it */}
        <div className="hidden md:flex items-end gap-4">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/30 bg-black/20 backdrop-blur-md text-white hover:scale-110 hover:bg-[#ff2a2a] transition-all duration-300"
          >
            {isMuted ? <MuteIcon className="w-4 h-4" /> : <VolumeIcon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={togglePlayback}
            data-aos="zoom-in"
            data-aos-delay="600"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-20 h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
              {isPlaying ? (
                <PauseIcon className="w-8 h-8 text-white" />
              ) : (
                <PlayIcon className="w-8 h-8 text-white ml-1" />
              )}
            </div>
            <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              {isPlaying ? 'Pause' : 'Play Reel'}
            </span>
          </button>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="800" className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="animate-bounce">
          <ChevronDownIcon className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
        </div>
      </div>
    </section>
  )
}
