import type { Block } from 'payload'

export const MarqueeBlock: Block = {
  slug: 'marqueeBlock',
  interfaceName: 'MarqueeBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
