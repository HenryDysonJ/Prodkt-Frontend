import { UpDownIcon } from '@atoms/icons/productSearchIconsLists';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AccordianCardLayout, AccordianCardLayoutProps } from './index';

export default {
  component: AccordianCardLayout,
} as Meta;

const Template: Story<AccordianCardLayoutProps> = (args) => {
  return React.createElement(AccordianCardLayout, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  icon: <UpDownIcon />,
  title: "Explore AMC's",
};
