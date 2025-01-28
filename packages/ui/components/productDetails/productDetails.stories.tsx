import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductDetails, ProductDetailsProps } from './index';

export default {
  component: ProductDetails,
} as Meta;

const Template: Story<ProductDetailsProps> = (args) => {
  return React.createElement(ProductDetails, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
