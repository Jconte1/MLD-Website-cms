export default {
    name: 'blogPageConfig',
    title: 'Blog Page Configuration',
    type: 'document',
    fields: [
      {
        name: 'simpleIntro',
        title: 'Simple Intro',
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'backgroundImage', title: 'Background Image', type: 'image' },
        ],
      },
      {
        name: 'filterComponent',
        title: 'Filter Component',
        type: 'object',
        fields: [
          {
            name: 'categories', // Changed from 'category' to 'categories'
            title: 'Categories',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'category' }], // Reference to the category schema
              },
            ],
          },
          { name: 'title', title: 'Title', type: 'string' }, // Title of the filter section
          { name: 'subTitle', title: 'Subtitle', type: 'string' }, // Subtitle for extra context
        ],
      },
    ],
  };
  