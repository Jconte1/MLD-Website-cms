export default {
    name: 'blogParagraph',
    title: 'Paragraph',
    type: 'object',
    fields: [

        {
            name: 'blogParagraphs',
            title: 'Paragraphs',
            type: 'array',
            of: [{ type: 'block' }],

        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Paragraphs Section',
            };
        },
    },
};