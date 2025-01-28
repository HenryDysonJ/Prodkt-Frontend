import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DraggableDrawer, DraggableDrawerProps } from './index';

export default {
  component: DraggableDrawer,
} as Meta;

const Template: Story<DraggableDrawerProps> = (args) => {
  return React.createElement(DraggableDrawer, { ...args });
};

export const Default = Template.bind({});
Default.args = {};