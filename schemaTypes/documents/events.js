export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('Event title is required.')
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required().error('Event date is required.')
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: Rule => Rule.required().error('Event time is required.')
    },
    {
      name: 'day',
      title: 'Day of the Week',
      type: 'string',
      options: {
        list: [
          { title: 'Monday', value: 'Monday' },
          { title: 'Tuesday', value: 'Tuesday' },
          { title: 'Wednesday', value: 'Wednesday' },
          { title: 'Thursday', value: 'Thursday' },
          { title: 'Friday', value: 'Friday' },
          { title: 'Saturday', value: 'Saturday' },
          { title: 'Sunday', value: 'Sunday' },
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required().error('Day of the week is required.')
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: Rule => Rule.required().error('Event venue is required.')
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required().error('Event location is required.')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Event image is required.')
    }
  ],

  preview: {
    select: {
      title: 'title',
      date: 'date',
      image: 'image.asset',
    },
    prepare({ title, date, image}) {
      const formattedDate = new Date(date).toLocaleDateString(); 
      return {
        title: `${formattedDate} - ${title}`,
        media: image,
      };
    }
  },
  orderings: [
    {
      title: 'Date, Newest',
      name: 'dateDesc',
      by: [
        { field: 'date', direction: 'desc' } 
      ]
    }
  ]
};
