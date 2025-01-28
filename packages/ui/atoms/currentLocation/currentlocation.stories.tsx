import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CurrentLocation, CurrentLocationProps } from './index';

export default {
  component: CurrentLocation,
} as Meta;

const Template: Story<CurrentLocationProps> = (args) => {
  return React.createElement(CurrentLocation, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
