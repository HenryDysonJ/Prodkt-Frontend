import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Modal, ModalProps } from './index';

export default {
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
  return React.createElement(Modal, { ...args });
};

export const Default = Template.bind({});
Default.args = {};