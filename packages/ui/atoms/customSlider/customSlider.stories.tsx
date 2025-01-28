import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CustomSlider, CustomSliderProps } from './index';

export default {
  component: CustomSlider,
} as Meta;

const Template: Story<CustomSliderProps> = (args) => {
  return React.createElement(CustomSlider, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  rootSx: {
    marginTop: '70px',
  },
  defaultValue: 20,
};
