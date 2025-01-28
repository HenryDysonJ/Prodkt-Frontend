import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ScrollCard, ScrollCardProps } from './index';

export default {
  component: ScrollCard,
} as Meta;

const Template: Story<ScrollCardProps> = (args) => {
  return React.createElement(ScrollCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
