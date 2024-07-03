import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'showroomVideoComponent',
  title: 'Showroom Video Component',
  type: 'object',
  fields: [
    defineField({
      name: 'videoSrc',
      title: 'Video Source',
      type: 'url',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'button1',
      title: 'Button 1 Text',
      type: 'string',
    }),
    defineField({
      name: 'button2',
      title: 'Button 2 Text',
      type: 'string',
    }),
    defineField({
      name: 'button3',
      title: 'Button 3 Text',
      type: 'string',
    }),
    defineField({
      name: 'url1',
      title: 'URL 1',
      type: 'url',
    }),
    defineField({
      name: 'url2',
      title: 'URL 2',
      type: 'url',
    }),
    defineField({
      name: 'url3',
      title: 'URL 3',
      type: 'url',
    }),
  ],
});
