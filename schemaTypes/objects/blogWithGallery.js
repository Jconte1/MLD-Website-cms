export default {
  name: 'blogWithGallery',
  type: 'object',
  title: 'Blog With Gallery',
  fields: [
    {
      name: 'preImageParagraphs',
      title: 'Pre-Image Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'postImageParagraphs',
      title: 'Post-Image Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    },
  ],
};