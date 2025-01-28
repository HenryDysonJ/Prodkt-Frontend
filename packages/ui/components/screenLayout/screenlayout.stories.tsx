import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ScreenLayout, ScreenLayoutProps } from './index';

export default {
  component: ScreenLayout,
} as Meta;

const Template: Story<ScreenLayoutProps> = (args) => {
  return React.createElement(ScreenLayout, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
