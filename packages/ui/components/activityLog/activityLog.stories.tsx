import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ActivityLog, ActivityLogProps } from './index';

export default {
  component: ActivityLog,
} as Meta;

const Template: Story<ActivityLogProps> = (args) => {
  return React.createElement(ActivityLog, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
