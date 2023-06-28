import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoCategory',
  title: '影片分類',
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
