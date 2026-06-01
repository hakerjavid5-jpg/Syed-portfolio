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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ae4596228571099.68551b7f9e2b0.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/834a22228571099.68551b7f9da56.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/979efa228571099.68551b7f9c427.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7d4781228571099.68551b7f9c99e.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a93c55228571099.68551b7f9d077.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c54251228571099.68551b7f9a859.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/dfb6bc228571099.68551b7f9b578.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ec5121228571099.68551b7f9bc8e.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/152597228571099.68551b7f9d55c.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/58efcc228571099.68551b7f9b023.png',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f57486187992009.6594f7cbb5fb5.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7632a5187992009.6594f7cbba166.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e63c4c187992009.6594f7cbb535e.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f68277187992009.6594f7cbb2803.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/07f615187992009.6594f7cbb1ba9.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b53430187992009.6594f7cbb93d3.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1210ff187992009.6594f7cbbd9e0.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6ee80f187992009.6594f7cbb87b1.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8b6c56187992009.6594f7cbb6f35.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8cee36187992009.6594f7cbbcdac.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/50a44b187992009.6594f7cbbbf88.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/de7404187992009.6594f7cbb0d31.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/10058a187992009.6594f7cbbb321.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ff0917187992009.6594f7cbb7b6d.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c45d28187992009.6594f7cbb3820.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0b3857187992009.6594f7cbb46c2.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/03d65c114100757.603503487bc7e.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/449958114100757.603503487c2c3.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6dda36114100757.603503487b472.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/10b298113687701.602cfe52d33c5.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/dc7951113687701.602cfe52d21c3.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c57acc113687701.602cfe52d2f58.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8e2523113687701.602cfe52d3851.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/47fb41113687701.602cfe52d289b.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/76349d113089897.602139cf99e30.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d573a1113089897.602139cf98ab8.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5e2651113089897.602139cf99627.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5145e6113089897.602139cf9812e.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e3d43d113089897.602139cf990c1.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/projects/max_808/1e93a2180848345.Y3JvcCwyNzYxLDIxNjAsNTEyLDA.jpg',
      'https://mir-s3-cdn-cf.behance.net/projects/404/1e93a2180848345.Y3JvcCwyNzYxLDIxNjAsNTEyLDA.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/55b551112834789.601bd94d47eff.jpg',
      'https://mir-s3-cdn-cf.behance.net/projects/404/3061e9112834789.Y3JvcCwxMzUwLDEwNTYsMTUxNyw3OTI.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d8ffb4112776265.601ac6df4c9e8.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/909cf6112776265.601ac6df4e9ff.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3d0ede112776265.601ac6df4feb9.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b95a7f112776265.601ac6df4d1d5.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/075881112776265.601ac6df4e4c0.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/15a14a112776265.601ac6df4dd65.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9b296a112776265.601ac6df4d7c3.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c6cb72112776265.601ac6df4f743.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6181d2112776265.601ac6df4f151.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/80f13e112597251.6017dac7925dc.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/311a41112597251.6017dac790fda.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/673264112597251.6017dac791d40.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/dc4950112597251.6017dac7916cf.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bdbc4a105635283.5f7d850015d77.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/08e0a1105635283.5f7d850012582.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a1873d105635283.5f7d85001644a.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2ec952105635283.5f7d850012bbc.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6ea15e105635283.5f7d850016864.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b912f4105635283.5f7d85001326f.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b6c5c2105635283.5f7d850016cf6.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/80ba7e105635283.5f7d850013754.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/55a6b387250683.5db1f06ed4f26.jpg',
      'https://mir-s3-cdn-cf.behance.net/projects/404/a5342887250683.Y3JvcCwyNzkzLDIxODUsMTA1MSwzMzE.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2fd21d87250491.5db1ef43d959a.png',
      'https://mir-s3-cdn-cf.behance.net/projects/404/a01d7187250491.Y3JvcCwxMzgwLDEwODAsMCww.png',
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
