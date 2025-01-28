import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ArchivedProductCard, ArchivedProductCardProps } from './index';

export default {
  component: ArchivedProductCard,
} as Meta;

const Template: Story<ArchivedProductCardProps> = (args) => {
  return React.createElement(ArchivedProductCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
