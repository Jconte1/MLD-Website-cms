export default {
  name: 'saleVideoSection',
  title: 'Video Section',
  type: 'object',
  fields: [
    {
      name: 'enabled',
      title: 'Show Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'title',
      title: 'Section Title (Optional)',
      type: 'string',
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
      description: 'Paste a YouTube URL like https://www.youtube.com/watch?v=... or https://youtu.be/...',
    },
  ],
};

