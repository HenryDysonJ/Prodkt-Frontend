import { CirclePlusIcon } from '@atoms/icons/productSearchIconsLists';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductListCard, ProductListCardProps } from './index';

export default {
  component: ProductListCard,
} as Meta;

const Template: Story<ProductListCardProps> = (args) => {
  return React.createElement(ProductListCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  imageURL: 'https://www.pngall.com/wp-content/uploads/5/Fridge-PNG-Picture.png',
  altText: 'Dummy Image',
  showAddButton: true,
  productDescription:
    'SAMSUNG 324 L Frost Free Double Door 3 Star Convertible Refrigerator (Elegant Inox, RT34T4513S8/HL)',
  buttonText: 'Add Product',
  buttonIcon: <CirclePlusIcon />,
};
