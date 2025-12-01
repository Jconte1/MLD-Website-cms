// schemas/objects/employee.js

export default{
  name: 'employee',
  title: 'Employee Grid',
  type: 'object',
  fields: [
    {
      name: 'employees',
      title: 'Employees',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'team' }] }],
      description: 'Select team members to show in this grid.',
    },
  ],
  preview: {
    select: {
      count: 'employees.length',
    },
    prepare({ count }) {
      return {
        title: 'Employee Grid',
        subtitle: `${count || 0} members`,
      };
    },
  },
};
