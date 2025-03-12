import type { Post, ArchiveBlock as ArchiveBlockProps, Project } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionArchive } from '@/components/CollectionArchive'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    relationTo,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
    sectionId,
    enableIntroContent,
  } = props

  const limit = limitFromProps || 3

  let archive: Post[] | Project[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedPosts = await payload.find({
      collection: relationTo || 'posts',
      depth: 2,
      limit,
      ...(relationTo === 'projects'
        ? {
            sort: 'order',
          }
        : {}),
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })
    // @ts-expect-error: The type of 'docs' is not assignable to the type 'Post[] | Project[]'.
    archive = fetchedPosts.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Post[] | Project[]

      archive = filteredSelectedPosts
    }
  }

  return (
    <div
      className="relative py-20 md:py-24 lg:py-32 flex flex-col map-16 sm:gap-20"
      {...(sectionId ? { id: sectionId } : { id: `archive-block-${id}` })}
    >
      {enableIntroContent && introContent && (
        <div className="container">
          <RichText className="[&_h2]:font-bold" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionArchive archive={archive} relationTo={relationTo || 'posts'} />
      {/* <MagnetLines
        rows={9}
        columns={9}
        containerSize="10rem"
        baseAngle={0}
        lineWidth="1px"
        lineHeight="1rem"
        lineColor="#99999999"
        className="absolute top-4 left-4  -z-10"
      />
      <MagnetLines
        rows={9}
        columns={9}
        containerSize="10rem"
        baseAngle={0}
        lineWidth="1px"
        lineHeight="1rem"
        lineColor="#99999999"
        className="absolute bottom-4 right-4  -z-10"
      />
      <MagnetLines
        rows={9}
        columns={9}
        containerSize="10rem"
        baseAngle={0}
        lineWidth="1px"
        lineHeight="1rem"
        lineColor="#99999999"
        className="absolute top-4 right-4  -z-10"
      />
      <MagnetLines
        rows={9}
        columns={9}
        containerSize="10rem"
        baseAngle={0}
        lineWidth="1px"
        lineHeight=".75rem"
        lineColor="#99999999"
        className="absolute bottom-4 left-4  -z-10"
      /> */}
    </div>
  )
}
