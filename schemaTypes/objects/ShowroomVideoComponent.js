import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'showroomVideo',
  type: 'object',
  title: 'Showroom Video',
  fields: [
    defineField({ name: 'videoSrc', type: 'url', title: 'Video Source' }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'button1', type: 'string', title: 'Button 1 Text' }),
    defineField({ name: 'button2', type: 'string', title: 'Button 2 Text' }),
    defineField({ name: 'button3', type: 'string', title: 'Button 3 Text' })
  ]
});