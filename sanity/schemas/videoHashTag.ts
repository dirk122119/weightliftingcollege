import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoHashTag',
  title: '影片hashtag',
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
