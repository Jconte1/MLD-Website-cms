export default {
  name: 'saleInfoSection',
  title: 'Info Section',
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
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    { name: 'ctaText', title: 'CTA Text', type: 'string' },
    { name: 'ctaHref', title: 'CTA URL (optional)', type: 'url' },
  ],
};
