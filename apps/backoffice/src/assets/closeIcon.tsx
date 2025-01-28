
import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const CloseIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16.543}
            height={16.534}
            {...props}
        >
            <path d="M15.548 0a.972.972 0 0 0-.679.3l-6.6 6.6-6.6-6.6A.972.972 0 1 0 .294 1.673l6.6 6.6-6.6 6.6a.972.972 0 1 0 1.374 1.374l6.6-6.6 6.6 6.6a.972.972 0 1 0 1.374-1.374l-6.6-6.6 6.6-6.6a.972.972 0 0 0-.7-1.673Z" />
        </svg>
    )
}