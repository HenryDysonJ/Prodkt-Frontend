import { Meta, Story } from '@storybook/react';
import React from 'react';

import { UploadDocumentType, UploadDocumentTypeProps } from './index';

export default {
  component: UploadDocumentType,
} as Meta;

const Template: Story<UploadDocumentTypeProps> = (args) => {
  return React.createElement(UploadDocumentType, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
