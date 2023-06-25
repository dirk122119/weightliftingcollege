import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: '作者',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'igUrl',
      title: 'IG',
      type: 'url',
    }),
    defineField({
      name: 'fbUrl',
      title: 'FB',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
      name: 'skill',
      title: '專長',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'experience',
      title: '經歷',
      type: 'array',
      of: [{type: 'reference', to: {type: 'experience'}}],
    }),
    defineField({
      name: 'license',
      title: '證照',
      type: 'array',
      of: [{type: 'reference', to: {type: 'license'}}],
    }),
    defineField({
      name: 'prize',
      title: '獲得獎項',
      type: 'array',
      of: [{type: 'reference', to: {type: 'prize'}}],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
