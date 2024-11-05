export default {
    name: 'career',
    title: 'Career',
    type: 'document',
    fields: [
      {
        name: 'seo',
        type: 'seo',
        title: 'SEO Settings'
      },
      {
        name: 'title',
        title: 'Job Title',
        type: 'string',
        validation: Rule => Rule.required(),
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
        name: 'body',
        title: 'Job Description',
        type: 'text',  // Changed from 'array' to 'text' to align with the query structure
        validation: Rule => Rule.required(),
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'employmentType',
        title: 'Employment Type',
        type: 'string',
        options: {
          list: [
            { title: 'Full-time', value: 'full-time' },
            { title: 'Part-time', value: 'part-time' },
            { title: 'Contract', value: 'contract' },
          ],
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'salaryRange',
        title: 'Salary Range',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'skills',
        title: 'Skills Required',
        type: 'array',
        of: [{ type: 'string' }],
        validation: Rule => Rule.required(),
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
        validation: Rule => Rule.required(),
      },
      {
        name: 'pageSections',
        title: 'Page Sections',
        type: 'array',
        of: [
          {
            name: 'simpleIntro',
            title: 'Simple Intro',
            type: 'object',
            fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'backgroundImage', title: 'Background Image', type: 'image' },
              ],
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
                imageUrl: 'imageUrl',
              },
              prepare(selection) {
                const { imageUrl } = selection;
                return {
                  title: 'Text Wrap Section',
                  media: imageUrl,
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
            ],
            preview: {
              select: {
                images: 'images',
              },
              prepare(selection) {
                const { images } = selection;
                return {
                  title: 'Blog with Photo Gallery',
                  media: images && images.length > 0 ? images[0] : undefined,
                };
              },
            },
          },
          {
            name: 'bulletPointList',
            title: 'Bullet Point List',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'items',
                title: 'Items',
                type: 'array',
                of: [{ type: 'string' }],
              },
            ],
            preview: {
              select: {
                title: 'title',
              },
              prepare(selection) {
                const { title } = selection;
                return {
                  title: title,
                };
              },
            },
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
            // preview: {
            //   select: {
            //     blogTitle: 'blogTitle'
            //   },
            //   prepare(selection) {
            //     const { blogTitle } = selection;
            //     return {
            //       title: 'Sub Title',
            //       media: blogTitle,
            //     }
            //   }
            // }
          },
          {
            name: 'blogParagraph',
            title: 'Paragraph Section',
            type: 'object',
            fields: [
              {
                name: 'blogParagraphs',
                title: 'Paragraphs',
                type: 'array',
                of: [{ type: 'text' }],
              },
            ],
            preview: {
                select: {
                  paragraphs: 'blogParagraphs', 
                },
                prepare(selection) {
                  const { paragraphs } = selection;
                  const previewText = paragraphs && paragraphs.length > 0 
                    ? paragraphs[0] 
                    : 'No paragraphs added';
                  return {
                    title: previewText.length > 100 ? previewText.slice(0, 65) + '...' : previewText, 
                  };
                },
              },
          },
          {
            name: 'cards',
            title: 'Cards Section',
            type: 'object',
            fields: [
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
                name: 'cardImage1',
                title: 'Card Image 1',
                type: 'image',
              },
              { name: 'cardURL1', type: 'url', title: 'Card URL 1' },
              { name: 'cardButton1', type: 'string', title: 'Card Button 1' },
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
                name: 'cardImage2',
                title: 'Card Image 2',
                type: 'image',
              },
              { name: 'cardURL2', type: 'url', title: 'Card URL 2' },
              { name: 'cardButton2', type: 'string', title: 'Card Button 2' },
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
                name: 'cardImage3',
                title: 'Card Image 3',
                type: 'image',
              },
              { name: 'cardURL3', type: 'url', title: 'Card URL 3' },
              { name: 'cardButton3', type: 'string', title: 'Card Button 3' },
            ],
            preview: {
              select: {
                cardTitle1: 'cardTitle1',
                cardImage1: 'cardImage1',
              },
              prepare(selection) {
                const { cardTitle1, cardImage1 } = selection;
                return {
                  title: cardTitle1 || 'Cards Section',
                  media: cardImage1,
                };
              },
            },
          },
        ],
      },
    ],
  };
  