import { BackCircleIcon, MoreIcon, ShareIcon } from '@core/ui/atoms/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PageHeader, pageHeaderProps } from './index';

export default {
  component: PageHeader,
} as Meta;

const Template: Story<pageHeaderProps> = (args) => {
  return React.createElement(PageHeader, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  showIcon: true,
  icon: <BackCircleIcon rootStyle={{color: 'text.A100'}} />,
  headerText: 'Product Details',
  header: true,
  showShareIcon: true,
  shareIcon: <ShareIcon />,
  showMoreIcon: true,
  moreIcon: <MoreIcon />,
};
