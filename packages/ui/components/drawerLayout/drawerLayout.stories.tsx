import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DrawerLayout, DrawerLayoutProps } from './index';

export default {
  component: DrawerLayout,
} as Meta;

const Template: Story<DrawerLayoutProps> = (args) => {
  return React.createElement(DrawerLayout, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
