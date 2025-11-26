// schemas/documents/team.js
export default {
  name: 'team',
  title: 'Team Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Our Team',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings',
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'splitGallery' },   // hero SplitGallery section
        { type: 'teamNav' },            // OnePageNav section
        { type: 'departmentSection' },  // Department → Teams → Employees
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || 'Team Page',
      };
    },
  },
};
