import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'productname',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'productname',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'variants',
      },
    }),
    defineField({
      title: 'On campaign?',
      name: 'campaign',
      type: 'boolean',
    }),
    defineField({
      name: 'campaignprice',
      title: 'Campaign price',
      type: 'number',
    }),
  ],
})
