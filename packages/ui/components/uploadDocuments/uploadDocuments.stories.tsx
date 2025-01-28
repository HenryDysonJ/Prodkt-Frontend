import { Meta, Story } from '@storybook/react';
import React from 'react';

import { UploadDocuments, UploadDocumentsProps } from './index';

export default {
  component: UploadDocuments,
} as Meta;

const Template: Story<UploadDocumentsProps> = (args) => {
  return React.createElement(UploadDocuments, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
