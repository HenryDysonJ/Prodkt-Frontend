import { FileUploadIcon } from '@atoms/icons/productSearchIconsLists';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DocumentUploadUiComponent, DocumentUploadUiComponentProps } from './index';

export default {
  component: DocumentUploadUiComponent,
} as Meta;

const Template: Story<DocumentUploadUiComponentProps> = (args) => {
  return React.createElement(DocumentUploadUiComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  icon: <FileUploadIcon />,
  text: 'Upload Document',
};
