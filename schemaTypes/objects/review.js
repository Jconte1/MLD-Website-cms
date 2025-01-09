export default {
    name: 'review',
    type: 'object',
    title: 'Reviews Section',
    fields: [
      {
        name: 'row1',
        type: 'array',
        title: 'Row 1 Reviews',
        description: 'Reviews to display in the first marquee row.',
        of: [
          {
            type: 'object',
            title: 'Review',
            fields: [
              {
                name: 'stars',
                type: 'string',
                title: 'Star Rating',
                options: {
                  list: [
                    { title: '5 Stars', value: '/images/5stars.png' },
                    { title: '4 Stars', value: '/images/4stars.png' },
                  ],
                },
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'altText',
                type: 'string',
                title: 'Image Alt Text',
                description: 'Text description for the star image.',
              },
              {
                name: 'date',
                type: 'string',
                title: 'Date',
                description: 'The date the review was given.',
              },
              {
                name: 'review',
                type: 'text',
                title: 'Review',
                description: 'The review text. Limit 590 characters.',
                validation: (Rule) =>
                  Rule.max(590).warning('The review must be 590 characters or fewer.'),
              },
            ],
            preview: {
              select: {
                stars: 'stars',
                date: 'date',
                review: 'review',
              },
              prepare(selection) {
                const { stars, date, review } = selection;
                return {
                  title: review ? review.substring(0, 50) + '...' : 'No review provided',
                  subtitle: date || 'No date provided',
                  media: stars ? { _type: 'image', asset: { url: stars } } : undefined,
                };
              },
            },
          },
        ],
      },
      {
        name: 'row2',
        type: 'array',
        title: 'Row 2 Reviews',
        description: 'Reviews to display in the second marquee row.',
        of: [
          {
            type: 'object',
            title: 'Review',
            fields: [
              {
                name: 'stars',
                type: 'string',
                title: 'Star Rating',
                options: {
                  list: [
                    { title: '5 Stars', value: '/images/5stars.png' },
                    { title: '4 Stars', value: '/images/4stars.png' },
                  ],
                },
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'altText',
                type: 'string',
                title: 'Image Alt Text',
                description: 'Text description for the star image.',
              },
              {
                name: 'date',
                type: 'string',
                title: 'Date',
                description: 'The date the review was given.',
              },
              {
                name: 'review',
                type: 'text',
                title: 'Review',
                description: 'The review text. Limit 590 characters.',
                validation: (Rule) =>
                  Rule.max(590).warning('The review must be 590 characters or fewer.'),
              },
            ],
            preview: {
              select: {
                stars: 'stars',
                date: 'date',
                review: 'review',
              },
              prepare(selection) {
                const { stars, date, review } = selection;
                return {
                  title: review ? review.substring(0, 50) + '...' : 'No review provided',
                  subtitle: date || 'No date provided',
                  media: stars ? { _type: 'image', asset: { url: stars } } : undefined,
                };
              },
            },
          },
        ],
      },
    ],
  };
  