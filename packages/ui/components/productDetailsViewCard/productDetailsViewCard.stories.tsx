import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductDetailsViewCard, ProductDetailsViewCardProps } from './index';

export default {
  component: ProductDetailsViewCard,
} as Meta;

const Template: Story<ProductDetailsViewCardProps> = (args) => {
  return React.createElement(ProductDetailsViewCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  loading: false,
};
