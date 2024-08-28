export default {
  title: 'Rich Text and Markdown',
  name: 'richTextAndMarkdown',
  type: 'document',
  fields: [
    {
      title: 'Rich Text',
      name: 'richText',
      type: 'array',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
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
        {
          type: 'customImage',
        },
      ],
    },
    {
      title: 'Markdown Content',
      name: 'markdownContent',
      type: 'markdown',
      description: 'A Github flavored markdown field with image uploading',
    },
  ],
};