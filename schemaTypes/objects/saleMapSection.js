export default {
  name: 'saleMapSection',
  title: 'Map Section',
  type: 'object',
  fields: [
    {
      name: 'enabled',
      title: 'Show Section',
      type: 'boolean',
      initialValue: true,
    },
    { name: 'title', title: 'Section Title', type: 'string' },
    { name: 'venueName', title: 'Venue Name', type: 'string' },
    {
      name: 'addressLines',
      title: 'Address Lines',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'mapUrl',
      title: 'Map URL',
      type: 'url',
      description: 'Google Maps link or other public map URL.',
    },
    {
      name: 'mapEmbed',
      title: 'Map Iframe Embed HTML',
      type: 'text',
      description: 'Optional iframe embed code. If set, frontend can prioritize this.',
    },
  ],
};
