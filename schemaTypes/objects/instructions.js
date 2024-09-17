export default {
    name: 'instructions', 
    title: 'Instructions',
    type: 'object',
    fields: [
      {
        name: 'instructions',
        title: 'Instructions',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };
  