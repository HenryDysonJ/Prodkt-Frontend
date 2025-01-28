import { Meta, Story } from '@storybook/react';
import React from 'react';

import { InsuranceDetailsCard, InsuranceDetailsCardProps } from './index';

export default {
  component: InsuranceDetailsCard,
} as Meta;

const Template: Story<InsuranceDetailsCardProps> = (args) => {
  return React.createElement(InsuranceDetailsCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
