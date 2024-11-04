export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          name: 'showroomSlider',
          title: 'Showroom Slider',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'subTitle', title: 'Subtitle', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'button', title: 'Button Text', type: 'string' },
            {
              name: 'showrooms',
              title: 'Showrooms',
              type: 'array',
              of: [
                {
                  name: 'showroom',
                  title: 'Showroom',
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Showroom Name', type: 'string' },
                    { name: 'url2', title: 'Showroom URL', type: 'url' },
                    { name: 'imageURL', title: 'Image URL', type: 'image', options: { hotspot: true } }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'cards',
          title: 'Cards Section',
          type: 'object',
          fields: [
            { name: 'mainTitle', title: 'Title', type: 'string' },
            { name: 'mainSubTitle', title: 'Subtitle', type: 'string' },
            { name: 'cardImage1', title: 'Card Image 1', type: 'image', options: { hotspot: true } },
            { name: 'cardTitle1', title: 'Card Title 1', type: 'string' },
            { name: 'cardParagraph1', title: 'Card Paragraph 1', type: 'text' },
            { name: 'cardURL1', title: 'Card URL 1', type: 'url' },
            { name: 'cardButton1', title: 'Card Button Text 1', type: 'string' },
            { name: 'cardImage2', title: 'Card Image 2', type: 'image', options: { hotspot: true } },
            { name: 'cardTitle2', title: 'Card Title 2', type: 'string' },
            { name: 'cardParagraph2', title: 'Card Paragraph 2', type: 'text' },
            { name: 'cardURL2', title: 'Card URL 2', type: 'url' },
            { name: 'cardButton2', title: 'Card Button Text 2', type: 'string' },
            { name: 'cardImage3', title: 'Card Image 3', type: 'image', options: { hotspot: true } },
            { name: 'cardTitle3', title: 'Card Title 3', type: 'string' },
            { name: 'cardParagraph3', title: 'Card Paragraph 3', type: 'text' },
            { name: 'cardURL3', title: 'Card URL 3', type: 'url' },
            { name: 'cardButton3', title: 'Card Button Text 3', type: 'string' },
          ],
          preview: {
            select: {
              title: 'Cards Section',
              media: 'cardImage1',
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title || 'Cards Section',
                media: media || undefined,
              };
            },
          },
        },
        {
          name: 'blogWithGallery',
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
          ]
        },
        {
          name: 'blogImage',
          title: 'Blog Image',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image URL',
              type: 'image',
              options: { hotspot: true },
            }
          ]
        },
        {
          name: 'blogParagraph',
          title: 'Blog Paragraph',
          type: 'object',
          fields: [
            {
              name: 'blogParagraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [{ type: 'text' }]
            }
          ]
        },

        {
          name: 'bigTitle',
          title: 'Title, Sub-Title, and Link',
          type: 'object',
          fields: [
            {
              name: 'bigTitle',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'titleLink',
              title: 'Link for main Title ',
              type: 'url',
            },
            {
              name: 'subTitle',
              title: 'Sub Title',
              type: 'string',
            },
          ],
        },
        {
          name: 'coolTiles',
          type: 'object',
          title: 'Cool Tiles',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              description: 'Main title for the component',
            },
            {
              name: 'subTitle',
              type: 'string',
              title: 'Subtitle',
              description: 'Subtitle for the component',
            },
            {
              name: 'cards',
              type: 'array',
              title: 'Cards',
              description: 'Array of cards to be displayed',
              of: [
                {
                  type: 'object',
                  title: 'Card',
                  fields: [
                    {
                      name: 'id',
                      type: 'string',
                      title: 'ID',
                      description: 'Unique identifier for the card',
                    },
                    { name: 'imageURL', title: 'Image URL', type: 'image', options: { hotspot: true } },
                    {
                      name: 'name',
                      type: 'string',
                      title: 'Name',
                      description: 'Name of the card item',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'eventPreview',
          title: 'Preview Section',
          type: 'object',
          description: 'This section will preview other pages like recipes, blogs, demos, etc...',
          fields: [
            {
              name: 'title',
              title: 'Title of Section',
              type: 'string'
            },
            {
              name: 'url',
              title: 'Base URL',
              type: 'string',
              description: 'Enter the base URL path, e.g., /newsandevents'
            },
            {
              name: 'contentType',
              title: 'Content Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Recipe', value: 'recipe' },
                  { title: 'Blog', value: 'blog' },
                  { title: 'Demo', value: 'demo' }
                ]
              },
              description: 'Select the type of content this section previews'
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              description: 'Text displayed on the button, e.g., "Read More"'
            }
          ]
        }
      ]
    }
  ]
};
