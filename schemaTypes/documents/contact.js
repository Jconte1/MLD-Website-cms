export default {
    name: 'contact',
    title: 'Contact Info',
    type: 'document',
    fields: [
        {
            name: 'seo',
            type: 'seo',
            title: 'SEO Settings'
        },
        {
            name: 'addresses',
            title: 'Addresses',
            type: 'array',
            of: [{ type: 'address' }],
        },
        {
            name: 'phones',
            title: 'Phone Numbers',
            type: 'array',
            of: [{ type: 'phone' }],
        },
        {
            name: 'emails',
            title: 'Emails',
            type: 'array',
            of: [{ type: 'emails' }],
        },
        {
            name: 'leadForm',
            title: 'Lead Form',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'Form Title',

                },
                {
                    name: 'subTitle',
                    type: 'string',
                    title: 'Form Subtitle',
                },
            ],
        },
    ],
};
