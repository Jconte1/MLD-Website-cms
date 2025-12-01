// schemas/objects/onePageNav.js
import { defineType, defineField } from 'sanity';

export default{
    name: 'onePageNav',
    title: 'Team - One Page Navigation',
    type: 'object',
    fields: [
        {
            name: 'items',
            title: 'Nav Items',
            type: 'array',
            of: [
                {
                    name: 'navItem',
                    title: 'Nav Item',
                    type: 'object',
                    fields: [
                        {
                            name: 'id',
                            title: 'Section ID',
                            type: 'string',
                            description:
                                'Must match the Department "id" (e.g. "executive", "salt-lake"). Used for #anchor links.',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            count: 'items.length',
        },
        prepare({ count }) {
            return {
                title: 'One Page Navigation',
                subtitle: `${count || 0} items`,
            };
        },
    },
};
