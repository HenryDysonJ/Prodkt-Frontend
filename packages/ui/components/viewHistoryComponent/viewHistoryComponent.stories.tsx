import { OrangeToolsIcon } from '@atoms/icons/productSearchIconsLists';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ViewHistoryComponent, ViewHistoryComponentProps } from './index';

export default {
  component: ViewHistoryComponent,
} as Meta;

const Template: Story<ViewHistoryComponentProps> = (args) => {
  return React.createElement(ViewHistoryComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  cardData: {
    currentStep: 4,
    maxStep: 5,
    size: 76,
    thickness: 4,
    icon: <OrangeToolsIcon />,
    text: 'Yay! You have increased your resale value.',
    buttonText: 'View Service History',
    viewServiceHistory: true,
  },
};
