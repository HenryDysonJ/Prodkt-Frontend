import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CheckBox, CheckBoxProps } from './index';

export default {
  component: CheckBox,
} as Meta;

const Template: Story<CheckBoxProps> = (args) => {
  return React.createElement(CheckBox, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
