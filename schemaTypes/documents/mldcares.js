export default {
    name: 'mldcares',
    title: 'MLD Cares',
    type: 'document',
    fields: [
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
            preview: {
              select: {
                title: 'title',
                media: 'backgroundImage',
              },
              prepare(selection) {
                const { title, media } = selection;
                return {
                  title: title || 'Simple Intro',
                  media: media,
                };
              },
            },
          },
          {
            name: 'title',
            title: 'Title',
            type: 'object',
            fields: [
              {
              name: 'title',
              title: 'Title',
              type: 'string',
              }
            ]
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
                media: 'images.0', 
              },
              prepare(selection) {
                const { media } = selection;
                return {
                  title: 'Blog with Photo Gallery',
                  media: media || undefined,
                };
              },
            },
          },
          {
            name: 'popularBrands',
            title: 'Popular Brands',
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: Rule => Rule.required(),
              },
              {
                name: 'subTitle',
                title: 'Sub Title',
                type: 'string',
              },
              {
                name: 'popBrands',
                title: 'Popular Brands List',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'brand',
                        title: 'Brand Name',
                        type: 'string',
                        validation: Rule => Rule.required(),
                      },
                      {
                        name: 'url',
                        title: 'Brand URL',
                        type: 'url',
                        validation: Rule => Rule.required(),
                      },
                      {
                        name: 'image',
                        title: 'Brand Image',
                        type: 'image',
                      },
                      {
                        name: 'logo',
                        title: 'Brand Logo',
                        type: 'image',
                      },
                    ],
                  },
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
                  title: title || 'Popular Brands Section',
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
              },
            ],
            preview: {
              select: {
                media: 'image',
              },
              prepare(selection) {
                const { media } = selection;
                return {
                  title: 'Blog Image',
                  media: media,
                };
              },
            },
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
              prepare() {
                return {
                  title: 'Blog Paragraphs Section',
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
                  media: media || undefined,
                };
              },
            },
          },
        ],
      },
    ],
  };
  