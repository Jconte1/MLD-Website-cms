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
    defineField({ name: 'willCallTitle1', type: 'string', title: 'Will Call Title 1' }),
    defineField({ name: 'willCallURL1', type: 'url', title: 'Will Call URL 1' }),
    defineField({ name: 'willCallTitle2', type: 'string', title: 'Will Call Title 2' }),
    defineField({ name: 'willCallURL2', type: 'url', title: 'Will Call URL 2' }),
    defineField({ name: 'appointmentButton1', type: 'string', title: 'Appointment Button 1 Text' }),
    defineField({ name: 'appointmentButton2', type: 'string', title: 'Appointment Button 2 Text' }),
    defineField({ name: 'logo', type: 'image', title: 'Logo Image' })
  ]
});