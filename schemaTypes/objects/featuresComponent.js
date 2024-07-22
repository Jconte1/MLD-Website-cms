import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featuresComponent',
  type: 'object',
  title: 'Features Component',
  fields: [
    defineField({ name: 'appVid', type: 'file', title: 'Appliance Video URL' }),
    defineField({ name: 'appFeatTitle', type: 'string', title: 'Appliance Feature Title' }),
    defineField({ name: 'appDescription', type: 'text', title: 'Appliance Description' }),
    defineField({ name: 'plumbVid', type: 'file', title: 'Plumbing Video URL' }),
    defineField({ name: 'plumbFeatTitle', type: 'string', title: 'Plumbing Feature Title' }),
    defineField({ name: 'plumbDescription', type: 'text', title: 'Plumbing Description' }),
    defineField({ name: 'hardVid', type: 'file', title: 'Hardware Video URL' }),
    defineField({ name: 'hardFeatTitle', type: 'string', title: 'Hardware Feature Title' }),
    defineField({ name: 'hardDescription', type: 'text', title: 'Hardware Description' })
  ]
});