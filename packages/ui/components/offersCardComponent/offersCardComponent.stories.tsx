import { Meta, Story } from '@storybook/react';
import React from 'react';

import { OffersCardComponent, OffersCardComponentProps } from './index';

export default {
  component: OffersCardComponent,
} as Meta;

const Template: Story<OffersCardComponentProps> = (args) => {
  return React.createElement(OffersCardComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
