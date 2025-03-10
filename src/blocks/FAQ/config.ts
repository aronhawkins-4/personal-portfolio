import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'
import { AdvancedFields } from '@/fields/advanced'

const FAQFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'content',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          UnorderedListFeature(),
        ]
      },
    }),
    label: false,
    required: true,
  },
]

export const FAQ: Block = {
  slug: 'faq',
  fields: [
    {
      name: 'faqs',
      type: 'array',
      fields: FAQFields,
    },
    AdvancedFields,
  ],
  interfaceName: 'FAQBlock',
}
