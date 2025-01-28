import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductAdded, ProductAddedProps } from './index';

export default {
  component: ProductAdded,
} as Meta;

const Template: Story<ProductAddedProps> = (args) => {
  return React.createElement(ProductAdded, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
