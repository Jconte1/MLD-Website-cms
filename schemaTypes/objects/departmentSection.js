// schemas/objects/departmentSection.js
export default {
  name: 'departmentSection',
  title: 'Department Section',
  type: 'object',
  fields: [
    {
      name: 'sectionId',
      title: 'Section ID (for anchors & nav)',
      type: 'string',
      description: 'Used in the URL as #sectionId and should match Team Nav items (e.g. "executive", "salt-lake").',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'departmentName',
      title: 'Department Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'teams',
      title: 'Teams in this Department',
      type: 'array',
      of: [{ type: 'teamGroup' }],
    },
  ],
  preview: {
    select: {
      title: 'departmentName',
      id: 'sectionId',
    },
    prepare(selection) {
      const { title, id } = selection;
      return {
        title: title || 'Department',
        subtitle: id ? `#${id}` : 'No sectionId set',
      };
    },
  },
};
