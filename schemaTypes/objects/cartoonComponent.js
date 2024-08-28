import { customBlock } from "../../component/customBlock";

export default{
    name: 'cartoonComponent',
    type: 'object',
    title: 'Cartoon Component',
    fields: [
      { name: 'cartoonTitle', type: 'string', title: 'Cartoon Title' },
      { name: 'cartoonDescription', type: 'array', title: 'Cartoon Description', of: [customBlock] },
      { name: 'pic1', type: 'image', title: 'Picture 1' },
      { name: 'picTitle1', type: 'string', title: 'Picture 1 Title' },
      { name: 'pic2', type: 'image', title: 'Picture 2' },
      { name: 'picTitle2', type: 'string', title: 'Picture 2 Title' },
      { name: 'pic3', type: 'image', title: 'Picture 3' },
      { name: 'picTitle3', type: 'string', title: 'Picture 3 Title' },
      { name: 'pic4', type: 'image', title: 'Picture 4' },
      { name: 'picTitle4', type: 'string', title: 'Picture 4 Title' }
    ]
  };