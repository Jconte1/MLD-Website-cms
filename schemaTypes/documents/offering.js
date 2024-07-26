export default {
    name: 'offering',
    type: 'document',
    title: 'Offerings',
    fields: [
        {
            name: 'offeringId',
            type: 'string',
            title: 'Offerings ID',
            description: 'Unique identifier for the showroom',
            validation: Rule => Rule.required()
        },
        {
            name: 'seo',
            type: 'seo',
            title: 'SEO Settings'
        },
        {
            name: 'parallaxIntro',
            type: 'parallaxIntro',
            title: 'Intro Section',
        },
        {
            name: 'offeringsSlider',
            type: 'offeringsSlider',
            title: 'Offerings Slider',
        },
        {
            name: 'showroomSlider',
            type: 'showroomSlider',
            title: 'Showrooms Preview Slider',
        },
        {
            name: 'popularBrands',
            type: 'popularBrands',
            title: 'Popular Brands',
        },
        {
            name: 'allBrands',
            type: 'allBrands',
            title: 'All Brands',
        },
        {
            name: 'cards',
            type: 'cards',
            title: 'Cards Section',
        },
    ]
}