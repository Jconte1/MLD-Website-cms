export default {
    name: 'address',
    title: 'Address',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Location Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'lines',
        title: 'Address Lines',
        type: 'array',
        of: [{ type: 'string' }],
        validation: Rule => Rule.required().min(1),
      },
      {
        name: 'url',
        title: 'Google Maps URL',
        type: 'url',
        validation: Rule => Rule.uri({ scheme: ['http', 'https'] }),
      },
    ],
  };
  