import PurchaseLabel from '@assets/purchaseLabel.svg';
import { EmptyBoxIcon, GreenToolsBoxIcon } from '@atoms/icons/productSearchIconsLists';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DropdownCard, DropdownCardProps } from './index';

export default {
  component: DropdownCard,
} as Meta;

const Template: Story<DropdownCardProps> = (args) => {
  return React.createElement(DropdownCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  header: 'AMC',
  subHeader: 'Purchase AMC',
  icon: <GreenToolsBoxIcon />,
  background: PurchaseLabel,
  noProductText: 'No AMC coverage for this product',
  noProductImage: <EmptyBoxIcon />,
};
