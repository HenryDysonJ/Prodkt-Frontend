import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const ProductsIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <SvgIcon xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
            <path
                fill="#8e959d"
                d="M7.598 3.429a.695.695 0 0 0-.694.695v6.023a2.471 2.471 0 0 0 .317 1.158H3.429a.695.695 0 0 0-.695.695v6.023a2.559 2.559 0 0 0 2.548 2.548h4.865a2.523 2.523 0 0 0 1.853-.83 2.523 2.523 0 0 0 1.853.83h4.864a2.559 2.559 0 0 0 2.548-2.548V12a.7.7 0 0 0-.695-.695h-4.254a2.47 2.47 0 0 0 .318-1.158V4.124a.7.7 0 0 0-.7-.695Zm.695 1.39h6.949v5.328a1.148 1.148 0 0 1-1.158 1.158H9.452a1.148 1.148 0 0 1-1.159-1.158Zm2.548 1.39a.695.695 0 1 0 0 1.39h1.854a.695.695 0 1 0 0-1.39Zm-6.717 6.486h7.181v5.328a1.148 1.148 0 0 1-1.158 1.158H5.282a1.148 1.148 0 0 1-1.158-1.159Zm8.571 0h7.181v5.328a1.148 1.148 0 0 1-1.158 1.158h-4.865a1.148 1.148 0 0 1-1.158-1.158Zm-6.023 1.39a.695.695 0 1 0 0 1.39h1.853a.695.695 0 1 0 0-1.39Zm8.8 0a.695.695 0 1 0 0 1.39h1.853a.695.695 0 1 0 0-1.39Z"
                data-name="Group 120963"
            />
        </SvgIcon>
    )
}
