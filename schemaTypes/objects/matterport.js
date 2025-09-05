// /schemas/matterport.js
export default {
  name: 'matterport',
  type: 'object',
  title: '3D Tour Model',
  fields: [
    {
      name: 'src',
      type: 'url',
      title: 'Matterport Embed URL',
      description:
        'Paste the full Matterport share link (e.g. https://my.matterport.com/show/?m=MODELID)',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).required(),
    },
  ],
  preview: {
    select: {
      src: 'src',
    },
    prepare({ src }) {
      return {
        title: 'Matterport Tour',
        subtitle: src || 'No URL set',
      };
    },
  },
};
