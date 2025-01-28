import { ScanIcon } from '@atoms/icons/scanIcon';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CustomIconButton, CustomIconButtonProps } from './index';

export default {
  component: CustomIconButton,
} as Meta;

const Template: Story<CustomIconButtonProps> = (args) => {
  return React.createElement(CustomIconButton, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  icon: <ScanIcon />,
  iconBottomText: 'Search and Add',
  showIcon: true,
  showText: true,
};
