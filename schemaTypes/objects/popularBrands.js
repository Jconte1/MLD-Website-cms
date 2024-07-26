export default {
    name: 'popularBrands',
    type: 'object',
    title: 'Popular Brands',
    fields: [
      {
        name: 'popBrands',
        type: 'array',
        title: 'Popular Brands',
        of: [{ type: 'brand' }],
      },
      { name: 'offeringName', type: 'string', title: 'Offering Name' },
    ],
  };
  