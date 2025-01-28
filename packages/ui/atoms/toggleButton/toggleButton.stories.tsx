import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ToggleButton, ToggleButtonProps } from './index';

export default {
  component: ToggleButton,
} as Meta;

const Template: Story<ToggleButtonProps> = (args) => {
  return React.createElement(ToggleButton, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      value: 1,
      label: 'months',
    },
    {
      value: 2,
      label: 'year',
    },
  ],
};
