import { AmcSettingsIcon } from '@atoms/icons/productSearchIconsLists';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { UploadDetailsLayout, UploadDetailsLayoutProps } from './index';

export default {
  component: UploadDetailsLayout,
} as Meta;

const Template: Story<UploadDetailsLayoutProps> = (args) => {
  return React.createElement(UploadDetailsLayout, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  showIcon: true,
  showHeader: true,
  header: 'AMC Details',
  icon: <AmcSettingsIcon />,
};
