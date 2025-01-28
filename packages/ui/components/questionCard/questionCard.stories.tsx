import { VectorIcon } from '@atoms/icons';
import { Meta, Story } from '@storybook/react';

import { QuestionCard, QuestionCardProps } from './index';

export default {
  component: QuestionCard,
} as Meta;

const Template: Story<QuestionCardProps> = (args) => {
  return <QuestionCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: <VectorIcon />,
  specificationTitle: 'Under Warranty',
  isRequired: true,
  checkedYes: true,
  checkBox: [
    {
      label: 'started',
      // onChange:handleOnchangeStandard(),
      checked: true,
    },
    {
      label: 'end',
      // onChange:checkedOfflineStandard(),
      checked: true,
    },
  ],
  checkBoxOptions: [
    {
      label: 'Yes',
      // onChange:handleOnchangeStandard(),
      checked: true,
    },
    {
      label: 'No',
      // onChange:checkedOfflineStandard(),
      checked: false,
    },
  ],
};
