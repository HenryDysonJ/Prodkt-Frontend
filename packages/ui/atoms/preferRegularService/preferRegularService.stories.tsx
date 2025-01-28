import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PreferRegularService, PreferRegularServiceProps } from './index';

export default {
  component: PreferRegularService,
} as Meta;

const Template: Story<PreferRegularServiceProps> = (args) => {
  return React.createElement(PreferRegularService, { ...args });
};

export const Default = Template.bind({});
Default.args = {};