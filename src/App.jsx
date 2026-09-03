import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Preloader from './components/Preloader'
import Nav from './components/Nav'
import WhatsAppFloat from './components/WhatsAppFloat'
import Hero from './components/Hero'
import About from './components/About'
import Process from './components/Process'
import Projects from './components/Projects'
import Services from './components/Services'
import Journey from './components/Journey'
import Promise from './components/Promise'
import WhyMe from './components/WhyMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      startEvent: 'DOMContentLoaded',
      disable: false,
    })
    // recalculate trigger positions once everything (fonts, images) is in
    const onLoad = () => AOS.refreshHard()
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  useEffect(() => {
    if (!loading) AOS.refreshHard()
  }, [loading])

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <Nav />
      <WhatsAppFloat />
      <main>
        <Hero />
        <About />
        <Process />
        <Projects />
        <Services />
        <Journey />
        <Promise />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
