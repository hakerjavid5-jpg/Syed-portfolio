'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  as?: 'div' | 'nav' | 'section' | 'span' | 'p' | 'h1' | 'h2' | 'h3'
}

const motionComponents: Record<string, ReturnType<typeof motion.create>> = {
  div: motion.div,
  nav: motion.nav,
  section: motion.section,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
}: FadeInProps) {
  const Component = motionComponents[as] || motion.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  )
}
