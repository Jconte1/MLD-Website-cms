export default {
    name: 'recipeDetails',
    type: 'object',
    title: ' Recipe Details',
    fields: [
        { name: 'image', type: 'image', title: 'Image' },
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'author', type: 'string', title: 'Author' },
        { name: 'chefImage', type: 'image', title: 'Image of Chef' },
        { name: 'button', type: 'string', title: 'Button Title' },
        {
            name: 'description', title: 'Description', type: 'string'
        },
        { name: 'preptime', type: 'string', title: 'Prep Time' },
        { name: 'cooktime', type: 'string', title: 'Cook Time' },
        { name: 'servingsize', type: 'string', title: 'Serving Size' },
    ]
};