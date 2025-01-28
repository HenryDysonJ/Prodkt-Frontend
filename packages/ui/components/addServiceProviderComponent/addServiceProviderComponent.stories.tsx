import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AddServiceProviderComponent, AddServiceProviderComponentProps } from './index';

export default {
  component: AddServiceProviderComponent,
} as Meta;

const Template: Story<AddServiceProviderComponentProps> = (args) => {
  return React.createElement(AddServiceProviderComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {};