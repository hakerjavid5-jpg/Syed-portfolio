'use client'

import FadeIn from '@/components/FadeIn'
import Magnet from '@/components/Magnet'
import ContactButton from '@/components/ContactButton'

const navLinks = ['About', 'Services', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative" style={{ background: '#0C0C0C' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m syed
        </h1>
      </FadeIn>

      {/* Hero Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Syed Musthaak Portrait"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a senior graphic designer &amp; brand specialist elevating ideas through creativity
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
