'use client'
import { cn } from '@/utilities/ui'

import Link from 'next/link'
import React from 'react'

import type { Post, Category, Project } from '@/payload-types'

import { Media } from '@/components/Media'
import { Button } from '../ui/button'
import { ExternalLink } from 'lucide-react'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>
export type CardProjectData = Pick<
  Project,
  'slug' | 'categories' | 'meta' | 'title' | 'featuredImage' | 'shortDescription' | 'link'
>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData | CardProjectData
  relationTo?: 'posts' | 'projects'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { className, doc, relationTo, title: titleFromProps } = props
  const { slug, categories, title } = doc || {}

  const titleToUse = titleFromProps || title
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn(
        'border-4 border-foreground overflow-hidden bg-background flex flex-col',
        className,
      )}
    >
      {/* @ts-expect-error featuredImage is present if type is Project */}
      {doc?.featuredImage && (
        <div className="relative w-full ">
          {/* @ts-expect-error featuredImage is present if type is Project */}
          {doc.featuredImage && typeof doc.featuredImage !== 'string' && (
            <Media
              /* @ts-expect-error featuredImage is present if type is Project */
              resource={doc.featuredImage}
              size="33vw"
              className="relative aspect-square overflow-hidden"
              imgClassName="absolute top-0 left-0 w-full h-full object-cover"
            />
          )}
        </div>
      )}

      <div className="p-4 flex flex-col gap-4 flex-1">
        {titleToUse && (
          <div className="prose">
            <h3 className="text-foreground font-bold text-2xl">{titleToUse}</h3>
          </div>
        )}
        <div className="flex gap-2 mb-4">
          {categories &&
            categories.map((category, index) => (
              <Media
                key={index}
                resource={(category as Category).icon || undefined}
                className="w-8 h-8 rounded-full overflow-hidden"
                imgClassName="object-cover w-full h-full "
              />
            ))}
        </div>
        {/* @ts-expect-error shortDescription is present if type is Project */}
        {doc?.shortDescription && (
          <div className="mb-4">
            {/* @ts-expect-error shortDescription is present if type is Project */}
            <p className="text-foreground/80">{doc.shortDescription}</p>
          </div>
        )}

        <Button
          className="bg-background  border-[3px] border-foreground text-foreground relative before:content-[''] before:absolute before:-left-[3px] before:top-full before:h-[6px] before:w-[calc(100%+6px)] before:transition-all before:bg-foreground hover:before:h-[3px] hover:bg-background z-10 hover:translate-y-[3px] transition-transform mt-auto"
          asChild
        >
          {relationTo === 'projects' && (doc as CardProjectData).link ? (
            <Link
              href={(doc as CardProjectData).link || ''}
              className="relative z-10 flex items-center gap-2 font-bold"
              target="_blank"
            >
              <ExternalLink /> Live Site
            </Link>
          ) : (
            <Link href={href} className="relative z-10">
              Live Site
            </Link>
          )}
        </Button>
      </div>
    </article>
  )
}
