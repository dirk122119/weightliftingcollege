import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoDir',
  title: '影片資料夾',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: '摘要',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: '封面圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'relatedVideos',
      title: '相關影片',
      type: 'array',
      of: [{type: 'reference', to: {type: 'video'}}],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'videoCategory'}}],
    }),
    defineField({
      name: 'hashTags',
      title: 'HashTags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'videoHashTag'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
