export default {
    name: 'blogWithGallery',
    type: 'object',
    title: 'Blog with Gallery',
    fields: [
      { name: 'preImageParagraph', type: 'string', title: 'Pre-Image Paragraph' },
      { name: 'image1', type: 'image', title: 'Image 1' },
      { name: 'image2', type: 'image', title: 'Image 2' },
      { name: 'image3', type: 'image', title: 'Image 3' },
      { name: 'postImageParagraph1', type: 'string', title: 'Post-Image Paragraph 1' },
      { name: 'postImageParagraph2', type: 'string', title: 'Post-Image Paragraph 2' }
    ]
  };