import { Meta, Story } from "@storybook/react";
import React from "react";

import { FileUpload, FileUploadProps } from "./index";

export default {
  component: FileUpload,
} as Meta;

const Template: Story<FileUploadProps> = (args) => {
  return React.createElement(FileUpload, { ...args });
};

export const Default = Template.bind({});
Default.args = {};
