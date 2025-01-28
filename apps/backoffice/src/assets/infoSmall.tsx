import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const InfoSmallIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
            <defs>
                <clipPath id="a">
                    <path
                        fill="#faa301"
                        d="M.003 0h16v16h-16z"
                        data-name="Rectangle 60222"
                    />
                </clipPath>
            </defs>
            <g clipPath="url(#a)" transform="translate(-.003)">
                <path
                    fill="#faa301"
                    d="M8.001 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 1.2a6.8 6.8 0 1 1-6.8 6.8 6.791 6.791 0 0 1 6.8-6.8Zm0 2.8a.8.8 0 1 0 .566.234A.8.8 0 0 0 8.001 4Zm-.009 2.791a.6.6 0 0 0-.591.609v4.4a.6.6 0 1 0 1.2 0V7.4a.6.6 0 0 0-.609-.609Z"
                    data-name="Path 105156"
                />
            </g>
        </svg>
    )
}