import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ScheduleServiceMaintenance, ScheduleServiceMaintenanceProps } from './index';

export default {
  component: ScheduleServiceMaintenance,
} as Meta;

const Template: Story<ScheduleServiceMaintenanceProps> = (args) => {
  return React.createElement(ScheduleServiceMaintenance, { ...args });
};

export const Default = Template.bind({});
Default.args = {};