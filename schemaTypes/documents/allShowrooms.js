// schemas/allShowrooms.js
export default {
  name: 'allShowrooms',
  type: 'document',
  title: 'All Showrooms',
  fields: [
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Main Title'
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Main Sub Title'
    },
    {
      name: 'pillars',
      type: 'array',
      title: 'Pillars',
      of: [{ type: 'pillar' }]
    }
  ]
};
