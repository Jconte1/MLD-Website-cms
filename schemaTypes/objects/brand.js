export default {
    name: 'brand',
    type: 'object',
    title: 'Brand',
    fields: [
      { name: 'id', type: 'string', title: 'ID' },
      { name: 'brand', type: 'string', title: 'Brand Name' },
      { name: 'url', type: 'url', title: 'URL' },
      { name: 'image', type: 'image', title: 'Background Image' },
      { name: 'logo', type: 'image', title: 'Logo Image' },
    ],
  };