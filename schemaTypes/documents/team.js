export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Team Name'
    },
    {
      name: 'departments',
      type: 'array',
      title: 'Departments',
      of: [{ type: 'reference', to: [{ type: 'department' }] }]
    }
  ]
}