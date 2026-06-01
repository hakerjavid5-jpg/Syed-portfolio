'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from '@/components/LiveProjectButton'

interface Project {
  number: string
  name: string
  category: string
  description: string[]
  images: string[] // Flexible array of real project images
  behanceUrl: string
}

const projects: Project[] = [
  {
    number: '01',
    name: 'LogoFolio 2025',
    category: 'Branding — Logo Design',
    description: [
      'A comprehensive logo design collection showcasing versatile brand identities crafted for diverse industries.',
      'Each logo reflects a unique brand story, combining typography, color theory, and visual symbolism.',
      'Delivered print-ready and digital-optimized assets for seamless brand application across all mediums.',
    ],
    images: [
      '/images/projects/01/1.png',
      '/images/projects/01/2.png',
      '/images/projects/01/3.png',
      '/images/projects/01/4.png',
      '/images/projects/01/5.png',
      '/images/projects/01/6.png',
      '/images/projects/01/7.png',
      '/images/projects/01/8.png',
      '/images/projects/01/9.png',
      '/images/projects/01/10.png',
    ],
    behanceUrl: 'https://www.behance.net/gallery/228571099/LogoFolio-2025',
  },
  {
    number: '02',
    name: 'Portfolio 2024',
    category: 'Creative — Annual Showcase',
    description: [
      'An annual creative portfolio showcasing the best design work from 2024 across multiple disciplines.',
      'Features branding, print media, social media campaigns, and UI/UX design projects.',
      'Demonstrates versatility in adapting design strategies for distinct client requirements.',
    ],
    images: [
      '/images/projects/02/1.jpg',
      '/images/projects/02/2.jpg',
      '/images/projects/02/3.jpg',
      '/images/projects/02/4.jpg',
      '/images/projects/02/5.jpg',
      '/images/projects/02/6.jpg',
      '/images/projects/02/7.jpg',
      '/images/projects/02/8.jpg',
      '/images/projects/02/9.jpg',
      '/images/projects/02/10.jpg',
      '/images/projects/02/11.jpg',
      '/images/projects/02/12.jpg',
      '/images/projects/02/13.jpg',
      '/images/projects/02/14.jpg',
      '/images/projects/02/15.jpg',
      '/images/projects/02/16.jpg',
    ],
    behanceUrl: 'https://www.behance.net/gallery/187992009/Portfolio-2024',
  },
  {
    number: '03',
    name: 'Poster Effects',
    category: 'Print — Creative Design',
    description: [
      'Experimental poster designs pushing creative boundaries with bold typography and striking visual effects.',
      'Combines traditional design principles with modern digital techniques for impactful print media.',
      'Each piece tells a visual story through carefully crafted compositions and color palettes.',
    ],
    images: [
      '/images/projects/03/1.jpg',
      '/images/projects/03/2.jpg',
      '/images/projects/03/3.jpg',
    ],
    behanceUrl: 'https://www.behance.net/gallery/114100757/POSTER-EFFECTS',
  },
  {
    number: '04',
    name: 'Popup Ads',
    category: 'Digital — Advertising',
    description: [
      'Eye-catching digital popup advertisements designed to maximize click-through rates and engagement.',
      'Strategic use of color, typography, and layout to create compelling calls-to-action.',
      'Optimized for various digital platforms and screen sizes for maximum reach.',
    ],
    images: [
      '/images/projects/04/1.jpg',
      '/images/projects/04/2.jpg',
      '/images/projects/04/3.jpg',
      '/images/projects/04/4.jpg',
      '/images/projects/04/5.jpg',
    ],
    behanceUrl: 'https://www.behance.net/gallery/113687701/Popup-Ads',
  },
  {
    number: '05',
    name: "Happy Valentin's Cards",
    category: 'Social — Greeting Design',
    description: [
      "Beautifully crafted Valentine's Day card designs blending romance with modern aesthetics.",
      'Features hand-drawn illustrations, elegant typography, and warm color palettes.',
      'Designed for both digital sharing and high-quality print production.',
    ],
    images: [
      '/images/projects/05/1.jpg',
      '/images/projects/05/2.jpg',
      '/images/projects/05/3.jpg',
      '/images/projects/05/4.jpg',
      '/images/projects/05/5.jpg',
    ],
    behanceUrl: 'https://www.behance.net/gallery/113089897/Happy-Valentins-Cards',
  },
  {
    number: '06',
    name: 'Naughty Valentine Stickers',
    category: 'Social — Sticker Pack',
    description: [
      "A fun and playful sticker pack designed for Valentine's Day with cheeky and creative illustrations.",
      'Custom illustrated characters and elements optimized for messaging platforms.',
      'Vibrant colors and expressive designs that bring personality to digital conversations.',
    ],
    images: [
      '/images/projects/06/1.jpg',
      '/images/projects/06/2.jpg',
    ],
    behanceUrl: 'https://www.behance.net/gallery/112893785/Sticker-pack-for-Naughty-Valentine',
  },
  {
    number: '07',
    name: 'Geometric Elements',
    category: 'Design — Illustration',
    description: [
      'A collection of geometric design elements showcasing precision and artistic symmetry.',
      'Created using mathematical patterns and geometric shapes for modern visual compositions.',
      'Versatile assets suitable for branding, packaging, web design, and decorative applications.',
    ],
    images: [
      '/images/projects/07/1.jpg',
    ],
    behanceUrl: 'https://www.behance.net/gallery/112834789/Geomtric-elements',
  },
  {
    number: '08',
    name: 'Instagram Post Templates',
    category: 'Social Media — Templates',
    description: [
      'Professionally designed Instagram post and story templates for consistent brand presence.',
      'Fully editable PSD templates with organized layers and smart object placeholders.',
      'Optimized for engagement with strategic layout composition and trending aesthetics.',
    ],
    images: [
      '/images/projects/08/1.jpg',
      '/images/projects/08/2.jpg',
      '/images/projects/08/3.jpg',
      '/images/projects/08/4.jpg',
      '/images/projects/08/5.jpg',
      '/images/projects/08/6.jpg',
      '/images/projects/08/7.jpg',
      '/images/projects/08/8.jpg',
      '/images/projects/08/9.jpg',
    ],
    behanceUrl: 'https://www.behance.net/gallery/112776265/Instagram-Post-Templates',
  },
  {
    number: '09',
    name: 'Avengers Keychain Design',
    category: 'Merchandise — Product Design',
    description: [
      'Custom Avengers-themed keychain designs featuring iconic superhero emblems and color schemes.',
      'Detailed vector illustrations optimized for laser engraving and 3D printing production.',
      'Appeals to pop culture enthusiasts with authentic character representation.',
    ],
    images: [
      '/images/projects/09/1.jpg',
      '/images/projects/09/2.jpg',
      '/images/projects/09/3.jpg',
      '/images/projects/09/4.jpg',
    ],
    behanceUrl: 'https://www.behance.net/gallery/112597251/AVENGERS-SUP-KEYCHAIN-DESIGN',
  },
  {
    number: '10',
    name: 'Ball Z VPN',
    category: 'UI — App Design',
    description: [
      'A Dragon Ball Z inspired VPN application interface combining anime aesthetics with functional design.',
      'Features custom illustrations, dynamic UI elements, and an intuitive user experience flow.',
      'Designed with dark mode interface and vibrant accent colors for immersive engagement.',
    ],
    images: [
      '/images/projects/10/1.jpg',
      '/images/projects/10/2.jpg',
      '/images/projects/10/3.jpg',
      '/images/projects/10/4.jpg',
      '/images/projects/10/5.jpg',
      '/images/projects/10/6.jpg',
      '/images/projects/10/7.jpg',
      '/images/projects/10/8.jpg',
    ],
    behanceUrl: 'https://www.behance.net/gallery/105635283/Ball-Z-VPN',
  },
  {
    number: '11',
    name: 'Pikachu UI',
    category: 'UI — App Design',
    description: [
      'A Pokémon-inspired UI design featuring Pikachu-themed elements for a playful mobile experience.',
      'Combines cute character illustrations with clean interface design and intuitive navigation.',
      'Vibrant color palette and custom icon set create an engaging and memorable user experience.',
    ],
    images: [
      '/images/projects/11/1.jpg',
    ],
    behanceUrl: 'https://www.behance.net/gallery/87250683/Pikachu-UI',
  },
  {
    number: '12',
    name: 'Superdry Tees UI',
    category: 'UI — App Design',
    description: [
      'A Superdry-branded t-shirt shopping app UI with a clean, modern e-commerce experience.',
      'Features product catalog, detailed views, and streamlined checkout flow design.',
      'Combines fashion-forward aesthetics with intuitive navigation for seamless shopping.',
    ],
    images: [
      '/images/projects/12/1.png',
    ],
    behanceUrl: 'https://www.behance.net/gallery/87250491/Superdry-Tees-UI',
  },
]

