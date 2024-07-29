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
    defineField({ name: 'businessHours', type: 'string', title: 'Business Hours' }),
    defineField({ name: 'saturdayHours', type: 'string', title: 'Saturday Hours' }),
    defineField({ name: 'phone', type: 'string', title: 'Phone Number' }),
  ]
});