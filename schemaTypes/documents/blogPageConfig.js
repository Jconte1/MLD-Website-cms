export default {
    name: 'blogPageConfig',
    title: 'Blog Page Configuration',
    type: 'document',
    fields: [
      {
        name: 'simpleIntro2',
        title: 'Simple Intro',
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'backgroundImage', title: 'Background Image', type: 'image' },
          { name: 'author', title: 'Author', type: 'string' },
          { name: 'datePublished', title: 'Date Published', type: 'datetime' },
        ],
      },
      {
        name: 'searchBar',
        title: 'Search Bar',
        type: 'object',
        fields: [
          { name: 'placeholderText', title: 'Placeholder Text', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
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
  