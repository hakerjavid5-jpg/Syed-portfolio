'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedCharProps {
  char: string
  index: number
  total: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}

function AnimatedChar({ char, index, total, scrollYProgress }: AnimatedCharProps) {
  const charProgressStart = index / total
  const charProgressEnd = (index + 1) / total

  const opacity = useTransform(
    scrollYProgress,
    [charProgressStart, charProgressEnd],
    [0.2, 1]
  )

  // For space characters, render with proper width using non-breaking space
  if (char === ' ') {
    return (
      <motion.span
        style={{ opacity }}
        className="inline-block"
      >
        &nbsp;
      </motion.span>
    )
  }

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const total = text.length

  return (
    <p ref={ref} className={className} style={{ ...style, whiteSpace: 'pre-wrap' }}>
      {text.split('').map((char, index) => (
        <AnimatedChar
          key={index}
          char={char}
          index={index}
          total={total}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  )
}
