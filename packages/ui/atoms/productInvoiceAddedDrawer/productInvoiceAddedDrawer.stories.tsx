import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductInvoiceAddedDrawer, ProductInvoiceAddedDrawerProps } from './index';

export default {
  component: ProductInvoiceAddedDrawer,
} as Meta;

const Template: Story<ProductInvoiceAddedDrawerProps> = (args) => {
  return React.createElement(ProductInvoiceAddedDrawer, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
