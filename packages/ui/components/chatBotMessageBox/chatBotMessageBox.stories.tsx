import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ChatBotMessageBox, ChatBotMessageBoxProps } from './index';

export default {
  component: ChatBotMessageBox,
} as Meta;

const Template: Story<ChatBotMessageBoxProps> = (args) => {
  return React.createElement(ChatBotMessageBox, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
