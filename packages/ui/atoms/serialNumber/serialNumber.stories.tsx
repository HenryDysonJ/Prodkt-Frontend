import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SerialNumber, SerialNumberProps } from './index';

export default {
  component: SerialNumber,
} as Meta;

const Template: Story<SerialNumberProps> = (args) => {
  return React.createElement(SerialNumber, { ...args });
};

export const Default = Template.bind({});
Default.args = {};