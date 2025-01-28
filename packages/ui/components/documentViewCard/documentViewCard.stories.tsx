import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DocumentViewCard, DocumentViewCardProps } from './index';

export default {
  component: DocumentViewCard,
} as Meta;

const Template: Story<DocumentViewCardProps> = (args) => {
  return React.createElement(DocumentViewCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
