export default {
  name: 'saleEvent',
  title: 'Sale Event',
  type: 'document',
  fields: [
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings',
    },
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Event Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'registrationSettings',
      title: 'Registration Settings',
      type: 'saleRegistrationSettings',
    },
    {
      name: 'trackingSettings',
      title: 'Tracking Settings',
      type: 'saleTrackingSettings',
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'saleHero' },
        { type: 'saleInfoSection' },
        { type: 'saleSpecialsSection' },
        { type: 'saleInstagramSection' },
        { type: 'saleMapSection' },
        { type: 'saleVideoSection' },
        { type: 'saleRegisterCta' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || 'Sale Event',
        subtitle: subtitle || 'Sale Event',
      };
    },
  },
};
