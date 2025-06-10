// /schemas/tileSection.js
export default {
    name: 'tileSection',
    title: 'Tile Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'tiles',
        title: 'Tiles',
        type: 'array',
        of: [{ type: 'tile' }],
        validation: Rule => Rule.min(1).error('At least one tile is required.')
      },
     
    ]
  };
  