import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileUpload, ProfileUploadProps } from './index';

export default {
  component: ProfileUpload,
} as Meta;

const Template: Story<ProfileUploadProps> = (args) => {
  return React.createElement(ProfileUpload, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  url: 'http://www.jquery-az.com/html/images/banana.jpg',
  altText: 'suriya',
  showIcon: true,
  height: '80px',
  width: '80px',
  fontSize: '40px',
};
