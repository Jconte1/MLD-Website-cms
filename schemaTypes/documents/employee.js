export default {
    name: 'employee',
    type: 'document',
    title: 'Employee',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Employee Name'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Job Title'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Profile Image',
        options: {
          hotspot: true,
        },
      }
    ],
    preview: {
      select: {
        title: 'name',  
        media: 'image'  
      }
    }
  }
  