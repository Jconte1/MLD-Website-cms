export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter a unique title for the page, ideally including relevant keywords.',
      validation: Rule => Rule.max(60).warning('Long titles may be truncated by search engines.')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Provide a brief description (150-160 characters) of the page content.',
      validation: Rule => Rule.max(160).warning('Long descriptions may be truncated by search engines.')
    },
    // {
    //   name: 'canonicalUrl',
    //   title: 'Canonical URL',
    //   type: 'url',
    //   description: 'Enter the main URL for this page to avoid duplicate content issues.'
    // },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Upload an image for social sharing (1200x630 px recommended).',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Enter a custom title for social sharing (optional). Defaults to the main title if left blank.',
    },
    {
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      description: 'Provide a brief description for social sharing (optional). Defaults to the main description if left blank.',
      validation: Rule => Rule.max(160).warning('Long descriptions may be truncated by social platforms.')
    },
    {
      name: 'ogType',
      title: 'Open Graph Type',
      type: 'string',
      description: 'Select the type of content for social sharing. Typically "website" or "article".',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'Article', value: 'article' },
          { title: 'Product', value: 'product' }
        ]
      },
      initialValue: 'website'
    },
    {
      name: 'locale',
      title: 'Locale',
      type: 'string',
      description: 'Specify the language code (e.g., en_US for US English).',
      initialValue: 'en_US'
    }
  ]
};