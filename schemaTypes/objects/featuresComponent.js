import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featuresComponent',
  type: 'object',
  title: 'Features Component',
  fields: [
    defineField({ name: 'appVid', type: 'url', title: 'Appliance Video URL' }),
    defineField({ name: 'appFeatTitle', type: 'string', title: 'Appliance Feature Title' }),
    defineField({ name: 'appDescription', type: 'text', title: 'Appliance Description' }),
    defineField({ name: 'plumbVid', type: 'url', title: 'Plumbing Video URL' }),
    defineField({ name: 'plumbFeatTitle', type: 'string', title: 'Plumbing Feature Title' }),
    defineField({ name: 'plumbDescription', type: 'text', title: 'Plumbing Description' }),
    defineField({ name: 'hardVid', type: 'url', title: 'Hardware Video URL' }),
    defineField({ name: 'hardFeatTitle', type: 'string', title: 'Hardware Feature Title' }),
    defineField({ name: 'hardDescription', type: 'text', title: 'Hardware Description' })
  ]
});