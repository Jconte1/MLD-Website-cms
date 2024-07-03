import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Pages',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Showrooms', value: 'showrooms' },
          { title: 'Offerings', value: 'offerings' },
          { title: 'We Are MLD', value: 'We-Are-MLD' },
          { title: 'News & Events', value: 'News-and-Events' },
          { title: 'Home', value: 'Homepage' },
        ],
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [{ type: 'seo' }],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'showroomVideoComponent' },
        // Add other component types here
      ],
    }),
  ],
});
