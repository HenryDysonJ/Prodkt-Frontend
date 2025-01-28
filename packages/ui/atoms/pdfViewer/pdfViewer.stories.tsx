import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PdfViewer, PdfViewerProps } from './index';

export default {
  component: PdfViewer,
} as Meta;

const Template: Story<PdfViewerProps> = (args) => {
  return React.createElement(PdfViewer, { ...args });
};

export const Default = Template.bind({});
Default.args = {};