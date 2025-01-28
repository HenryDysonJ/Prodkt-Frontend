import { Meta, Story } from '@storybook/react';
import React from 'react';

import { HomeTapCard, HomeTapCardProps } from './index';

export default {
  component: HomeTapCard,
} as Meta;

const Template: Story<HomeTapCardProps> = (args) => {
  return React.createElement(HomeTapCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
