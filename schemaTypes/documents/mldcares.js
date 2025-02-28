export default {
  name: 'mldcares',
  title: 'MLD Cares',
  type: 'document',
  fields: [
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings',
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'simpleIntro' },
        { type: 'blogTitle' },
        { type: 'popBrands' },
        { type: 'cards' },
        { type: 'blogImage' },
        { type: 'gridGallery' },
        {
          name: 'blogParagraph',
          type: 'blogParagraph',
          title: 'Paragraph'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'subTitle', title: 'Sub Title', type: 'string' },
            {
              name: 'offeringsSlider',
              title: 'Offerings Slider',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'sliderTitle', title: 'Slide Title', type: 'text' },
                    { name: 'description', title: 'Description', type: 'text' },
                    { name: 'buttonText', title: 'Button Text', type: 'string' },
                    { name: 'image', title: 'Image', type: 'image' },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'offeringName',
            },
            prepare(selection) {
              const { title } = selection;
              return {
                title: title || 'Description Section',
              };
            },
          },
        },
        { type: 'title' }
      ],
    },
  ],
};
