export default {
    name: 'timelineEvent',
    title: 'Timeline Event',
    type: 'document',
    fields: [
      {
        name: 'seo',
        type: 'seo',
        title: 'SEO Settings'
      },
      {
        name: 'date',
        title: 'Event Date',
        type: 'date', 
        options: {
          dateFormat: 'YYYY', 
        }
      },
      {
        name: 'title',
        title: 'Event Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'quoteText',
        title: 'Quote Text',
        type: 'text', 
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image', 
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'sliderImages',
        title: 'Slider Images',
        type: 'array',
        of: [{type: 'image'}], 
        options: {
          layout: 'grid' 
        }
      }
    ]
  };
  