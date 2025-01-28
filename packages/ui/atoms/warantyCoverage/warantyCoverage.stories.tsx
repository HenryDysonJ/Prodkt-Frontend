import { Meta, Story } from '@storybook/react';
import React from 'react';

import { WarrantyCoverage, WarrantyCoverageProps } from './index';

export default {
  component: WarrantyCoverage,
} as Meta;

const Template: Story<WarrantyCoverageProps> = (args) => {
  return React.createElement(WarrantyCoverage, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      value: 1,
      label: 'months',
    },
    {
      value: 2,
      label: 'year',
    },
  ],
};
