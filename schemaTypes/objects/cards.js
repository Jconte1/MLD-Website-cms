import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cards',
  type: 'object',
  title: 'Cards',
  fields: [
    defineField({ name: 'cardImage1', type: 'image', title: 'Card Image 1' }),
    defineField({ name: 'cardTitle1', type: 'string', title: 'Card Title 1' }),
    defineField({ name: 'cardParagraph1', type: 'text', title: 'Card Paragraph 1' }),
    defineField({ name: 'cardURL1', type: 'url', title: 'Card URL 1' }),
    defineField({ name: 'cardButton1', type: 'string', title: 'Card Button 1' }),
    defineField({ name: 'cardImage2', type: 'image', title: 'Card Image 2' }),
    defineField({ name: 'cardTitle2', type: 'string', title: 'Card Title 2' }),
    defineField({ name: 'cardParagraph2', type: 'text', title: 'Card Paragraph 2' }),
    defineField({ name: 'cardURL2', type: 'url', title: 'Card URL 2' }),
    defineField({ name: 'cardButton2', type: 'string', title: 'Card Button 2' }),
    defineField({ name: 'cardImage3', type: 'image', title: 'Card Image 3' }),
    defineField({ name: 'cardTitle3', type: 'string', title: 'Card Title 3' }),
    defineField({ name: 'cardParagraph3', type: 'text', title: 'Card Paragraph 3' }),
    defineField({ name: 'cardURL3', type: 'url', title: 'Card URL 3' }),
    defineField({ name: 'cardButton3', type: 'string', title: 'Card Button 3' })
  ]
});