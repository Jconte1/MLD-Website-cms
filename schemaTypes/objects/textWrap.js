export default {
  name: 'textWrap',
  type: 'object',
  title: 'Text Wrap',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'preImageParagraph', type: 'text', title: 'Pre-Image Paragraph' },
    { name: 'postImageParagraph1', type: 'text', title: 'Post-Image Paragraph 1' },
    { name: 'postImageParagraph2', type: 'text', title: 'Post-Image Paragraph 2' },
    { name: 'postImageParagraph3', type: 'text', title: 'Post-Image Paragraph 3' },
    { name: 'postImageParagraph4', type: 'text', title: 'Post-Image Paragraph 4' },
    { 
      name: 'imageUrl',
      type: 'image',
      title: 'Image URL',
      options: {
        hotspot: true
      }
    },
    { name: 'imageAlt', type: 'string', title: 'Image Alt Text' }
  ]
};
