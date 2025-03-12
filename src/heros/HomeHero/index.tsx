import React from 'react'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import Squares from '@/components/Squares/Squares'
import './styles.scss'

export const HomeHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="relative py-20 lg:py-32">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-16 sm:gap-32 pointer-events-none z-10 relative">
        {media && typeof media === 'object' && (
          <div className="w-full flex-1 relative before:content-[''] before:absolute before:w-full before:h-full before:-right-3 before:-bottom-3 before:bg-foreground">
            <Media
              className="w-full aspect-[4/5] relative overflow-hidden"
              imgClassName="object-cover object-[--hero-image-position]"
              fill
              priority
              resource={media}
              loading="eager"
            />
          </div>
        )}
        <div className="flex-1 flex flex-col gap-10 pointer-events-none">
          {richText && <RichText className="[&_h2]:mt-4" data={richText} enableGutter={false} />}

          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4 items-center pointer-events-auto">
              {links.map(({ link }, i) => {
                return (
                  <li key={i} className="w-full sm:w-auto">
                    <CMSLink
                      {...link}
                      className={`w-full sm:w-auto ${link.appearance === 'outline' ? 'bg-background' : ''}`}
                    />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Squares
          speed={0.5}
          squareSize={60}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#999"
        />
      </div>
    </div>
  )
}
