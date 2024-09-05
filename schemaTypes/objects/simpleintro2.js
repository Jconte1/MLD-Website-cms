export default {
  name: 'simpleIntro2',
  type: 'object',
  title: 'Simple Intro 2',
  fields: [
    { name: 'backgroundImage', type: 'image', title: 'Background Image' },
    { name: 'title', type: 'string', title: 'Title' },
    {
      name: 'description', title: 'Description', type: 'array',
      of: [{ type: 'block' }],
    },
    { name: 'author', type: 'string', title: 'Author' },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' },
    { name: 'overlayImage', type: 'image', title: 'Overlay Image' }
  ]
};
