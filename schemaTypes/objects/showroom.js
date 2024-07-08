import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'showroom',
  type: 'object',
  title: 'Showroom',
  fields: [
    defineField({ name: 'image', type: 'image', title: 'Image' }),
    defineField({ name: 'location', type: 'string', title: 'Location' }),
    defineField({ name: 'URL', type: 'url', title: 'URL' }),
    defineField({ name: 'addressStreet', type: 'string', title: 'Address Street' }),
    defineField({ name: 'cityStateZip', type: 'string', title: 'City, State, Zip' }),
    defineField({ name: 'streetURL', type: 'url', title: 'Street URL' }),
    defineField({ name: 'pnumber', type: 'string', title: 'Phone Number' }),
    defineField({ name: 'hours', type: 'string', title: 'Hours' }),
    defineField({ name: 'saturday', type: 'string', title: 'Saturday' }),
    defineField({ name: 'saturdayHours', type: 'string', title: 'Saturday Hours' }),
    defineField({ name: 'button1', type: 'string', title: 'Button 1' }),
    defineField({ name: 'button2', type: 'string', title: 'Button 2' }),
    defineField({ name: 'button3', type: 'string', title: 'Button 3' })
  ]
});