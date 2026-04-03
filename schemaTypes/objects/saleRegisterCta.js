export default {
  name: 'saleRegisterCta',
  title: 'Register CTA Section',
  type: 'object',
  fields: [
    {
      name: 'enabled',
      title: 'Show Section',
      type: 'boolean',
      initialValue: true,
    },
    { name: 'title', title: 'Section Title', type: 'string' },
    { name: 'subtitle', title: 'Section Subtitle', type: 'text' },
    { name: 'buttonText', title: 'Button Text', type: 'string' },
  ],
};
