export default {
    name: 'emails',
    title: 'Email',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Email Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'emails',
        title: 'Email Address',
        type: 'string',
        validation: Rule => Rule.required().email(),
      },
    ],
  };
  