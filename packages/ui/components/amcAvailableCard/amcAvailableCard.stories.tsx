import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AmcAvailableCard, AmcAvailableCardProps } from './index';

export default {
  component: AmcAvailableCard,
} as Meta;

const Template: Story<AmcAvailableCardProps> = (args) => {
  return React.createElement(AmcAvailableCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
