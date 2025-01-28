import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CommonSkeleton, CommonSkeletonProps } from './index';

export default {
  component: CommonSkeleton,
} as Meta;

const Template: Story<CommonSkeletonProps> = (args) => {
  return React.createElement(CommonSkeleton, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
