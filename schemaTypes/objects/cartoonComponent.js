import {defineField, defineType } from 'sanity';


export default defineType({
    name: 'cartoonComponent',
    type: 'object',
    title: 'Cartoon Component',
    fields: [
      defineField({ name: 'cartoonTitle', type: 'string', title: 'Cartoon Title' }),
      defineField({ name: 'cartoonDescription', type: 'text', title: 'Cartoon Description' }),
      defineField({ name: 'pic1', type: 'image', title: 'Picture 1' }),
      defineField({ name: 'picTitle1', type: 'string', title: 'Picture 1 Title' }),
      defineField({ name: 'pic2', type: 'image', title: 'Picture 2' }),
      defineField({ name: 'picTitle2', type: 'string', title: 'Picture 2 Title' }),
      defineField({ name: 'pic3', type: 'image', title: 'Picture 3' }),
      defineField({ name: 'picTitle3', type: 'string', title: 'Picture 3 Title' }),
      defineField({ name: 'pic4', type: 'image', title: 'Picture 4' }),
      defineField({ name: 'picTitle4', type: 'string', title: 'Picture 4 Title' })
    ]
  });