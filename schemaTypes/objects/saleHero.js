export default {
  name: 'saleHero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'enabled',
      title: 'Show Section',
      type: 'boolean',
      initialValue: true,
    },
    { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
    { name: 'title', title: 'Hero Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'text' },
    { name: 'dateLabel', title: 'Date Label', type: 'string' },
    { name: 'timeLabel', title: 'Time Label', type: 'string' },
    { name: 'locationLabel', title: 'Location Label', type: 'string' },
    { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
    { name: 'primaryCtaText', title: 'Primary CTA Text', type: 'string' },
    { name: 'primaryCtaHref', title: 'Primary CTA URL (optional)', type: 'url' },
  ],
};
