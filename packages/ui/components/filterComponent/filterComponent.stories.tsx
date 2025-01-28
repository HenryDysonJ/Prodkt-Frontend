import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FilterComponent, FilterComponentProps } from './index';

export default {
  component: FilterComponent,
} as Meta;

const Template: Story<FilterComponentProps> = (args) => {
  return React.createElement(FilterComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
