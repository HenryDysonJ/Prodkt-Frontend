import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CircularProgressBar, CircularProgressProps } from './index';

export default {
  component: CircularProgressBar,
} as Meta;

const Template: Story<CircularProgressProps> = (args) => {
  return React.createElement(CircularProgressBar, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  title: 'Upload Documents',
  subTitle: 'Next: Product Name',
  currentStep: 1,
  maxStep: 3,
  size: 54,
  thickness: 4,
};
