import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
  rootStyle?: SxProps;
}
export const ServicesIcon = (props: IconInterface): JSX.Element => {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    height: 22,
    width: 22,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <g data-name="Group 120953">
        <path fill="none" d="m9.012 12.138 6.681-4.727" data-name="Line 17" />
        <path
          fill="#f38e68"
          d="M4.353 1.536A3.641 3.641 0 0 0 .719 5.17v12.884a3.641 3.641 0 0 0 3.634 3.634h7.036a7.287 7.287 0 0 1-.792-1.68h-6.23a1.953 1.953 0 0 1-1.958-1.954V7.698h16.8v3.006a7.092 7.092 0 0 1 1.68.628V5.184a3.641 3.641 0 0 0-3.634-3.634H4.353Zm1.626 8.4a1.394 1.394 0 1 0 1.394 1.4 1.391 1.391 0 0 0-1.394-1.4Zm4.754 0a1.394 1.394 0 1 0 1.394 1.4 1.391 1.391 0 0 0-1.394-1.4ZM5.979 14.98a1.394 1.394 0 1 0 1.394 1.394 1.391 1.391 0 0 0-1.394-1.394Zm14.851-2.186a2.379 2.379 0 0 1 1.066.232l-1.613 1.61.287.847.861.287 1.612-1.612a2.407 2.407 0 0 1-2.992 3.306l-4.7 4.7a1.005 1.005 0 0 1-1.421-1.421l3.539-3.539-2.008-2.008h-.574l-.847-1.421.574-.574 1.421.847v.574l2.008 2.014.587-.587a2.407 2.407 0 0 1 1.38-3.115 2.278 2.278 0 0 1 .847-.164Zm-.41 5.684 2.61 2.61a.806.806 0 0 1-1.134 1.134l-2.61-2.61Z"
          data-name="Path 6022"
        />
      </g>
    </SvgIcon>
  )
}