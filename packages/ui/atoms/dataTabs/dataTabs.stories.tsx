import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { DataTabs, DataTabsProps } from './index';

export default {
  component: DataTabs,
} as Meta;

const Template: Story<DataTabsProps> = (args: any) => {
  return React.createElement(DataTabs, { ...args });
};

function DataTabsTester({ children }: { children: React.ReactNode }) {
  const [tabIndex, setTabIndex] = useState('0');
  return (
    <>
      {React.cloneElement(children as React.ReactElement, {
        tabIndex,
        setTabIndex: (newValue: string) => setTabIndex(newValue),
      })}
    </>
  );
}

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: `Warranty, Insurance & AMC `, value: '0' },
    { label: `Maintance`, value: '1' },
  ],
};

Default.decorators = [(story) => <DataTabsTester>{story()}</DataTabsTester>];
