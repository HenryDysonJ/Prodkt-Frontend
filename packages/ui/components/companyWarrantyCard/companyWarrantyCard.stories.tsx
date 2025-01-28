import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CompanyWarrantyCard, CompanyWarrantyCardProps } from './index';

export default {
  component: CompanyWarrantyCard,
} as Meta;

const Template: Story<CompanyWarrantyCardProps> = (args) => {
  return React.createElement(CompanyWarrantyCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
