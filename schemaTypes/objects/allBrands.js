export default {
    name: 'allBrands',
    type: 'object',
    title: 'All Brands',
    fields: [
      {
        name: 'allBrands',
        type: 'array',
        title: 'All Brands',
        of: [{ type: 'brand' }],
      },
    ],
  };
  