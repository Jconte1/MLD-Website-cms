import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'tile',
  title: 'Tile',
  type: 'object',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      hidden: true, // Hide from the content team
    },
    {
      name: 'title',
      title: 'Tile Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'href',
      title: 'Link URL',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  initialValue: () => ({
    id: uuidv4()
  })
};
