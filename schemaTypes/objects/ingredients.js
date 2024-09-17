export default {
    name: 'ingredients',
    title: 'Ingredients',
    type: 'object',
    fields: [
      {
        name: 'ingredients',
        title: 'Ingredients List',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'quantity', type: 'string', title: 'Quantity' },
              { name: 'unit', type: 'string', title: 'Unit' },
              { name: 'description', type: 'string', title: 'Description' }
            ]
          }
        ]
      }
    ]
  }
  