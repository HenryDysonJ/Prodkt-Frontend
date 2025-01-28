import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const LogoutIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
            <path
                fill="#f44f5a"
                d="M8 0a8 8 0 1 0 6.27 12.96.6.6 0 1 0-.941-.745 6.8 6.8 0 1 1 0-8.43.6.6 0 0 0 .941-.745A7.986 7.986 0 0 0 8 0Zm4.994 4.994a.6.6 0 0 0-.418 1.03L13.951 7.4 5.8 7.392a.6.6 0 1 0 0 1.2l8.153.007-1.377 1.377a.6.6 0 1 0 .848.848l2.4-2.4a.6.6 0 0 0 0-.848l-2.4-2.4a.6.6 0 0 0-.43-.182Z"
            />
        </svg>
    )
}
