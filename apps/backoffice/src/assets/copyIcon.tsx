import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const CopyIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17.169}
            height={20.388}
            {...props}
        >
            <path
                fill="#0e70eb"
                d="M5.633 0a2.963 2.963 0 0 0-2.951 2.951v11.8a2.963 2.963 0 0 0 2.951 2.951h8.584a2.963 2.963 0 0 0 2.951-2.951v-11.8A2.963 2.963 0 0 0 14.218 0Zm0 1.61h8.584a1.329 1.329 0 0 1 1.341 1.341v11.8a1.329 1.329 0 0 1-1.34 1.349H5.633a1.329 1.329 0 0 1-1.341-1.341V2.951A1.329 1.329 0 0 1 5.633 1.61ZM1.61 2.683l-.654.436A2.146 2.146 0 0 0 0 4.9v10.391a5.1 5.1 0 0 0 5.1 5.1h7.168a2.145 2.145 0 0 0 1.786-.956l.436-.654H5.1a3.487 3.487 0 0 1-3.49-3.49Z"
            />
        </svg>
    )
}