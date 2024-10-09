export default {
    name: 'department',
    type: 'document',
    title: 'Department',
    fields: [
      {
        name: 'departmentName',
        type: 'string',
        title: 'Department Name',
      },
      {
        name: 'order',
        type: 'number',
        title: 'Order',
        description: 'Set the order in which departments appear.',
      },
      {
        name: 'team',
        type: 'string', 
        title: 'Team',
        options: {
          list: [
            { title: 'Executives', value: 'executive' },
            { title: 'Salt Lake', value: 'salt-lake' },
            { title: 'Provo', value: 'provo' },
            { title: 'Boise', value: 'boise' },
            { title: 'Sun Valley', value: 'sun-valley' },
            { title: 'Jackson', value: 'jackson' },
          ],
        },
      },
      {
        name: 'employees',
        type: 'array',
        title: 'Employees',
        of: [{ type: 'reference', to: [{ type: 'employee' }] }],
      },
    ],
  };
  