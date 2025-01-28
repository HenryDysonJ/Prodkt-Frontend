import { Meta, Story } from '@storybook/react';
import React from 'react';

import { OtpInputButton, OtpInputButtonProps } from './index';

export default {
  component: OtpInputButton,
} as Meta;

const Template: Story<OtpInputButtonProps> = (args) => {
  return React.createElement(OtpInputButton, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
