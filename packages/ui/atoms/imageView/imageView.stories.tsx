import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ImageView, ImageViewProps } from './index';

export default {
  component: ImageView,
} as Meta;

const Template: Story<ImageViewProps> = (args) => {
  return React.createElement(ImageView, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
