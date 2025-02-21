export default {
    name: 'paragraph',
    title: 'Paragraph Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Optional heading for the paragraph section.'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
        description: 'Main text content for the section.'
      }
    ],
    preview: {
      select: {
        title: 'title',
        content: 'content'
      },
      prepare(selection) {
        const { title, content } = selection;
        return {
          title: title || 'Paragraph Section',
          subtitle: content ? content.substring(0, 50) + '...' : 'No content'
        };
      }
    }
  };
  