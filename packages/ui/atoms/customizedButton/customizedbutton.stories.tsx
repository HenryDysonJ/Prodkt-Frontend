import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CustomizedButton, CustomizedButtonProps } from './index';

export default {
  component: CustomizedButton,
} as Meta;

const Template: Story<CustomizedButtonProps> = (args) => {
  return React.createElement(CustomizedButton, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
