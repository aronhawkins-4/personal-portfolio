'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  direction?: 'left' | 'right'
}

export const Marquee: React.FC<MarqueeProps> = ({ children, speed = 20, direction = 'left' }) => {
  const [contentWidth, setContentWidth] = useState(0)
  const [repeatCount, setRepeatCount] = useState(2)
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const singleContentWidth = contentRef.current.offsetWidth
      setContentWidth(singleContentWidth)
      if (singleContentWidth !== 0 && singleContentWidth < containerWidth) {
        const needed = Math.ceil(containerWidth / singleContentWidth) + 1
        setRepeatCount(needed)
      }
    }
  }, [children])

  useEffect(() => {
    if (contentWidth > 0) {
      const duration = contentWidth / speed
      controls.start({
        x: direction === 'left' ? -contentWidth : 0,
        transition: {
          duration,
          repeat: Infinity,
          ease: 'linear',
        },
      })
    }
  }, [contentWidth, speed, direction, controls])
  return (
    <div ref={containerRef} className="w-full m-auto overflow-hidden">
      <motion.div className="flex whitespace-nowrap w-fit" animate={controls}>
        {[...Array(repeatCount)].map((_, index) => (
          <div key={index} ref={index === 0 ? contentRef : undefined} className="inline-flex pr-6">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
