export default {
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
};