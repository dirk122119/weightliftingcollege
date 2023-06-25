import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: '專長',
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
