import type { Field } from 'payload'

export const AdvancedFields: Field = {
  type: 'collapsible',
  fields: [
    {
      name: 'sectionId',
      type: 'text',
    },
  ],
  label: 'Advanced Settings',
}
