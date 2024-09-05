export default {
  name: 'textWrap',
  type: 'object',
  title: 'Text Wrap',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    { name: 'imageAlt', type: 'string', title: 'Image Alt Text' },
    
  ],
};
