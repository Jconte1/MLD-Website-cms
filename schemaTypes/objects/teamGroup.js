// schemas/objects/teamGroup.js
export default {
  name: 'teamGroup',
  title: 'Team (within Department)',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Team Name',
      type: 'string',
      
    },
    {
      name: 'subtitle',
      title: 'Team Subtitle',
      type: 'string',
    },
    {
      name: 'employees',
      title: 'Employees',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'employee' }], // assumes you have an `employee` document type
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      count: 'employees.length',
    },
    prepare(selection) {
      const { title, count } = selection;
      return {
        title: title || 'Team',
        subtitle: count ? `${count} employee(s)` : 'No employees yet',
      };
    },
  },
};
