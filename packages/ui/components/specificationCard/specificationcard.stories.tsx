import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SpecificationCard, SpecificationCardProps } from './index';

export default {
  component: SpecificationCard,
} as Meta;

const Template: Story<SpecificationCardProps> = (args) => {
  return React.createElement(SpecificationCard, { ...args });
};

export const Default = Template.bind({});

Default.args = {
  heading: 'Specifications',
  showIcon: true,
  specification: [
    {
      title: 'Type',
      value: 'Double Door',
    },
    {
      title: 'Refrigerator Type',
      value: 'Top Freezer Refrigerator',
    },
    {
      title: 'Type',
      value: 'Double Door',
    },
    {
      title: 'Refrigerator Type',
      value: 'Top Freezer Refrigerator',
    },
    {
      title: 'Refrigerator Type',
      value: 'Top Freezer Refrigerator',
    },
  ],
};
