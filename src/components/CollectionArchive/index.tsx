import { cn } from '@/utilities/ui'
import React from 'react'

import { Card } from '@/components/Card'
import { Post, Project } from '@/payload-types'

export type Props = {
  archive: Post[] | Project[]
  relationTo: 'posts' | 'projects'
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { archive, relationTo } = props

  return (
    <div className={cn('container')}>
      <div className="relative">
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {archive?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Card className="h-full" doc={result} relationTo={relationTo} showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
