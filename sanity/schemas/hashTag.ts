import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hashTag',
  title: '文章hashtag',
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
