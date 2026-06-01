'use client'

import { Mail, MapPin, Phone, Globe, ExternalLink, Heart } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'syedmusthaak20@gmail.com',
    href: 'mailto:syedmusthaak20@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7418375912',
    href: 'tel:+917418375912',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kallakurichi, Tamilnadu',
    href: 'https://maps.google.com/?q=Kallakurichi,Tamilnadu',
  },
  {
    icon: Globe,
    label: 'Blog',
    value: 'artbaypro.blogspot.com',
    href: 'https://artbaypro.blogspot.com/',
  },
]

const socialLinks = [
  {
    name: 'Behance',
    url: 'https://www.behance.net/syedmusthaak20',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/syedmusthaak',
  },
]

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-28 pb-8"
      style={{ background: '#0C0C0C' }}
    >
      {/* Top Divider */}
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D7E2EA]/30 to-transparent mb-16 sm:mb-20" />

        {/* Contact Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16 md:mb-20"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
          >
            Get in Touch
          </h2>
        </FadeIn>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mb-12 sm:mb-16">
          {contactDetails.map((detail, index) => (
            <FadeIn key={detail.label} delay={0.1 + index * 0.08} y={20}>
              <a
                href={detail.href}
                target={detail.href.startsWith('http') ? '_blank' : undefined}
                rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-colors duration-300 group"
                style={{ background: 'rgba(215, 226, 234, 0.03)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' }}
                >
                  <detail.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#D7E2EA]/50 uppercase text-xs tracking-wider font-medium mb-1">
                    {detail.label}
                  </p>
                  <p className="text-[#D7E2EA] font-medium text-sm sm:text-base truncate">
                    {detail.value}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Social Links */}
        <FadeIn delay={0.4} y={20}>
          <div className="flex justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm hover:border-[#D7E2EA]/50 hover:bg-[#D7E2EA]/5 transition-all duration-300"
              >
                {social.name}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <div className="border-t border-[#D7E2EA]/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#D7E2EA]/40 font-light text-sm sm:text-base">
              © {new Date().getFullYear()} Syed Musthaak. All rights reserved.
            </p>
            <p className="text-[#D7E2EA]/60 font-medium text-sm sm:text-base flex items-center gap-1.5">
              Made by Syed with <Heart className="w-4 h-4 text-red-500 fill-red-500 inline-block" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
