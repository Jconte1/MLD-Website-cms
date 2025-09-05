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
                    type: 'parallaxIntro',
                },
                { type: 'scrollToFormButton' },
                {
                    name: 'videoIntro',
                    title: 'Video Intro Section',
                    type: 'videoIntro',
                },
                {
                    name: 'paragraph',
                    type: 'paragraph',
                    title: 'Paragraph Section'
                },
                {
                    name: 'blogImage',
                    title: 'image',
                    type: 'blogImage',
                },
                {
                    name: 'simpleIntro',
                    title: 'Simple Intro',
                    type: 'simpleIntro'
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
                                        { name: 'sliderTitle', title: 'Slide Title', type: 'text' },
                                        { name: 'description', title: 'Description', type: 'text' },
                                        { name: 'buttonText', title: 'Button Text', type: 'string' },
                                        { name: 'href', title: 'Button Link', type: 'url' },
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
                        {
                            name: 'formId',
                            type: 'string',
                            title: 'Form Section ID (for scroll target)',
                            initialValue: 'lead-form',
                        }
                    ],
                },
                {
                    name: 'showroomSlider',
                    title: 'Showroom Slider',
                    type: 'showroomSlider',
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
                { type: 'threeDSlider' },
                {
                    name: 'cards',
                    title: 'Cards Section',
                    type: 'cards',

                },

            ],
        },
    ],
};
