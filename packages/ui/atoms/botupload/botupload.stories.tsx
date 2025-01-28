import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BotUpload, BotUploadProps } from './index';

export default {
  component: BotUpload,
} as Meta;

const Template: Story<BotUploadProps> = (args) => {
  return React.createElement(BotUpload, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
