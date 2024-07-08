import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gridGallery',
  type: 'object',
  title: 'Grid Gallery',
  fields: [
    defineField({ name: 'galleryTitle', type: 'string', title: 'Gallery Title' }),
    defineField({ name: 'galleryDescription', type: 'text', title: 'Gallery Description' }),
    defineField({ name: 'button1', type: 'string', title: 'Button 1 Text' }),
    defineField({ name: 'button2', type: 'string', title: 'Button 2 Text' }),
    defineField({ name: 'button3', type: 'string', title: 'Button 3 Text' }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Gallery Images'
    })
  ]
});