import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FooterButtonComponent, FooterButtonComponentProps } from './index';

export default {
  component: FooterButtonComponent,
} as Meta;

const Template: Story<FooterButtonComponentProps> = (args) => {
  return React.createElement(FooterButtonComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  leftButton: 'Previous',
  rightButton: 'Next',
  showLeftBtn: true,
  showRightBtn: true,
};