const totalCards = projects.length

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.015
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  const imgCount = project.images.length

  // Dynamic image layout based on number of images
  const renderImages = () => {
    if (imgCount >= 5) {
      // Many images: show featured grid with 3 main images + scroll indicator
      return (
        <div className="flex gap-3 sm:gap-4">
          {/* Left Column - 40% */}
          <div className="flex flex-col gap-3 sm:gap-4 w-[40%]">
            <img
              src={project.images[0]}
              alt={`${project.name} - Image 1`}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] object-cover"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              loading="lazy"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} - Image 2`}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] object-cover"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              loading="lazy"
            />
          </div>
          {/* Right Column - 60% */}
          <div className="w-[60%] relative">
            <img
              src={project.images[2]}
              alt={`${project.name} - Image 3`}
              className="w-full h-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] object-cover"
              loading="lazy"
            />
            {imgCount > 3 && (
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs sm:text-sm px-3 py-1.5 rounded-full">
                +{imgCount - 3} more
              </div>
            )}
          </div>
        </div>
      )
    } else if (imgCount === 4) {
      // 4 images: 2x2 grid
      return (
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {project.images.slice(0, 4).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.name} - Image ${i + 1}`}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] object-cover"
              style={{ height: 'clamp(140px, 19vw, 280px)' }}
              loading="lazy"
            />
          ))}
        </div>
      )
    } else if (imgCount === 3) {
      // 3 images: left 2 stacked, right 1 large
      return (
        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4 w-[40%]">
            <img
              src={project.images[0]}
              alt={`${project.name} - Image 1`}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] object-cover"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              loading="lazy"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} - Image 2`}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] object-cover"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              loading="lazy"
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.images[2]}
              alt={`${project.name} - Image 3`}
              className="w-full h-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )
    } else if (imgCount === 2) {
      // 2 images: side by side
      return (
        <div className="flex gap-3 sm:gap-4">
          <div className="w-1/2">
            <img
              src={project.images[0]}
              alt={`${project.name} - Image 1`}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] object-cover"
              style={{ height: 'clamp(200px, 28vw, 450px)' }}
              loading="lazy"
            />
          </div>
          <div className="w-1/2">
            <img
              src={project.images[1]}
              alt={`${project.name} - Image 2`}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] object-cover"
              style={{ height: 'clamp(200px, 28vw, 450px)' }}
              loading="lazy"
            />
          </div>
        </div>
      )
    } else {
      // 1 image: full width
      return (
        <div>
          <img
            src={project.images[0]}
            alt={`${project.name} - Image 1`}
            className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] object-cover"
            style={{ height: 'clamp(250px, 35vw, 550px)' }}
            loading="lazy"
          />
        </div>
      )
    }
  }

  return (
    <div ref={containerRef} className="h-[85vh]">
      <motion.div
        className="sticky rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
        style={{
          background: '#0C0C0C',
          scale,
          top: `calc(6rem + ${index * 18}px)`,
        }}
      >
        {/* Top Row */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-[#D7E2EA] font-medium uppercase text-sm sm:text-base md:text-lg opacity-60">
              {project.category}
            </span>
            <span
              className="text-[#D7E2EA] font-medium uppercase"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
            >
              {project.name}
            </span>
          </div>
          <div className="ml-auto">
            <LiveProjectButton href={project.behanceUrl} />
          </div>
        </div>

        {/* Image Grid - Dynamic Layout */}
        {renderImages()}
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-5 sm:px-8 md:px-10 py-20 relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: '#0C0C0C' }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
