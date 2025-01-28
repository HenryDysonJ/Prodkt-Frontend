import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AmcDetailsCard, AmcDetailsCardProps } from './index';

export default {
  component: AmcDetailsCard,
} as Meta;

const Template: Story<AmcDetailsCardProps> = (args) => {
  return React.createElement(AmcDetailsCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
