import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ActionRequiredCard, ActionRequiredCardProps } from './index';

export default {
  component: ActionRequiredCard,
} as Meta;

const Template: Story<ActionRequiredCardProps> = (args) => {
  return React.createElement(ActionRequiredCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
