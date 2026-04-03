export default {
  name: 'saleRegistrationSettings',
  title: 'Sale Registration Settings',
  type: 'object',
  fields: [
    {
      name: 'maxGuests',
      title: 'Max Guests',
      type: 'number',
      initialValue: 2,
      validation: (Rule) => Rule.required().min(1).max(2),
    },
    {
      name: 'guestStepTitle',
      title: 'Guest Step Title',
      type: 'string',
      initialValue: 'Guest Information',
    },
    {
      name: 'detailsStepTitle',
      title: 'Details Step Title',
      type: 'string',
      initialValue: 'Registration Details',
    },
    {
      name: 'confirmStepTitle',
      title: 'Confirm Step Title',
      type: 'string',
      initialValue: 'Confirm Registration',
    },
    {
      name: 'smsConsentLabel',
      title: 'SMS Consent Label',
      type: 'text',
      initialValue:
        'I agree to receive communication to this number via text message. Message and data rates may apply.',
    },
    {
      name: 'captureUtm',
      title: 'Capture UTM + Referrer',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      initialValue: 'Thanks for registering. We look forward to seeing you at the sale.',
    },
  ],
};
