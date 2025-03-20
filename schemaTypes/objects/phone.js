export default {
    name: 'phone',
    title: 'Phone',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Phone Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'number',
        title: 'Phone Number (Display)',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'tel',
        title: 'Tel Link (Digits Only, With Country Code)',
        type: 'string',
        description: 'Example: +18779343453',
        validation: Rule => Rule.required(),
      },
      {
        name: 'note',
        title: 'Note (Optional)',
        type: 'string',
      },
    ],
  };
  