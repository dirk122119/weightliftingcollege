import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prize',
  title: '獲得獎項',
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
