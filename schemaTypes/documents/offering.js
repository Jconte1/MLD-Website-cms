export default {
    name: 'offering',
    title: 'Offering',
    type: 'document',
    fields: [
        {
            name: 'seo',
            type: 'seo',
            title: 'SEO Settings'
        },
        {
            name: 'offeringId',
            title: 'Offering ID',
            type: 'string',
            description: 'Unique identifier for the offering (e.g., "appliances", "plumbing")',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'pageSections',
            title: 'Page Sections',
            type: 'array',
            of: [
                {
                    name: 'parallaxIntro',
                    title: 'Intro Section',
                    type: 'object',
                    fields: [
                        { name: 'pageTitle', title: 'Page Title', type: 'string' },
                        { name: 'pageTitle2', title: 'Page Title 2', type: 'string' },
                        { name: 'sectionTitle', title: 'Section Title', type: 'string' },
                        { name: 'sectionDescription', title: 'Section Description', type: 'text' },
                        { name: 'backgroundImage1', title: 'Background Image 1', type: 'image' },
                        { name: 'backgroundImage2', title: 'Background Image 2', type: 'image' },
                        { name: 'phone', title: 'Phone', type: 'string' },
                        { name: 'contactButton', title: 'Contact Button Text', type: 'string' },
                    ],
                    preview: {
                        select: {
                            title: 'pageTitle',
                            media: 'backgroundImage1',
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
                    name: 'description',
                    title: 'Description',
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
                        { name: 'subTitle', title: 'Sub Title', type: 'string' },
                        {
                            name: 'offeringsSlider',
                            title: 'Offerings Slider',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'description', title: 'Description', type: 'text' },
                                        { name: 'buttonText', title: 'Button Text', type: 'string' },
                                        { name: 'image', title: 'Image', type: 'image' },
                                    ],
                                },
                            ],
                        },
                    ],
                    preview: {
                        select: {
                            title: 'offeringName',
                        },
                        prepare(selection) {
                            const { title } = selection;
                            return {
                                title: title || 'Description Section',
                            };
                        },
                    },
                },
                {
                    name: 'showroomSlider',
                    title: 'Showroom Slider',
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
                        { name: 'subTitle', title: 'Sub Title', type: 'string' },

                        {
                            name: 'showrooms',
                            title: 'Showrooms',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'name', title: 'Showroom Name', type: 'string' },
                                        { name: 'imageURL', title: 'Image URL', type: 'image' },
                                        { name: 'url2', title: 'Showroom URL', type: 'url', validation: (Rule) => Rule.required() },
                                    ],
                                },
                            ],
                        },
                        { name: 'button', title: 'Button Text', type: 'string' },
                        { name: 'url', title: 'Button URL', type: 'url', validation: (Rule) => Rule.required() },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                        },
                        prepare(selection) {
                            const { title } = selection;
                            return {
                                title: title || 'Showroom Slider Section',
                            };
                        },
                    },
                },
                {
                    name: 'popularBrands',
                    title: 'Popular Brands',
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
                        { name: 'subTitle', title: 'Sub Title', type: 'string' },
                        {
                            name: 'popBrands',
                            title: 'Popular Brands List',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'brand', title: 'Brand Name', type: 'string', validation: (Rule) => Rule.required() },
                                        { name: 'url', title: 'Brand URL', type: 'url', validation: (Rule) => Rule.required() },
                                        { name: 'image', title: 'Brand Image', type: 'image' },
                                        { name: 'logo', title: 'Brand Logo', type: 'image' },
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
                    name: 'allBrands',
                    title: 'All Brands',
                    type: 'object',
                    fields: [
                        {
                            name: 'brands',
                            title: 'All Brands List',
                            type: 'array',
                            of: [{
                                type: 'object',
                                fields: [
                                    { name: 'url', title: 'Brand URL', type: 'url', validation: (Rule) => Rule.required() },
                                    { name: 'brand', title: 'Brand Name', type: 'string', validation: (Rule) => Rule.required() },
                                ]
                            }],
                        },
                    ],
                    preview: {
                        prepare() {
                            return {
                                title: 'All Brands Section',
                            };
                        },
                    },
                },
                {
                    name: 'cards',
                    title: 'Cards Section',
                    type: 'object',
                    fields: [
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
