import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AddCoverageDetails, AddCoverageDetailsProps } from './index';

export default {
  component: AddCoverageDetails,
} as Meta;

const Template: Story<AddCoverageDetailsProps> = (args) => {
  return React.createElement(AddCoverageDetails, { ...args });
};

export const Default = Template.bind({});
Default.args = {};