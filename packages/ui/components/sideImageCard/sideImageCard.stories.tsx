import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SideImageCard, SideImageCardProps } from './index';

export default {
  component: SideImageCard,
} as Meta;

const Template: Story<SideImageCardProps> = (args) => {
  return React.createElement(SideImageCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
