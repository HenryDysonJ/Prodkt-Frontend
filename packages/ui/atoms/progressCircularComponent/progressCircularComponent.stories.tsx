import { OrangeToolsIcon } from '@atoms/icons/productSearchIconsLists';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProgressCircularComponent, ProgressCircularComponentProps } from './index';

export default {
  component: ProgressCircularComponent,
} as Meta;

const Template: Story<ProgressCircularComponentProps> = (args) => {
  return React.createElement(ProgressCircularComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  currentStep: 3,
  maxStep: 5,
  size: 76,
  thickness: 4,
  icon: OrangeToolsIcon({}),
};
