import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'showroom',
  title: 'Showroom',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [{ type: 'seo' }],
    }),
    // Other fields for the showroom page...
  ],
});