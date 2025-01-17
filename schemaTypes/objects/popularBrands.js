export default {
  name: 'popBrands',
  title: 'Popular Brands',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'subTitle', title: 'Sub Title', type: 'string' },
    {
      name: 'popBrands',
      title: 'Popular Brands List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'brand', title: 'Brand Name', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'url', title: 'Brand URL', type: 'url', validation: (Rule) => Rule.required() },
            { name: 'image', title: 'Brand Image', type: 'image' },
            { name: 'logo', title: 'Brand Logo', type: 'image' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || 'Popular Brands Section',
      };
    },
  },
};
