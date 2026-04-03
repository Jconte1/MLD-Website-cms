export default {
  name: 'saleSettings',
  title: 'Sale Settings',
  type: 'document',
  fields: [
    {
      name: 'activeEvent',
      title: 'Active Sale Event',
      type: 'reference',
      to: [{ type: 'saleEvent' }],
      validation: (Rule) => Rule.required(),
      description: 'This event is used for /sale redirect.',
    },
  ],
};
