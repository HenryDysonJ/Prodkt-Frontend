import { Meta, Story } from '@storybook/react';
import React from 'react';

import { TextfieldButton, TextfieldButtonProps } from './index';

export default {
  component: TextfieldButton,
} as Meta;

const Template: Story<TextfieldButtonProps> = (args) => {
  return React.createElement(TextfieldButton, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
