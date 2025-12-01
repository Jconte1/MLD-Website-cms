export default{
  name: 'team',
  title: 'Team Heading',
  type: 'object',
  fields: [
    {
      name: 'teamTitle',
      title: 'Team Title',
      type: 'string',
      
    },
  ],
  preview: {
    select: {
      title: 'teamTitle',
    },
    prepare({ title }) {
      return {
        title: title || 'Team',
      };
    },
  },
};
