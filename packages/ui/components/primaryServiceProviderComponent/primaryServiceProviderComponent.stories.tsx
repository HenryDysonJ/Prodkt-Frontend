import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PrimaryServiceProviderComponent, PrimaryServiceProviderComponentProps } from './index';

export default {
  component: PrimaryServiceProviderComponent,
} as Meta;

const Template: Story<PrimaryServiceProviderComponentProps> = (args) => {
  return React.createElement(PrimaryServiceProviderComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {};