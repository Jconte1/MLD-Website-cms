export default {
  name: 'showroomSlider',
  title: 'Showroom',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'subTitle', title: 'Sub Title', type: 'string' },
    { name: 'description', title: 'Section Description', type: 'text' },
    {
      name: 'showrooms',
      title: 'Showrooms',
      type: 'array', // ✅ This must be an array
      of: [{ type: 'showroom' }], // ✅ Correct reference to your `showroomItem`
    },
    { name: 'button', title: 'Button Text', type: 'string' },
    { name: 'url', title: 'Button URL', type: 'url', validation: (Rule) => Rule.required() },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || 'Showroom Slider Section',
      };
    },
  },
};
