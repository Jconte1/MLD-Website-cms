export default {
  name: 'pillar',
  type: 'object',
  title: 'Pillar',
  fields: [
    { name: 'backgroundImage', type: 'image', title: 'Background Image' },
    { name: 'locationName', type: 'string', title: 'Location Name', description: '*no commas needed*' },
    { name: 'locationStreetAddress', type: 'string', title: 'Street Address', description: '*no commas needed*' },
    { name: 'locationCity', type: 'string', title: 'City', description: '*no commas needed*' },
    { name: 'locationState', type: 'string', title: 'State', description: '*no commas needed*' },
    { name: 'locationZipcode', type: 'string', title: 'Zip Code', description: '*no commas needed*' },
    { name: 'locationDays', type: 'string', title: 'Days' },
    { name: 'locationHours', type: 'string', title: 'Hours' },
    { name: 'locationSaturday', type: 'string', title: 'Saturday' },
    { name: 'locationSaturdayHours', type: 'string', title: 'Saturday Hours' },
    { name: 'locationPhoneNumber', type: 'string', title: 'Phone Number' },
    { name: 'offering1', type: 'string', title: 'Offering 1' },
    { name: 'offering1URL', type: 'string', title: 'Offering 1 URL' },
    { name: 'offering2', type: 'string', title: 'Offering 2' },
    { name: 'offering2URL', type: 'string', title: 'Offering 2 URL' },
    { name: 'offering3', type: 'string', title: 'Offering 3' },
    { name: 'offering3URL', type: 'string', title: 'Offering 3 URL' },
  ]
};