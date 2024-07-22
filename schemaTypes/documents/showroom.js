export default {
  name: 'showroom',
  type: 'document',
  title: 'Showroom',
  fields: [
    {
      name: 'showroomId',
      type: 'string',
      title: 'Showroom ID',
      description: 'Unique identifier for the showroom',
      validation: Rule => Rule.required()
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings'
    },
    {
      name: 'showroomVideo',
      type: 'showroomVideo',
      title: 'Showroom Video'
    },
    {
      name: 'hoursComponent',
      type: 'hoursComponent',
      title: 'Hours Component'
    },
    {
      name: 'cartoonComponent',
      type: 'cartoonComponent',
      title: 'Cartoon Component'
    },
    {
      name: 'featuresComponent',
      type: 'featuresComponent',
      title: 'Features Component'
    },
    {
      name: 'gridGallery',
      type: 'gridGallery',
      title: 'Grid Gallery'
    },
    {
      name: 'cards',
      type: 'cards',
      title: 'Cards Section'
    }
  ]
};
