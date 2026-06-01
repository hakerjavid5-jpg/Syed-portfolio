'use client'

import FadeIn from '@/components/FadeIn'

const services = [
  {
    number: '01',
    name: 'Branding',
    description:
      'Development of brand identities, translating visions into memorable logos, color palettes, typography choices, and comprehensive brand guidelines that ensure consistent representation.',
  },
  {
    number: '02',
    name: 'Print Media',
    description:
      'Design of various print materials with meticulous attention to detail, maintaining design coherence and ensuring optimal print quality across brochures, banners, and marketing collateral.',
  },
  {
    number: '03',
    name: 'Social Media',
    description:
      'Creation of visually appealing social media posts and digital assets that drive engagement, increase followers, and support key marketing campaigns and promotions.',
  },
  {
    number: '04',
    name: 'UI & UX Design',
    description:
      'Designing clean, user-focused interfaces and experiences — from website layouts to interactive prototypes — with attention to usability, typography, and visual hierarchy.',
  },
  {
    number: '05',
    name: 'AI Video Editing',
    description:
      'Producing dynamic AI-powered videos for online platforms, elevating brand presence and driving growth in video views through cutting-edge editing techniques and visual storytelling.',
  },
  {
    number: '06',
    name: 'Photography',
    description:
      'Capturing and editing high-quality photographs with professional post-processing in Lightroom, delivering striking imagery that supports brand narratives and visual communication.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: '#FFFFFF' }}
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20}>
            <div
              className="flex items-start gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i < services.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              }}
            >
              <span
                className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-1 sm:gap-2 pt-2 md:pt-4">
                <span
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </span>
                <span
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
