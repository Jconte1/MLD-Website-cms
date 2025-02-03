import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hoursComponent',
  type: 'object',
  title: 'Hours Component',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'street', type: 'string', title: 'Street Address' }),
    defineField({ name: 'stateCity', type: 'string', title: 'City and State' }),
    defineField({ name: 'zip', type: 'string', title: 'ZIP Code' }),
    defineField({ name: 'googleURL', type: 'url', title: 'Google Maps URL' }),
    defineField({ name: 'saturdayHours', type: 'string', title: 'Saturday Hours' }),
    defineField({ name: 'phoneNumber', type: 'string', title: 'Phone Number' }),
    defineField({ name: 'emailURL', type: 'string', title: 'Email Address' }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'street',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Hours Component',
        subtitle: subtitle || 'No Address Set',
      };
    },
  },
});
