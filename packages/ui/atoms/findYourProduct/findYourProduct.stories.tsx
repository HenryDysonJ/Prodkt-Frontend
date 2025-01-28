import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FindYourProduct, FindYourProductProps } from './index';

export default {
  component: FindYourProduct,
} as Meta;

const Template: Story<FindYourProductProps> = (args) => {
  return React.createElement(FindYourProduct, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
