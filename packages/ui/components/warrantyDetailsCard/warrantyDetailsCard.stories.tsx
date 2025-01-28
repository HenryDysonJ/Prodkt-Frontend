import { Meta, Story } from '@storybook/react';
import React from 'react';

import { WarrantyDetailsCard, WarrantyDetailsCardProps } from './index';

export default {
  component: WarrantyDetailsCard,
} as Meta;

const Template: Story<WarrantyDetailsCardProps> = (args) => {
  return React.createElement(WarrantyDetailsCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
