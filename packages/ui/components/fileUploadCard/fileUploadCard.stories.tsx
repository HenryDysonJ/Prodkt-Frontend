import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FileUploadCard, FileUploadCardProps } from './index';

export default {
  component: FileUploadCard,
} as Meta;

const Template: Story<FileUploadCardProps> = (args) => {
  return React.createElement(FileUploadCard, { ...args });
};

export const Default = Template.bind({});
Default.args = {
  header: 'Documents (3)',
  data: [
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4l1Fxch6cVwbi5N8ZmDgU8IWVUlS-guorhIllipi8Q&usqp=CAU&ec=48600112',
      title: 'Insurance',
      subTitle: 'General Insurance.pdf',
    },
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4l1Fxch6cVwbi5N8ZmDgU8IWVUlS-guorhIllipi8Q&usqp=CAU&ec=48600112',
      title: 'Warranty',
      subTitle: 'Fridge 2023.pdf',
    },
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4l1Fxch6cVwbi5N8ZmDgU8IWVUlS-guorhIllipi8Q&usqp=CAU&ec=48600112',
      title: 'Invoice',
      subTitle: 'Fridge invoice 2023.pdf',
    },
  ],
};
