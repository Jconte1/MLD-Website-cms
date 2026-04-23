export default {
  name: 'saleSettings',
  title: 'Sale Settings',
  type: 'document',
  fields: [
    {
      name: 'activeEvent',
      title: 'Active Sale Event',
      type: 'reference',
      to: [{ type: 'saleEvent' }],
      validation: (Rule) => Rule.required(),
      description: 'This event is used for /sale redirect.',
    },
    {
      name: 'announcementBar',
      title: 'Global Sale Announcement Bar',
      type: 'object',
      description: 'Displays directly under the main navigation across the site.',
      fields: [
        {
          name: 'enabled',
          title: 'Show Announcement Bar',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'badgeText',
          title: 'Badge Text',
          type: 'string',
          description: 'Short label shown on the left side of the bar.',
        },
        {
          name: 'message',
          title: 'Announcement Text',
          type: 'text',
          rows: 2,
          description: 'Main message shown in the center of the bar.',
        },
        {
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
          description: 'Text shown in the CTA area on the right.',
        },
        {
          name: 'ctaUrl',
          title: 'CTA URL',
          type: 'string',
          description: 'Optional. Accepts a full URL like https://example.com or an internal path like /sale.',
          validation: (Rule) =>
            Rule.custom((value) => {
              if (!value) return true;
              if (
                /^https?:\/\/\S+$/i.test(value) ||
                /^\/[^\s]*$/.test(value)
              ) {
                return true;
              }
              return 'Enter a full URL starting with http/https or an internal path starting with /.';
            }),
        },
      ],
    },
  ],
};
