import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CustomTextfield, CustomTextfieldProps } from './index';

export default {
  component: CustomTextfield,
} as Meta;

const Template: Story<CustomTextfieldProps> = (args) => {
  return React.createElement(CustomTextfield, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  definitionName: 'Product Name',
  placeholder: 'Name',
  error: false,
  yearText: 'Year',
  yearValue: 1,
  darkText: true,
  isRequired: true,
  variant: '',
  disabled: false,
  errorText: 'error text',
  type: 'date',
  options: [
    {
      label: 'ten',
      value: 'ten',
    },
    {
      label: 'two',
      value: 'two',
    },
    {
      label: 'three',
      value: 'three',
    },
    {
      label: 'four',
      value: 'four',
    },
  ],
};
