// schemas/allShowrooms.js
export default {
    name: 'allOfferings',
    type: 'document',
    title: 'All offerings',
    fields: [
      {
        name: 'seo',
        type: 'seo',
        title: 'SEO Settings'
      },
      {
        name: 'mainTitle',
        type: 'string',
        title: 'Main Title'
      },
      {
        name: 'pillars',
        type: 'array',
        title: 'Pillars',
        of: [{ type: 'pillar' }]
      }
    ]
  };
  