import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductCardDetails, ProductCardDetailsProps } from './index';

export default {
  component: ProductCardDetails,
} as Meta;

const Template: Story<ProductCardDetailsProps> = (args) => {
  return React.createElement(ProductCardDetails, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  header: 'Product Details',
  data: [
    {
      label: 'Date of Purchase',
      value: '25-Mar-2023',
    },
    {
      label: 'Serial Number',
      value: '0254861475',
    },
    {
      label: 'Mode of Purchase',
      value: 'offline',
    },
    {
      label: 'Location',
      value: 'Neelangarai, Chennai, Tamilnadu',
    },
  ],
};
