import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ChooseProductCard, ChooseProductCardProps } from './index';

export default {
  component: ChooseProductCard,
} as Meta;

const Template: Story<ChooseProductCardProps> = (args) => {
  return React.createElement(ChooseProductCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  cardDetails: {
    id: 'string',
    category_type_id: 'string',
    nick_name: 'Redmin',
    image_url: null,
    next_service_date: 'Next day',
    is_service_available: true,
  },
  loading: false,
};
export const Secondary = Template.bind({});

Secondary.args = {
  cardDetails: {
    id: 'string',
    category_type_id: 'string',
    nick_name: 'Redmin',
    image_url: null,
    next_service_date: 'Next day',
    is_service_available: true,
  },
  loading: false,
};
