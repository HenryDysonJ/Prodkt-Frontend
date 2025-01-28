import { Meta, Story } from '@storybook/react';
import React from 'react';

import { UploadProductFile, UploadProductFileProps } from './index';

export default {
  component: UploadProductFile,
} as Meta;

const Template: Story<UploadProductFileProps> = (args) => {
  return React.createElement(UploadProductFile, { ...args });
};

export const Default = Template.bind({});
Default.args = {};