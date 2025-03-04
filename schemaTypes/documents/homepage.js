export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings'
    },
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
          name: 'video',
          type: 'video',
          title: 'Intro Video Section'
        },
        {
          name: 'review',
          type: 'review',
          title: 'Reviews'
        },
        {
          name: '3dslider',
          title: '3D Slider',
          type: 'object', // Use 'object' since it includes fields
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'The main title of the 3D slider.',
              validation: Rule => Rule.required(), // Make the title required
            },
          ],
        },
        {
          name: 'showroomSlider',
          title: 'Showroom Slider',
          type: 'showroomSlider',
        },
        {
          name: 'cards',
          title: 'Cards Section',
          type: 'cards',
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
                    {
                      name: 'href',
                      type: 'url',
                      title: 'Link (Href)',
                      description: 'URL that the card should link to',
                      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
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
        },
        {
          name: 'leadForm',
          title: 'Lead Form',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Form Title',

            },
            {
              name: 'subTitle',
              type: 'string',
              title: 'Form Subtitle',
            },
          ],
        },
      ]
    }
  ]
};
