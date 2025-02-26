export default {
    name: 'oldBlogContent',
    title: 'Old Blog Content',
    type: 'object',
    fields: [
      {
        name: 'jsonContent',
        title: 'Blog JSON Content',
        type: 'array',
        of: [
          { type: 'simpleIntro2' },
          { type: 'blogTitle' },
          { type: 'blogParagraph' },
          { type: 'blogImage' }
        ]
      }
    ],
    preview: {
      select: {
        title: 'jsonContent[0].text'
      },
      prepare(selection) {
        const title = selection.title || 'Old Blog Content';
        return { title };
      }
    }
  }
  