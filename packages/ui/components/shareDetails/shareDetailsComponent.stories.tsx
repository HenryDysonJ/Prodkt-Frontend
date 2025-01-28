import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ShareDetailsComponent, ShareDetailsProps } from './index';

export default {
  component: ShareDetailsComponent,
} as Meta;

const Template: Story<ShareDetailsProps> = (args) => {
  return React.createElement(ShareDetailsComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  headertext: 'Product Specification',
};
