import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CustomChatBot, CustomChatBotProps } from './index';

export default {
  component: CustomChatBot,
} as Meta;

const Template: Story<CustomChatBotProps> = (args) => {
  return React.createElement(CustomChatBot, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  message: 'I want to know about AMC service provider details',
  messageTime: '10:41 AM',
  // receivedMessage: 'Your AMC service provider is Bajaj Finserv Privated limited',
  // receivedMessageTime: '10:41 AM',
  data: [
    {
      id: 1,
      question: 'I want to know about AMC service details',
    },
    {
      id: 2,
      message: 'I have issues regarding AMC documents',
    },
    {
      id: 3,
      message: 'Any other queries',
    },
  ],
};
