import { IphoneIcon } from '@atoms/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileDetails, ProfileDetailsProps } from './index';

export default {
  component: ProfileDetails,
} as Meta;

const Template: Story<ProfileDetailsProps> = (args) => {
  return React.createElement(ProfileDetails, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  titleName: 'Mobile Number',
  subTitleName: '+91 7709878654',
  icon: <IphoneIcon />,
};
