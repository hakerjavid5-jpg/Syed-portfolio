'use client'

import { useRef, useState, useEffect } from 'react'

const row1Projects = [
  {
    src: '/images/projects/thumbnails/thumb-01.png',
    name: 'LogoFolio 2025',
  },
  {
    src: '/images/projects/thumbnails/thumb-02.jpg',
    name: 'Portfolio 2024',
  },
  {
    src: '/images/projects/thumbnails/thumb-03.jpg',
    name: 'Poster Effects',
  },
  {
    src: '/images/projects/thumbnails/thumb-04.jpg',
    name: 'Popup Ads',
  },
  {
    src: '/images/projects/thumbnails/thumb-05.jpg',
    name: "Happy Valentin's Cards",
  },
]

const row2Projects = [
  {
    src: '/images/projects/thumbnails/thumb-06.jpg',
    name: 'Naughty Valentine Stickers',
  },
  {
    src: '/images/projects/thumbnails/thumb-07.jpg',
    name: 'Geometric Elements',
  },
  {
    src: '/images/projects/thumbnails/thumb-08.jpg',
    name: 'Instagram Post Templates',
  },
  {
    src: '/images/projects/thumbnails/thumb-09.jpg',
    name: 'Avengers Keychain Design',
  },
  {
    src: '/images/projects/thumbnails/thumb-10.png',
    name: 'Ball Z VPN',
  },
]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.offsetTop
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(scrollOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tripledRow1 = [...row1Projects, ...row1Projects, ...row1Projects]
  const tripledRow2 = [...row2Projects, ...row2Projects, ...row2Projects]

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 md:pt-40 pb-10" style={{ background: '#0C0C0C' }}>
      {/* Row 1 - Projects 1-5 - moves right */}
      <div
        className="flex gap-3 will-change-transform mb-3"
        style={{ transform: `translateX(${offset - 200}px)` }}
      >
        {tripledRow1.map((item, i) => (
          <img
            key={`r1-${i}`}
            src={item.src}
            alt={`${item.name} - Behance Project`}
            className="w-[220px] h-[150px] sm:w-[260px] sm:h-[170px] md:w-[300px] md:h-[195px] rounded-xl object-cover flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>

      {/* Row 2 - Projects 6-10 - moves left */}
      <div
        className="flex gap-3 will-change-transform"
        style={{ transform: `translateX(-${offset - 200}px)` }}
      >
        {tripledRow2.map((item, i) => (
          <img
            key={`r2-${i}`}
            src={item.src}
            alt={`${item.name} - Behance Project`}
            className="w-[220px] h-[150px] sm:w-[260px] sm:h-[170px] md:w-[300px] md:h-[195px] rounded-xl object-cover flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
