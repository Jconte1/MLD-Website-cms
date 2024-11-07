export default {
    name: 'bigtiles',
    title: 'Big Tiles',
    type: 'object',
    fields: [
        {
            name: 'mainTitle',
            title: 'Main Title',
            type: 'string',
        },
        {
            name: 'mainSubTitle',
            title: 'Main Sub Title',
            type: 'string',
        },
        {
            name: 'tiles',
            title: 'Tiles Content',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'tile',
                    title: 'Tile',
                    fields: [
                        {
                            name: 'backgroundImage',
                            title: 'Background Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'boxTitle',
                            title: 'Tile Title',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        },
                        {
                            name: 'href',
                            title: 'Link URL',
                            type: 'url',
                        },
                        {
                            name: 'button',
                            title: 'Button Text',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
    ],
};
