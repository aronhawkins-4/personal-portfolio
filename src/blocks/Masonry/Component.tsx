import React from 'react'

import { MasonryBlock as MasonryBlockProps, Media } from '@/payload-types'
import Masonry from '@/components/Masonry/Masonry'

export const MasonryBlock: React.FC<MasonryBlockProps> = (props) => {
  const { items } = props

  return (
    <div className="pt-20 md:pt-24 lg:pt-32">
      <div className="container">
        <Masonry
          data={items?.map((item, index) => ({
            id: index,
            image: (item.media as Media).url as string,
            height: item.height,
          }))}
        />
      </div>
    </div>
  )
}
