import { Meta, Story } from '@storybook/react';
import React from 'react';

import { VerticalTab, VerticalTabProps } from './index';

export default {
  component: VerticalTab,
} as Meta;

const Template: Story<VerticalTabProps> = (args) => {
  return React.createElement(VerticalTab, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
