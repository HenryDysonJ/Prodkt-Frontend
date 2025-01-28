import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Switch, SwitchProps } from './index';

export default {
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => {
  return React.createElement(Switch, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  checked: true,
  disabled: false,
};
