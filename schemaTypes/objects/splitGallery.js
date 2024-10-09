export default {
    name: 'splitGallery',
    title: 'Split Gallery',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'subTitle',
        title: 'Subtitle',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'images',
        title: 'Gallery Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: { hotspot: true },
          },
        ],
      },
    ],
  };
  