export default {
  name: 'simpleIntro2',
  title: 'Simple Intro 2',
  type: 'object',

  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'design', title: 'Design' },
  ],

  fields: [
    // CONTENT
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      description: 'The large banner image shown behind the title.',
      options: { hotspot: true },
      group: 'content',
    },
    {
      name: 'title',
      type: 'string',
      title: 'H1 Title',
      description: 'The big headline at the top.',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Short paragraph under the banner (can include links).',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      description: 'Who wrote this post.',
      group: 'content',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      description: 'When this was published.',
      group: 'content',
    },

    // DESIGN
    {
      name: 'position',
      type: 'string',
      title: 'Title Position',
      description: 'Where the headline sits on the banner.',
      group: 'design',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'center',
    },
    {
      name: 'titleColor',
      type: 'string',
      title: 'Headline Color',
      description: 'Type a color (e.g., “white” or “#ffffff”).',
      group: 'design',
      initialValue: 'rgb(24, 23, 23)',
    },
    {
      name: 'metaColor',
      type: 'string',
      title: 'Author/Date Color',
      description: 'Type a color (e.g., “black” or “#000000”).',
      group: 'design',
      initialValue: 'rgb(24, 23, 23)',
    },
    {
      name: 'overviewColor',
      type: 'string',
      title: 'Overview Text Color',
      description: 'Type a color (e.g., “#333333” or “darkgray”).',
      group: 'design',
      initialValue: 'rgb(24, 23, 23)',
    },
    {
      name: 'overlayColor',
      type: 'string',
      title: 'Overlay Tint Color',
      description:
        'The colored tint over the banner image (e.g., “black”, “#000000”, or “rgba(0,0,0,0.6)”).',
      group: 'design',
      initialValue: '#000000',
    },
    {
      name: 'overlayOpacity',
      type: 'number',
      title: 'Overlay Strength',
      description: 'How strong the tint is: 0 = see-through, 1 = solid.',
      group: 'design',
      options: { range: { min: 0, max: 1, step: 0.05 } },
      initialValue: 0.4,
      validation: (Rule) => Rule.min(0).max(1),
    },
  ],

  preview: {
    select: { title: 'title', media: 'backgroundImage', subtitle: 'author' },
    prepare({ title, media, subtitle }) {
      return {
        title: title || 'Simple Intro 2',
        subtitle: subtitle ? `Author: ${subtitle}` : 'Simple Intro section',
        media,
      };
    },
  },
};
