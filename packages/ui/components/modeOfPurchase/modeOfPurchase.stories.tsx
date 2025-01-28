import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useState } from 'react';

import { ModeOfPurchase, ModeOfPurchaseProps } from './index';

export default {
  component: ModeOfPurchase,
} as Meta;

const Template: Story<ModeOfPurchaseProps> = (args) => {
  const [currentLocation, setCurrentLocation] = useState();
  const [checked, setChecked] = useState(true);
  const [checked1, setChecked2] = useState(false);

  const handleChecked = () => {
    setChecked(true);
    setChecked2(false);
  };
  const handleChecked2 = () => {
    setChecked(false);
    setChecked2(true);
  };

  const handleChange = (value: string) => {
    setCurrentLocation({ value });
  };

  return (
    <ModeOfPurchase
      isShowOffline={checked}
      handleChange={handleChange}
      checkedOffline={checked}
      checkedOnline={checked1}
      handleOnchangeChecked={handleChecked}
      handleOnchangeCheckedOnline={handleChecked2}
      value={currentLocation}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  modeTitle: 'Mode of Purchase',
  isRequired: true,
};
