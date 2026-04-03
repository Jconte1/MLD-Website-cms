export default {
  name: 'saleSpecialsSection',
  title: 'Sale Specials Section',
  type: 'object',
  fields: [
    {
      name: 'enabled',
      title: 'Show Section',
      type: 'boolean',
      initialValue: true,
    },
    { name: 'title', title: 'Section Title', type: 'string' },
    {
      name: 'items',
      title: 'Special Items',
      type: 'array',
      of: [{ type: 'saleSpecialItem' }],
    },
  ],
};
