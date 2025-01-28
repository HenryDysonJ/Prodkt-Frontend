import { Meta, Story } from '@storybook/react';
import React from 'react';

import { UseLocation, UseLocationProps } from './index';

export default {
  component: UseLocation,
} as Meta;

const Template: Story<UseLocationProps> = (args) => {
  return React.createElement(UseLocation, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
