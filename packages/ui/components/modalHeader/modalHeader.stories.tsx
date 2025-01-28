import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ModalHeader, ModalHeaderProps } from './index';

export default {
  component: ModalHeader,
} as Meta;

const Template: Story<ModalHeaderProps> = (args) => {
  return React.createElement(ModalHeader, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
