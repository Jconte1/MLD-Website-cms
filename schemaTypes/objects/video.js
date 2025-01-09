export default {
    name: 'video',
    type: 'object',
    title: 'Intro Video Section',
    fields: [
      {
        name: 'videoUrl',
        type: 'url',
        title: 'Vimeo Video URL',
        description: 'The URL of the Vimeo video to embed. Your URL should look something like this: https://vimeo.com/1030140649. If left blank, a default video will be used.',
        validation: (Rule) => Rule.uri({
          scheme: ['http', 'https'],
        }),
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
        description: 'The small title or subtitle displayed above the main title. (H2)',
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'The main title text displayed over the video. (H1)',
      },
      {
        name: 'buttonText',
        type: 'string',
        title: 'Button Text',
        description: 'The text displayed on the call-to-action button.',
      },
      {
        name: 'buttonURL',
        type: 'url',
        title: 'Button URL',
        description: 'The URL the button links to.',
        validation: (Rule) => Rule.uri({
          scheme: ['http', 'https'],
        }),
      },
    ],
    preview: {
        prepare() {
          return {
            title: 'Intro Video Section',
          };
        },
      },
  };