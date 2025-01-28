import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PostponeScheduledServiceComponent, PostponeScheduledServiceComponentProps } from './index';

export default {
  component: PostponeScheduledServiceComponent,
} as Meta;

const Template: Story<PostponeScheduledServiceComponentProps> = (args) => {
  return React.createElement(PostponeScheduledServiceComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {};