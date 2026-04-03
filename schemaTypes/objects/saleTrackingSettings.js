export default {
  name: 'saleTrackingSettings',
  title: 'Sale Tracking Settings',
  type: 'object',
  fields: [
    { name: 'viewEvent', title: 'Page View Event Name', type: 'string', initialValue: 'sale_view' },
    {
      name: 'registerClickEvent',
      title: 'Register Click Event Name',
      type: 'string',
      initialValue: 'sale_register_click',
    },
    {
      name: 'stepGuestsCompleteEvent',
      title: 'Guests Step Complete Event Name',
      type: 'string',
      initialValue: 'sale_step_guests_complete',
    },
    {
      name: 'stepDetailsCompleteEvent',
      title: 'Details Step Complete Event Name',
      type: 'string',
      initialValue: 'sale_step_details_complete',
    },
    {
      name: 'submitEvent',
      title: 'Submit Event Name',
      type: 'string',
      initialValue: 'sale_registration_submit',
    },
    {
      name: 'successEvent',
      title: 'Success Event Name',
      type: 'string',
      initialValue: 'sale_registration_success',
    },
    {
      name: 'errorEvent',
      title: 'Error Event Name',
      type: 'string',
      initialValue: 'sale_registration_error',
    },
  ],
};
