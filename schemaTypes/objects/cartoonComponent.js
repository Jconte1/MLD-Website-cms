export default {
  name: 'cartoonComponent',
  title: 'Cartoon Component',
  type: 'object',
  fields: [
    {
      name: 'cartoonTitle',
      title: 'Cartoon Title',
      type: 'string',
      validation: Rule => Rule.required().error('Cartoon title is required'),
    },
    {
      name: 'cartoonDescription',
      title: 'Cartoon Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'A description or introduction to the cartoon section',
    },
    {
      name: 'cartoons',
      title: 'Cartoons',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Cartoon',
          fields: [
            {
              name: 'pic',
              title: 'Cartoon Image',
              type: 'image',
              options: { hotspot: true },
              validation: Rule => Rule.required().error('Cartoon image is required'),
            },
            {
              name: 'title',
              title: 'Cartoon Title',
              type: 'string',
              validation: Rule => Rule.required().max(100).error('Cartoon title is required and cannot exceed 100 characters'),
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'url',
              validation: Rule => Rule.required().uri({
                scheme: ['http', 'https'],
                allowRelative: true,
              }).error('Valid URL is required'),
            },
            {
              name: 'show',
              title: 'Show Cartoon',
              type: 'boolean',
              description: 'Toggle to show or hide this cartoon',
              validation: Rule => Rule.required().error('Visibility toggle is required'),
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'pic',
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title,
                media,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'cartoonTitle',
    },
  },
};