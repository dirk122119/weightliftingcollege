import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: '經歷',
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
