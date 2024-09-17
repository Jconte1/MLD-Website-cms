export default {
    name: 'filterComponent',
    title: 'Filter Component',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title for the filter section',
      },
      {
        name: 'subTitle',
        title: 'Subtitle',
        type: 'string',
        description: 'The subtitle for the filter section',
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'category' }], 
          },
        ],
        description: 'The list of categories for filtering blog posts',
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'subTitle',
        categoryCount: 'categories.length', // Count of categories selected
      },
      prepare(selection) {
        const { title, subtitle, categoryCount } = selection;
        return {
          title: title || 'Filter Component',
          subtitle: `${subtitle || ''} - ${categoryCount} categories`,
        };
      },
    },
  };
  