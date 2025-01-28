import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductSelectedCard, ProductSelectedCardProps } from './index';

export default {
  component: ProductSelectedCard,
} as Meta;

const Template: Story<ProductSelectedCardProps> = (args) => {
  return React.createElement(ProductSelectedCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
