import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductProfile, ProductProfileProps } from './index';

export default {
  component: ProductProfile,
} as Meta;

const Template: Story<ProductProfileProps> = (args) => {
  return React.createElement(ProductProfile, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
