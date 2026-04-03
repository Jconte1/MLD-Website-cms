export default {
  name: 'saleSpecialItem',
  title: 'Special Item',
  type: 'object',
  fields: [
    { name: 'title', title: 'Item Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'discountLabel', title: 'Discount Label', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
};
