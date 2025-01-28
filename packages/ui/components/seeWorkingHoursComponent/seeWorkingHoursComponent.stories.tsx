import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SeeWorkingHoursComponent, SeeWorkingHoursComponentProps } from './index';

export default {
  component: SeeWorkingHoursComponent,
} as Meta;

const Template: Story<SeeWorkingHoursComponentProps> = (args) => {
  return React.createElement(SeeWorkingHoursComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {};