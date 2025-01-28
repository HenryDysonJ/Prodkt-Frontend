import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BotUploadDocument, BotUploadDocumentProps } from './index';

export default {
  component: BotUploadDocument,
} as Meta;

const Template: Story<BotUploadDocumentProps> = (args) => {
  return React.createElement(BotUploadDocument, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
