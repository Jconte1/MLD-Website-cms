export default {
    name: 'allRecipes',
    title: 'All Recipes Page',
    type: 'document',
    fields: [
        {
            name: 'seo',
            type: 'seo',
            title: 'SEO Settings'
        },
        {
            name: 'simpleIntro',
            title: 'Simple Intro',
            type: 'object',
            fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'backgroundImage', title: 'Background Image', type: 'image' },
            ],
        },
    ],
};