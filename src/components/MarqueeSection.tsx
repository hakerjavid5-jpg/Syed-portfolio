'use client'

import { useRef, useState, useEffect } from 'react'

const row1Projects = [
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/404/b7c283228571099.Y3JvcCw1NzUzLDQ1MDAsMTEyNSww.png',
    name: 'LogoFolio 2025',
  },
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/404/b7059a187992009.Y3JvcCw5MDI1LDcwNTksMCw3Mzc.jpg',
    name: 'Portfolio 2024',
  },
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/404/b3eab5114100757.Y3JvcCwyNTUwLDE5OTQsMCwyNzE.jpg',
    name: 'Poster Effects',
  },
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/404/07519c113687701.Y3JvcCwxNzU4LDEzNzUsMTY3MSww.jpg',
    name: 'Popup Ads',
  },
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/404/15c5ef113089897.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg',
    name: "Happy Valentin's Cards",
  },
]

const row2Projects = [
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/1e93a2180848345.Y3JvcCwyNzYxLDIxNjAsNTEyLDA.jpg',
    name: 'Naughty Valentine Stickers',
  },
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/404/3061e9112834789.Y3JvcCwxMzUwLDEwNTYsMTUxNyw3OTI.jpg',
    name: 'Geometric Elements',
  },
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/404/8988a2112776265.Y3JvcCwzMjYxLDI1NTEsNDY4LDA.jpg',
    name: 'Instagram Post Templates',
  },
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/404/93e261112597251.Y3JvcCw0MjIwLDMzMDAsNDM4LDA.jpg',
    name: 'Avengers Keychain Design',
  },
  {
    src: 'https://mir-s3-cdn-cf.behance.net/projects/404/c4282d105635283.5f7d84ffa88a5.png',
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
