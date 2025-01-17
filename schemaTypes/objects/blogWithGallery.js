export default {
  name: 'blogWithGallery',
  type: 'object',
  title: 'Blog With Gallery',
  fields: [
    {
      name: 'preImageParagraphs',
      title: 'Pre-Image Paragraph',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'postImageParagraphs',
      title: 'Post-Image Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    },
  ],
  preview: {
    select: {
      media: 'images.0',
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: 'Blog with Photo Gallery',
        media: media || undefined,
      };
    },
  },
};