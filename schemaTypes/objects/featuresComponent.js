export default {
  name: 'featuresComponent',
  title: 'Features Component',
  type: 'object',
  fields: [
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Feature',
          fields: [
            {
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
              options: { hotspot: true },
              description: 'Optional background image for this feature',
            },
            {
              name: 'vidImg',
              title: 'Is this a video?',
              type: 'boolean',
              description: 'Check if this feature is a video.',
            },
            {
              name: 'vid',
              title: 'Video File',
              type: 'file',
              options: {
                accept: 'video/*',
              },
              hidden: ({ parent }) => !parent?.vidImg, // Show this field only if it's a video
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image', options: { hotspot: true } }],
              description: 'Array of images for this feature. Leave empty if using video.',
              hidden: ({ parent }) => parent?.vidImg, // Hide images if it's a video
              validation: Rule => Rule.custom((images, context) => {
                if (!context.parent?.vidImg && (!images || images.length === 0)) {
                  return 'At least one image is required if this is not a video.';
                }
                return true;
              })
            },
            {
              name: 'featTitle',
              title: 'Feature Title',
              type: 'string',
              validation: Rule => Rule.required().max(100).error('Feature title is required and cannot exceed 100 characters'),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: Rule => Rule.required().error('Description is required'),
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for images or videos for accessibility',
              validation: Rule => Rule.required().error('Alt text is required for accessibility'),
            },
          ],
          preview: {
            select: {
              title: 'featTitle',
              media: 'vidImg ? vid : image',
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title,
                media: media,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'features.0.FeatTitle',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: `Features: ${title}`,
      };
    },
  },
};
