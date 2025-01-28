import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AddedProductCard, AddedProductCardProps } from './index';

export default {
  component: AddedProductCard,
} as Meta;

const Template: Story<AddedProductCardProps> = (args) => {
  return React.createElement(AddedProductCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};