import { CloseIcon } from '@atoms/icons';
import { ScanIcon } from '@atoms/icons/scanIcon';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CustomIconButton, ModalHeader } from '..';
import { DrawerComponent, DrawerComponentProps } from './index';

export default {
  component: DrawerComponent,
} as Meta;

const Template: Story<DrawerComponentProps> = (args) => {
  return React.createElement(DrawerComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  showHeader: true,
  headerComponent: <ModalHeader icon={<CloseIcon />} showIcon={true} showHeader={true} headerText="Add Product" />,
  children: <CustomIconButton icon={<ScanIcon />} iconBottomText="Scan Invoice" showIcon={true} showText={true} />,
};
