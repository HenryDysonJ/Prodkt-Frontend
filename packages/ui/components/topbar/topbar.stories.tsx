import { Meta, Story } from '@storybook/react';
import React from 'react';
import { TopBarComponent, TopBarProps } from './index';

export default {
  component: TopBarComponent,
} as Meta;

const Template: Story<TopBarProps> = (args) => {
  return React.createElement(TopBarComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  logo: <></>
};
