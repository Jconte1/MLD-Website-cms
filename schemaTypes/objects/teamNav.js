// schemas/objects/teamNav.js
export default {
  name: 'teamNav',
  title: 'Team - One Page Navigation',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          name: 'navItem',
          title: 'Nav Item',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'sectionId',
              title: 'Section ID (anchor)',
              type: 'string',
              description: 'Used for the #section-id in the URL (e.g. "executive", "salt-lake-team").',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'sectionId',
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Team Navigation',
      };
    },
  },
};
