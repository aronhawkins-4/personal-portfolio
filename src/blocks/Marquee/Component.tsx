import React from 'react'
import type { MarqueeBlock as MarqueeBlockProps } from '@/payload-types'
import ScrollVelocity from '@/components/ScrollVelocity/ScrollVelocity'

export const MarqueeBlock: React.FC<MarqueeBlockProps> = (props) => {
  const { title } = props

  return (
    <div className="w-full py-6 bg-foreground/10">
      <ScrollVelocity texts={[title, title]} className="text-foreground/85" velocity={50} />
    </div>
  )
}
