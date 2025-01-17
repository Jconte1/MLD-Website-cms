export default {
    name: 'blogTitle',
    type: 'object',
    title: 'Sub Title',
    fields: [
        { name: 'blogTitle', type: 'string', title: 'blogTitle' }
    ],
    preview: {
        select: {
            blogTitle: 'blogTitle'
        },
        prepare(selection) {
            const { blogTitle } = selection;
            return {
                title: 'Sub Title',
                media: blogTitle,
            }
        }
    }
};