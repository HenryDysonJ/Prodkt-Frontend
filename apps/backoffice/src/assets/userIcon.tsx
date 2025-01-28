import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
  rootStyle?: SxProps;
}
export const UserIcon = (props: IconInterface): JSX.Element => {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    height: 22,
    width: 22,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path
        fill="#0e70eb"
        d="M8.511 3.204a3.157 3.157 0 1 0 3.157 3.157 3.168 3.168 0 0 0-3.157-3.157Zm7.217 0a3.157 3.157 0 1 0 3.157 3.157 3.168 3.168 0 0 0-3.157-3.157ZM8.511 4.557a1.8 1.8 0 1 1-1.8 1.8 1.794 1.794 0 0 1 1.8-1.8Zm7.217 0a1.8 1.8 0 1 1-1.8 1.8 1.794 1.794 0 0 1 1.8-1.8ZM5.579 10.421A1.58 1.58 0 0 0 4 12.004v4.285a4.5 4.5 0 0 0 7.5 3.37 5.428 5.428 0 0 1-.718-1.181 3.153 3.153 0 0 1-5.428-2.188v-4.286a.226.226 0 0 1 .226-.226h4.748a2.471 2.471 0 0 1 .557-1.353Zm7.217 0a1.589 1.589 0 0 0-1.579 1.583v4.285a4.511 4.511 0 1 0 9.021 0v-4.285a1.589 1.589 0 0 0-1.579-1.579Zm0 1.353h5.864a.215.215 0 0 1 .226.226v4.285a3.158 3.158 0 1 1-6.315 0v-4.281a.215.215 0 0 1 .229-.23Z"
        data-name="Group 120962"
      />
    </SvgIcon>
  )
}