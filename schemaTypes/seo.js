import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'The title of the page, which will appear in the browser tab and search engine results.',
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      description: 'A brief description of the page content, which will appear in search engine results.',
      validation: Rule => Rule.max(160).warning('Meta descriptions are usually better when under 160 characters.'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'A set of keywords relevant to the page content for SEO purposes.',
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'The image that will be displayed when the page is shared on social media platforms.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the image, used for accessibility and SEO.',
        }),
      ],
    }),
  ],
});