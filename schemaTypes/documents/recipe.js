export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'button',
      title: 'Button Title',
      type: 'string',
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          name: 'recipeDetails',
          title: 'Recipe Details',
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image' },
            { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.max(250).error('Cannot exceed 250 characters.') },
            { name: 'author', title: 'Author', type: 'string' },
            { name: 'chefImage', title: 'Image of Chef', type: 'image' },
            { name: 'button', title: 'Button Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
            { name: 'preptime', title: 'Prep Time', type: 'string' },
            { name: 'cooktime', title: 'Cook Time', type: 'string' },
            { name: 'servingsize', title: 'Serving Size', type: 'string' },
            // Include ingredients as part of recipeDetails
            {
              name: 'ingredients',
              title: 'Ingredients List',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'quantity', type: 'string', title: 'Quantity' },
                    { name: 'unit', type: 'string', title: 'Unit' },
                    { name: 'description', type: 'string', title: 'Description' }
                  ],
                  preview: {
                    select: {
                      description: 'description'
                    },
                    prepare(selection) {
                      const { description } = selection;
                      return {
                        title: description,
                      }
                    }
                  }
                }
              ]
            },
            {
              name: 'instructions',
              title: 'Cooking Instructions',
              type: 'object',
              fields: [
                {
                  name: 'instructions',
                  title: 'instructions',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
            }
          ]
        }
      ]
    }
  ],
};
