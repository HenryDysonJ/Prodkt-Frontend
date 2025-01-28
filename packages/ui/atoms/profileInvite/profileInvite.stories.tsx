import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileInvite, ProfileInviteProps } from './index';

export default {
  component: ProfileInvite,
} as Meta;

const Template: Story<ProfileInviteProps> = (args) => {
  return React.createElement(ProfileInvite, { ...args });
};

export const Default = Template.bind({});
Default.args = {};