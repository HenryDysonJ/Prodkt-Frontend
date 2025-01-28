import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SecurityDocuments, SecurityDocumentsProps } from './index';

export default {
  component: SecurityDocuments,
} as Meta;

const Template: Story<SecurityDocumentsProps> = (args) => {
  return React.createElement(SecurityDocuments, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
