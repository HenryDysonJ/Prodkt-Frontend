import { Meta, Story } from '@storybook/react';
import React from 'react';

import { InstallPwaDrawer, InstallPwaDrawerProps } from './index';

export default {
  component: InstallPwaDrawer,
} as Meta;

const Template: Story<InstallPwaDrawerProps> = (args) => {
  return React.createElement(InstallPwaDrawer, { ...args });
};

export const Default = Template.bind({});
Default.args = {};