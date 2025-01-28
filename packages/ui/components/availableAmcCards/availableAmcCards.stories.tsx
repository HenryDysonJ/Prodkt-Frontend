import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AvailableAmcCards, AvailableAmcCardsProps } from './index';

export default {
  component: AvailableAmcCards,
} as Meta;

const Template: Story<AvailableAmcCardsProps> = (args) => {
  return React.createElement(AvailableAmcCards, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
