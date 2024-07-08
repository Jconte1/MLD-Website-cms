import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image'
    }),
    defineField({
      name: 'heroText',
      type: 'string',
      title: 'Hero Text'
    }),
    defineField({
      name: 'introduction',
      type: 'text',
      title: 'Introduction'
    }),
    defineField({
      name: 'featureSectionTitle',
      type: 'string',
      title: 'Feature Section Title'
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Features'
    }),
    defineField({
      name: 'ctaTitle',
      type: 'string',
      title: 'Call to Action Title'
    }),
    defineField({
      name: 'ctaButtonText',
      type: 'string',
      title: 'Call to Action Button Text'
    }),
    defineField({
      name: 'ctaButtonLink',
      type: 'url',
      title: 'Call to Action Button Link'
    })
  ]
});