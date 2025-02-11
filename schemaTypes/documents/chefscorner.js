export default {
    name: 'chefscorner',
    title: 'Chefs Corner',
    type: 'document',
    fields: [
        {
            name: 'seo',
            type: 'seo',
            title: 'SEO Settings'
        },
        {
            name: 'pageSections',
            title: 'Page Sections',
            type: 'array',
            of: [
                {
                    name: 'simpleIntro',
                    title: 'Simple Intro',
                    type: 'simpleIntro'
                },
                {
                    type: 'featuresComponent',
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
                    name: 'flipCards',
                    title: 'Flip Cards',
                    type: 'object',
                    fields: [
                        {
                            name: 'mainTitle',
                            title: 'Title of Section',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'cards',
                            title: 'Cards List',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'name',
                                            title: 'Card Name',
                                            type: 'string',
                                            validation: (Rule) => Rule.required(),
                                        },
                                        {
                                            name: 'image',
                                            title: 'Card Image',
                                            type: 'image',
                                            description: 'The image displayed on the front of the card.',
                                            options: { hotspot: true },
                                            validation: (Rule) => Rule.required(),
                                        },
                                        {
                                            name: 'facts',
                                            title: 'Card Facts',
                                            type: 'string',
                                            description: 'A fun fact displayed on the back of the card.',
                                            validation: (Rule) => Rule.required(),
                                        },
                                        {
                                            name: 'moreFacts',
                                            title: 'Additional Facts',
                                            type: 'string',
                                            description: 'Additional fun fact displayed on the back of the card.',
                                            validation: (Rule) => Rule.required(),
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
                                title: title || 'Flip Cards Section',
                            };
                        },
                    },
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
            ],
        },
    ],
};
