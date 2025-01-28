import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DailogModal, DailogModalProps } from './index';

export default {
  component: DailogModal,
} as Meta;

const Template: Story<DailogModalProps> = (args) => {
  return React.createElement(DailogModal, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
