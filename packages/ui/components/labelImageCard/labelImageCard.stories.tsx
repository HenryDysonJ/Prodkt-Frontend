import { ViewDocumentIcon } from '@atoms/icons/productSearchIconsLists';
import AdityaBirla from '@core/ui/assets/adityaBirla.png';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { LabelImageCard, LabelImageCardProps } from './index';

export default {
  component: LabelImageCard,
} as Meta;

const Template: Story<LabelImageCardProps> = (args) => {
  return React.createElement(LabelImageCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  cardData: {
    image: AdityaBirla,
    providerName: 'Aditya Birla Service',
    date: '12 Jan, 2022 - 12 Jan, 2023',
    viewText: 'View AMC Document',
    viewIcon: ViewDocumentIcon({}),
    labelText: 'AMC',
  },
};
