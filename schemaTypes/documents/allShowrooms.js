import { defineField, defineType } from 'sanity';

export default {
  name: 'allShowrooms',
  type: 'document',
  title: 'All Showrooms',
  fields: [
    {
      name: 'showrooms',
      type: 'array',
      of: [{ type: 'showroom' }],
      title: 'Showrooms'
    },
  ],
};