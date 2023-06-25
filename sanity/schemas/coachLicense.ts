import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'license',
  title: '證照',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
