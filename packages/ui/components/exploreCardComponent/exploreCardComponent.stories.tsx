import { RightBlueArrow } from '@atoms/icons/productSearchIconsLists';
import Bajaj from '@core/ui/assets/bajaj.png';
import Reliance from '@core/ui/assets/reliance.png';
import Samsung from '@core/ui/assets/samsung.png';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ExploreCardComponent, ExploreCardComponentProps } from './index';

export default {
  component: ExploreCardComponent,
} as Meta;

const Template: Story<ExploreCardComponentProps> = (args) => {
  return React.createElement(ExploreCardComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  expire: true,
  headerData: {
    header: "Explore AMC's",
    seeText: 'See all',
    icon: RightBlueArrow({}),
  },
  cardData: [
    {
      image: Samsung,
      prviouslyBought: true,
      brand: 'Samsung AMC',
      benefits: '4 Benefits',
      buttonText: 'Renew Now',
    },
    {
      image: Reliance,
      prviouslyBought: false,
      brand: 'Reliance AMC Service',
      benefits: '2 Benefits',
      buttonText: 'Buy Now',
    },
    {
      image: Bajaj,
      prviouslyBought: false,
      brand: 'Bajaj Finserv',
      benefits: '3 Benefits',
      buttonText: 'Buy Now',
    },
  ],
};
