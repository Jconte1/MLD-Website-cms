

export default {
  name: 'cards',
  title: 'Cards Section',
  type: 'object',
  fields: [
    {
      name: 'cardImage1',
      title: 'Card Image 1',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'cardTitle1',
      title: 'Card Title 1',
      type: 'string',
    },
    {
      name: 'cardParagraph1',
      title: 'Card Paragraph 1',
      type: 'array', of: [{ type: 'block' }],
    },
    {
      name: 'cardURL1',
      title: 'Card URL 1',
      type: 'url',
    },
    {
      name: 'cardButton1',
      title: 'Card Button Text 1',
      type: 'string',
    },
    {
      name: 'cardImage2',
      title: 'Card Image 2',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'cardTitle2',
      title: 'Card Title 2',
      type: 'string',
    },
    {
      name: 'cardParagraph2',
      title: 'Card Paragraph 2',
      type: 'array', of: [{ type: 'block' }],
    },
    {
      name: 'cardURL2',
      title: 'Card URL 2',
      type: 'url',
    },
    {
      name: 'cardButton2',
      title: 'Card Button Text 2',
      type: 'string',
    },
    {
      name: 'cardImage3',
      title: 'Card Image 3',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'cardTitle3',
      title: 'Card Title 3',
      type: 'string',
    },
    {
      name: 'cardParagraph3',
      title: 'Card Paragraph 3',
      type: 'array', of: [{ type: 'block' }],
    },
    {
      name: 'cardURL3',
      title: 'Card URL 3',
      type: 'url',
    },
    {
      name: 'cardButton3',
      title: 'Card Button Text 3',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'cardTitle1',
      media: 'cardImage1',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'Cards Section',
        media: media || undefined,
      };
    },
  }
};