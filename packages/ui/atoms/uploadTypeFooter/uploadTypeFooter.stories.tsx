import { Meta, Story } from '@storybook/react';
import React from 'react';

import { UploadTypeFooter, UploadTypeFooterProps } from './index';

export default {
  component: UploadTypeFooter,
} as Meta;

const Template: Story<UploadTypeFooterProps> = (args) => {
  return React.createElement(UploadTypeFooter, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
