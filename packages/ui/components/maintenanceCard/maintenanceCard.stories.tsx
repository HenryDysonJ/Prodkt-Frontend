import { Meta, Story } from '@storybook/react';
import React from 'react';

import { MaintenanceCard, MaintenanceCardProps } from './index';

export default {
  component: MaintenanceCard,
} as Meta;

const Template: Story<MaintenanceCardProps> = (args) => {
  return React.createElement(MaintenanceCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
