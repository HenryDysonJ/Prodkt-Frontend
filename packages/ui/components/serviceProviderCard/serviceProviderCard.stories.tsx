import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ServiceProviderCard, ServiceProviderCardProps } from './index';

export default {
  component: ServiceProviderCard,
} as Meta;

const Template: Story<ServiceProviderCardProps> = (args) => {
  return React.createElement(ServiceProviderCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
