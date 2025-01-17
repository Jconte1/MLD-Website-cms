export default {
    name: 'simpleIntro',
    title: 'Simple Intro ',
    type: 'object',    
    fields: [
      { name: 'backgroundImage', type: 'image', title: 'Background Image' },
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'overlayImage', type: 'image', title: 'Overlay Image'}
    ],
    preview: {
      select: {
        title: 'title',
        media: 'backgroundImage',
      },
      prepare(selection) {
        const { title, media } = selection;
        return {
          title: title || 'Simple Intro',
          media: media,
        };
      },
    },
  };
  