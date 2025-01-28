import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BookingSlot, BookingSlotProps } from './index';

export default {
  component: BookingSlot,
} as Meta;

const Template: Story<BookingSlotProps> = (args) => {
  return React.createElement(BookingSlot, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
