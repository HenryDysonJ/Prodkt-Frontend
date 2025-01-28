import { StepsFinish } from '@atoms/icons/productSearchIconsLists';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { UploadModalHeader, UploadModalHeaderProps } from './index';

export default {
  component: UploadModalHeader,
} as Meta;

const Template: Story<UploadModalHeaderProps> = (args) => {
  return React.createElement(UploadModalHeader, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  header: 'Upload Documents',
  subHeader: 'Next: Product Name',
  showIcon: true,
  showHeaderText: true,
  icon: <StepsFinish />,
};
