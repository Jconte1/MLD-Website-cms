export default {
    name: 'chefscorner',
    title: 'Chefs Corner',
    type: 'document',
    fields: [
        {
            name: 'simpleIntro',
            title: 'Simple Intro',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: Rule => Rule.max(78).error('Cannot exceed 78 characters.')
                },
                {
                    name: 'backgroundImage',
                    title: 'Background Image',
                    type: 'image',
                },
                
            ]
        },
        {
            name: 'featuresComponent',
            type: 'featuresComponent',
            title: 'Features Component'
        },
        {
            name: 'cartoonComponent',
            type: 'cartoonComponent',
            title: 'Cartoon Component'
        },
        {
            name: 'cards',
            type: 'cards',
            title: 'Cards Section'
        },
    ]
}