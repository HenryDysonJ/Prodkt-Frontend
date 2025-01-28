import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Drawer, InSightsProps } from './index';

export default {
  component: Drawer,
} as Meta;

const Template: Story<InSightsProps> = (args) => {
  return React.createElement(Drawer, { ...args });
};

export const Default = Template.bind({});
Default.args = {};