export default {
  name: 'saleInstagramSection',
  title: 'Instagram Section',
  type: 'object',
  fields: [
    {
      name: 'enabled',
      title: 'Show Section',
      type: 'boolean',
      initialValue: true,
    },
    { name: 'title', title: 'Section Title', type: 'string' },
    { name: 'body', title: 'Body', type: 'text' },
    { name: 'handleText', title: 'Handle Text', type: 'string' },
    { name: 'instagramUrl', title: 'Instagram URL', type: 'url' },
    { name: 'image', title: 'Image (optional)', type: 'image', options: { hotspot: true } },
  ],
};
