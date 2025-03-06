export default {
    name: 'blogTitle',
    type: 'object',
    title: 'H2 Title',
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
                title: blogTitle || 'Untitled' // Fallback to avoid empty titles
            };
        }
    }
};