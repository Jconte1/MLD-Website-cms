export default {
    name: 'timelineEvent',
    title: 'Timeline Event',
    type: 'document',
    fields: [
      {
        name: 'date',
        title: 'Event Date',
        type: 'date', // You can also use 'string' if you don't want a strict date format.
        options: {
          dateFormat: 'YYYY', // Year format, you can customize this if needed.
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
        type: 'text', // Or 'string' if you want to limit it to shorter quotes.
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image', // You could also store this as a file upload, depending on how you plan to use the SVGs.
        options: {
          hotspot: true, // Enable image cropping for better control
        },
      },
      {
        name: 'sliderImages',
        title: 'Slider Images',
        type: 'array',
        of: [{type: 'image'}], // Array of images
        options: {
          layout: 'grid' // Display images in grid format in the Sanity Studio
        }
      }
    ]
  };
  