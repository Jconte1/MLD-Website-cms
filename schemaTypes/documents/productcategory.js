// /schemas/productcategory.js
export default {
    name: 'productcategory',
    title: 'Product Category',
    type: 'document',
    fields: [
      {
        name: 'categoryId',
        title: 'Category ID (URL param)',
        type: 'string',
        validation: Rule => Rule.required(),
        description: 'Must match the [category] value in your URL, like "appliances".'
      },
      {
        name: 'tiles',
        title: 'Tile Sections',
        type: 'array',
        of: [{ type: 'tileSection' }]
      }, 
    
    ]
  };
  