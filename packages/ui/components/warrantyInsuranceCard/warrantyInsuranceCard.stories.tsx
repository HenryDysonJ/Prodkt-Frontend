import { Meta, Story } from '@storybook/react';
import React from 'react';

import { WarrantyInsuranceCard, WarrantyInsuranceCardProps } from './index';

export default {
  component: WarrantyInsuranceCard,
} as Meta;

const Template: Story<WarrantyInsuranceCardProps> = (args) => {
  return React.createElement(WarrantyInsuranceCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4l1Fxch6cVwbi5N8ZmDgU8IWVUlS-guorhIllipi8Q&usqp=CAU&ec=48600112',
      label: 'Brand Warranty',
      firstText: '12 Months Coverage',
      secondText: '',
      thirdText: '',
      showCoverage: true,
      showInsurance: false,
    },
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4l1Fxch6cVwbi5N8ZmDgU8IWVUlS-guorhIllipi8Q&usqp=CAU&ec=48600112',
      label: 'Extended warranty',
      firstText: '12 Months Coverage',
      secondText: '',
      thirdText: '',
      showCoverage: true,
      showInsurance: false,
    },
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4l1Fxch6cVwbi5N8ZmDgU8IWVUlS-guorhIllipi8Q&usqp=CAU&ec=48600112',
      label: 'Insured',
      firstText: 'PL-021547886768',
      secondText: '16 Jan,23',
      thirdText: '1 Year',
      showCoverage: false,
      showInsurance: true,
    },
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4l1Fxch6cVwbi5N8ZmDgU8IWVUlS-guorhIllipi8Q&usqp=CAU&ec=48600112',
      label: 'AMC',
      firstText: 'PL-021547885765',
      secondText: '16 Jan,23',
      thirdText: '1 Year',
      showCoverage: false,
      showInsurance: true,
    },
  ],
};
