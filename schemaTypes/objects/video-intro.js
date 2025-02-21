export default {
    name: 'videoIntro',
    title: 'Video Intro',
    type: 'object',
    
    fields: [
      {
        name: 'videoUrl',
        title: 'Video URL',
        type: 'url',
        description: 'The URL of the Vimeo video you want to add. Your URL should look something like this: https://vimeo.com/1030140649. If left blank, a default video will be used.',
        validation: Rule =>
          Rule.uri({ allowRelative: false }).error('Please enter a valid URL')
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      }
      
    ],
    preview: {
      select: {
        title: 'title'
      },
      prepare(selection) {
        const { title } = selection;
        return {
          title: title || 'Video Intro'
        };
      }
    }

  };
  