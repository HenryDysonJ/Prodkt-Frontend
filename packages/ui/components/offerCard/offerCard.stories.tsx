import { Meta, Story } from '@storybook/react';
import React from 'react';

import { OfferCard, OfferCardProps } from './index';

export default {
  component: OfferCard,
} as Meta;

const Template: Story<OfferCardProps> = (args) => {
  return React.createElement(OfferCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  offerData: [
    {
      bg_color: 'transparent linear-gradient(69deg, #C63C77 0%, #ECA798 100%) 0% 0% no-repeat padding-box',
      title: "Vivek's Mega Super Sale",
      content: 'Get 2 Year free extended warranty on your new AMC',
      btn_name: 'Explore Now',
      btn_text_color: '#D75257',
      btn_bg: '#FFFFFF',
      image_url: 'https://prodkt-dev.objectstore.e2enetworks.net/offer_1_1683022395405.png',
      redirect_url: '',
      title_color: '#FFFFFF',
      content_color: '#FFFFFF',
      img_padding_left: '',
      img_padding_right: '',
      img_padding_top: '24px',
    },
    {
      bg_color: 'transparent linear-gradient(71deg, #D1503B 0%, #E99377 100%) 0% 0% no-repeat padding-box',
      title: 'Best In Offer Zone',
      content: '60% discount on Extended Warranty on home appliances',
      btn_name: 'Explore Now',
      btn_text_color: '#D2543F',
      btn_bg: '#FFFFFF',
      image_url: 'https://prodkt-dev.objectstore.e2enetworks.net/offer_2_1683022395197.png',
      redirect_url: 'null',
      title_color: '#FFFFFF',
      content_color: '#FFFFFF',
      img_padding_left: '',
      img_padding_right: '17px',
      img_padding_top: '',
    },
  ],
};
