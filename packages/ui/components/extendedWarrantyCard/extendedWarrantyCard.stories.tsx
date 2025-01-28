import Bajaj from '@assets/bajaj.png';
import { RightCircleIcon } from '@atoms/icons/productSearchIconsLists';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ExtendedWarrantyCard, ExtendedWarrantyCardProps } from './index';

export default {
  component: ExtendedWarrantyCard,
} as Meta;

const Template: Story<ExtendedWarrantyCardProps> = (args) => {
  return React.createElement(ExtendedWarrantyCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  cardData: {
    image: Bajaj,
    title: 'Bajaj Fincorp Warranty',
    subTitle: '12 Jan, 2022 - 12 Jan, 2023',
    icon: RightCircleIcon({}),
    extendedWarranty: true,
  },
};
