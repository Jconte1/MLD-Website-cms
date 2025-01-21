export default {
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
            name: 'flipCards',
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
};
