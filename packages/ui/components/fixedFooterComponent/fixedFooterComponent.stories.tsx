import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FixedFooterComponent, FixedFooterComponentProps } from './index';

export default {
  component: FixedFooterComponent,
} as Meta;

const Template: Story<FixedFooterComponentProps> = (args) => {
  return React.createElement(FixedFooterComponent, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  footerData: {
    title: 'Upcoming Service',
    subTitle: 'Scheduled On 12 Jan, 2023',
    buttonText: 'Schedule Now',
    scheduleService: true,
  },
};
