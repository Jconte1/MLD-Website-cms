import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featuresComponent',
  type: 'object',
  title: 'Features Component',
  fields: [
    defineField({
      name: 'appVid',
      type: 'file',  // Video URL
      title: 'Video URL',
      hidden: ({ parent }) => !!parent?.appImage // Hide if image is provided
    }),
    defineField({
      name: 'appImage',
      type: 'image', // Image asset
      title: 'Image',
      hidden: ({ parent }) => !!parent?.appVid // Hide if video is provided
    }),
    defineField({ name: 'appFeatTitle', type: 'string', title: 'Title' }),
    defineField({ name: 'appDescription', type: 'text', title: 'Description' }),

    defineField({
      name: 'plumbVid',
      type: 'file',  // Video URL
      title: 'Video URL',
      hidden: ({ parent }) => !!parent?.plumbImage // Hide if image is provided
    }),
    defineField({
      name: 'plumbImage',
      type: 'image', // Image asset
      title: 'Image',
      hidden: ({ parent }) => !!parent?.plumbVid // Hide if video is provided
    }),
    defineField({ name: 'plumbFeatTitle', type: 'string', title: 'Title' }),
    defineField({ name: 'plumbDescription', type: 'text', title: 'Description' }),

    defineField({
      name: 'hardVid',
      type: 'file',  // Video URL
      title: 'Video URL',
      hidden: ({ parent }) => !!parent?.hardImage // Hide if image is provided
    }),
    defineField({
      name: 'hardImage',
      type: 'image', // Image asset
      title: 'Image',
      hidden: ({ parent }) => !!parent?.hardVid // Hide if video is provided
    }),
    defineField({ name: 'hardFeatTitle', type: 'string', title: 'Title' }),
    defineField({ name: 'hardDescription', type: 'text', title: 'Description' }),
  ]
});
