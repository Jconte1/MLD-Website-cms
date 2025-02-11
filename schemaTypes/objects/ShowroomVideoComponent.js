
export default {
  name: 'showroomVideo',
  type: 'object',
  title: 'Showroom Video',
  fields: [
    { name: 'videoUrl', type: 'url', title: 'Intro Video Section',  description: 'The URL of the Vimeo video you want to add. Your URL should look something like this: https://vimeo.com/1030140649. If left blank, a default video will be used.',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }), },
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'button1', type: 'string', title: 'Button 1 Text' },
    { name: 'button2', type: 'string', title: 'Button 2 Text' },
    { name: 'button3', type: 'string', title: 'Button 3 Text' }
  ]
};