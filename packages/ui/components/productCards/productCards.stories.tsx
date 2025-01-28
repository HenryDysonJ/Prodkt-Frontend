import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductCards, ProductCardsProps } from './index';

export default {
  component: ProductCards,
} as Meta;

const Template: Story<ProductCardsProps> = (args) => {
  return React.createElement(ProductCards, { ...args });
};

export const Default = Template.bind({});
Default.args = {};