import { DeleteIcon } from '@atoms/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Chips, ChipsProps } from './index';

export default {
  component: Chips,
} as Meta;

const Template: Story<ChipsProps> = (args) => {
  return React.createElement(Chips, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  deleteIcon: <DeleteIcon />,
  label: 'Filter',
};
