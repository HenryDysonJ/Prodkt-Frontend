import { Meta, Story } from '@storybook/react';
import React from 'react';

import { EditDocument, EditDocumentProps } from './index';

export default {
  component: EditDocument,
} as Meta;

const Template: Story<EditDocumentProps> = (args) => {
  return React.createElement(EditDocument, { ...args });
};

export const Default = Template.bind({});
Default.args = {};