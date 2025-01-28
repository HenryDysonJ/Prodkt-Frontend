import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DocumentUploadComponent, DocumentUploadComponentProps } from './index';

export default {
  component: DocumentUploadComponent,
} as Meta;

const Template: Story<DocumentUploadComponentProps> = (args) => {
  return React.createElement(DocumentUploadComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  headerText: 'Upload warranty document',
  text: 'Click to browse and upload',
  file: '',
};
