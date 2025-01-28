import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CorbanCalculateCard, CorbanCalculateCardProps } from './index';

export default {
  component: CorbanCalculateCard,
} as Meta;

const Template: Story<CorbanCalculateCardProps> = (args) => {
  return React.createElement(CorbanCalculateCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};