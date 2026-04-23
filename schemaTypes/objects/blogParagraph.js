export default {
    name: 'blogParagraph',
    title: 'Paragraph',
    type: 'object',
    fields: [
      {
        name: 'blogParagraphs',
        title: 'Paragraphs',
        type: 'array',
        of: [
          {
            type: 'block',
            marks: {
              decorators: [
                { title: 'Bold', value: 'strong' },
                { title: 'Italic', value: 'em' },
                { title: 'Underline', value: 'underline' },
              ],
              annotations: [
                {
                  title: 'Link',
                  name: 'link',
                  type: 'object',
                  fields: [
                    {
                      title: 'URL',
                      name: 'href',
                      type: 'url',
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
    preview: {
      prepare() {
        return {
          title: 'Paragraphs Section',
        };
      },
    },
  };
  
