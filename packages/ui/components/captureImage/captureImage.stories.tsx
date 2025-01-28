import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CaptureImage, CaptureImageProps } from './index';

export default {
  component: CaptureImage,
} as Meta;

const Template: Story<CaptureImageProps> = (args) => {
  return React.createElement(CaptureImage, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
