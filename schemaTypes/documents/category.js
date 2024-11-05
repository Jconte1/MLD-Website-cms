export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings'
    },
    {
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};