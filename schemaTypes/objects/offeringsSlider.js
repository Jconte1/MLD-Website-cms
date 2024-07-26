export default {
    name: 'offeringsSlider',
    type: 'object',
    title: 'Offerings Slider',
    fields: [
      { name: 'offeringName', type: 'string', title: 'Offering Name' },
      {
        name: 'offeringsSlider',
        type: 'array',
        title: 'Offerings Slider',
        of: [{ type: 'offeringsSliderItem' }],
      },
    ],
  };
  