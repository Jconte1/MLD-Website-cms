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
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
          },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'subTitle', title: 'Subtitle', type: 'string' },
        ],
      },
    ],
  };
  