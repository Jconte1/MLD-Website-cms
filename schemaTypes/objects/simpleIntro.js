export default {
  name: 'simpleIntro',
  title: 'Header with Customizable H1 Postion',
  type: 'object',
  fields: [
    { name: 'backgroundImage', type: 'image', title: 'Background Image' },
    { name: 'title', type: 'string', title: 'H1 Title' },
    {
      name: "position",
      type: "string",
      title: "H1 Position",
      description: "Select where the title (H1) should be placed.",
      options: {
        list: [
          { title: "Top Left", value: "topLeft" },
          { title: "Top Right", value: "topRight" },
          { title: "Bottom Left", value: "bottomLeft" },
          { title: "Bottom Right", value: "bottomRight" },
          { title: "Center", value: "center" },
        ],
        layout: "radio", 
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "color",
      type: "string",
      title: "H1 Color",
      description: "Select what color the title should be.",
      options:{
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
        ]
      }
    },
    { name: 'overlayImage', type: 'image', title: 'Overlay Image' }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'Intro',
        media: media,
      };
    },
  },
};
