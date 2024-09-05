export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'button',
      title: 'Button Title',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          name: 'simpleIntro2', // Unique name
          title: 'Simple Intro',
          type: 'object',
          fields: [
            {
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{type: 'block'}],
            },
            {
              name: 'author',
              title: 'Author',
              type: 'string',
            },
            {
              name: 'publishedAt',
              title: 'Published At',
              type: 'datetime',
              options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today',
              },
            },
            {
              name: 'overlayImage',
              title: 'Overlay Image',
              type: 'image',
            },
          ],
        },
        {
          name: 'textWrap', // Unique name
          title: 'Text Wrap',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [{ type: 'text' }],
            },
            {
              name: 'imageUrl',
              title: 'Image URL',
              type: 'image',
            },
            {
              name: 'imageAlt',
              title: 'Image Alt Text',
              type: 'string',
            },
          ],
        },
        {
          name: 'blogWithGallery', // Unique name
          title: 'Blog With Gallery',
          type: 'object',
          fields: [
            {
              name: 'preImageParagraphs',
              title: 'Pre-Image Paragraph',
              type: 'array',
              of: [{ type: 'text' }],
            },
            {
              name: 'images',
              title: 'Gallery Images',
              type: 'array',
              of: [{ type: 'image' }],
            },
            {
              name: 'postImageParagraphs',
              title: 'Post-Image Paragraphs',
              type: 'array',
              of: [{ type: 'text' }],
            },
          ],
        },
        {
          name: 'textWrapReverse', 
          title: 'Text Wrap Reverse',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [{ type: 'text' }],
            },
            {
              name: 'imageUrl',
              title: 'Image URL',
              type: 'image',
            },
            {
              name: 'imageAlt',
              title: 'Image Alt Text',
              type: 'string',
            },
          ],
        },
        {
          name: 'blogImage',
          title: 'Image',
          type: 'object',
          fields:[
            {
              name: 'image',
              title: 'Image URL',
              type: 'image',
            }
          ]
        },
      ],
    },
  ],
};
