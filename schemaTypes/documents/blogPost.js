export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings'
    },
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
      of: [
        { type: 'block' }, // text blocks
        {
          type: 'image',   // image support!
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'categories', // Changed from 'category' to 'categories'
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }], // Reference to the category schema
        },
      ],
    },
    {
      name: 'button',
      title: 'Button Title',
      type: 'string',
      validation: Rule => Rule.min(3).max(30).error('Button title must be between 3 and 30 characters')

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
          name: 'simpleIntro2',
          title: 'Simple Intro',
          type: 'simpleIntro2'
        },
        {
          name: 'textWrap',
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
          preview: {
            select: {
              imageUrl: 'imageUrl'
            },
            prepare(selection) {
              const { imageUrl } = selection;
              return {
                title: 'Text Wrap Section',
                media: imageUrl,
              }
            }
          }
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
          ],
          preview: {
            select: {
              images: 'images'
            },
            prepare(selection) {
              const { images } = selection;
              return {
                title: 'Blog with Photo Gallery',
                media: images && images.length > 0 ? images[0] : undefined,
              }
            }
          }
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
          preview: {
            select: {
              imageUrl: 'imageUrl'
            },
            prepare(selection) {
              const { imageUrl } = selection;
              return {
                title: 'Reverse Text Wrap Section',
                media: imageUrl,
              }
            }
          }
        },
        {
          name: 'blogImage',
          title: 'Image',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image URL',
              type: 'image',
            }
          ],
          preview: {
            select: {
              image: 'image'
            },
            prepare(selection) {
              const { image } = selection;
              return {
                title: 'Image',
                media: image,
              }
            }
          }
        },
        {
          name: 'blogTitle',
          title: 'Sub Title',
          type: 'object',
          fields: [
            {
              name: 'blogTitle',
              title: 'Blog Title',
              type: 'string',
            }
          ],
        },

        {
          name: 'blogParagraph',
          type: 'blogParagraph',
          title: 'Paragraph'
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
        {
          name: 'cards',
          title: 'Cards Section',
          type: 'object',
          fields: [
            {
              name: 'cardImage1',
              title: 'Card Image 1',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'cardTitle1',
              title: 'Card Title 1',
              type: 'string',
            },
            {
              name: 'cardParagraph1',
              title: 'Card Paragraph 1',
              type: 'text',
            },
            {
              name: 'cardURL1',
              title: 'Card URL 1',
              type: 'url',
            },
            {
              name: 'cardButton1',
              title: 'Card Button Text 1',
              type: 'string',
            },
            {
              name: 'cardImage2',
              title: 'Card Image 2',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'cardTitle2',
              title: 'Card Title 2',
              type: 'string',
            },
            {
              name: 'cardParagraph2',
              title: 'Card Paragraph 2',
              type: 'text',
            },
            {
              name: 'cardURL2',
              title: 'Card URL 2',
              type: 'url',
            },
            {
              name: 'cardButton2',
              title: 'Card Button Text 2',
              type: 'string',
            },
            {
              name: 'cardImage3',
              title: 'Card Image 3',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'cardTitle3',
              title: 'Card Title 3',
              type: 'string',
            },
            {
              name: 'cardParagraph3',
              title: 'Card Paragraph 3',
              type: 'text',
            },
            {
              name: 'cardURL3',
              title: 'Card URL 3',
              type: 'url',
            },
            {
              name: 'cardButton3',
              title: 'Card Button Text 3',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'cardTitle1',
              media: 'cardImage1',
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title || 'Cards Section',
                media: media,
              };
            },
          },
        },
        { type: 'oldBlogContent' }
      ],
    },
  ],
};