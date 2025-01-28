import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SearchEmptyState, SearchEmptyStateProps } from './index';

export default {
  component: SearchEmptyState,
} as Meta;

const Template: Story<SearchEmptyStateProps> = (args) => {
  return React.createElement(SearchEmptyState, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
