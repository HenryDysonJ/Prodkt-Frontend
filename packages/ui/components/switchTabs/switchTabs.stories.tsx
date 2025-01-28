import { RightIcon, WrongIcon } from '@atoms/icons/productSearchIconsLists';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SwitchTabs, SwitchTabsProps } from './index';

export default {
  component: SwitchTabs,
} as Meta;

const Template: Story<SwitchTabsProps> = (args) => {
  return React.createElement(SwitchTabs, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  tabData: [
    {
      title: 'Inclusions',
      points: [
        {
          pointIcon: <RightIcon />,
          pointText: 'Doloremque laudantium, totam rem aperiam, eaque ipsa quae',
        },
        {
          pointIcon: <RightIcon />,
          pointText: 'Sed ut perspiciatis unde omnis iste natus error',
        },
        {
          pointIcon: <RightIcon />,
          pointText: 'Blanditiis praesentium voluptatum deleniti atque',
        },
        {
          pointIcon: <RightIcon />,
          pointText: 'Id est laborum et dolorum fuga. Et harum quidem',
        },
        {
          pointIcon: <RightIcon />,
          pointText: 'Optio cumque nihil impedit quo minus id quod maxi',
        },
      ],
    },
    {
      title: 'Exclusions',
      points: [
        {
          pointIcon: <WrongIcon />,
          pointText: 'Doloremque laudantium, totam rem aperiam, eaque ipsa quae',
        },
        {
          pointIcon: <WrongIcon />,
          pointText: 'Sed ut perspiciatis unde omnis iste natus error',
        },
        {
          pointIcon: <WrongIcon />,
          pointText: 'Blanditiis praesentium voluptatum deleniti atque',
        },
        {
          pointIcon: <WrongIcon />,
          pointText: 'Id est laborum et dolorum fuga. Et harum quidem',
        },
        {
          pointIcon: <WrongIcon />,
          pointText: 'Optio cumque nihil impedit quo minus id quod maxi',
        },
      ],
    },
  ],
};
