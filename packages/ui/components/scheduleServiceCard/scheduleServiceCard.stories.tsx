import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ScheduleServiceCard, ScheduleServiceCardProps } from './index';

export default {
  component: ScheduleServiceCard,
} as Meta;

const Template: Story<ScheduleServiceCardProps> = (args) => {
  return React.createElement(ScheduleServiceCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  handleScheduleServiceDrawer: (data: boolean) => console.log(data),
};
