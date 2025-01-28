import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SwiperComponent, SwiperComponentProps } from './index';

export default {
  component: SwiperComponent,
} as Meta;

const Template: Story<SwiperComponentProps> = (args) => {
  return React.createElement(SwiperComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
