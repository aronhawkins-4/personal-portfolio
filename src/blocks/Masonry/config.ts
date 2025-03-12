import type { Block } from 'payload'

export const MasonryBlock: Block = {
  slug: 'masonryBlock',
  interfaceName: 'MasonryBlock',
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'height',
          type: 'number',
          required: true,
        },
      ],
      minRows: 1,
      required: true,
    },
  ],
}
