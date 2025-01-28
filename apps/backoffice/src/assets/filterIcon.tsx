import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const FilterIcon = (props: IconInterface): JSX.Element => {
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
                    <path fill="#0e70eb" d="M0 0h16v16H0z" data-name="Rectangle 60087" />
                </clipPath>
            </defs>
            <g clipPath="url(#a)" data-name="Group 120921">
                <path
                    fill="#0e70eb"
                    d="M1.11 0A1.124 1.124 0 0 0 0 1.111v1.373a3.341 3.341 0 0 0 1.27 2.619l4.51 3.515v6.715a.618.618 0 0 0 .1.347.627.627 0 0 0 .26.245.66.66 0 0 0 .35.072.68.68 0 0 0 .34-.122l3.11-2.222a.658.658 0 0 0 .21-.238.645.645 0 0 0 .07-.305V8.618l4.51-3.515A3.341 3.341 0 0 0 16 2.484V1.111A1.124 1.124 0 0 0 14.89 0Zm.22 1.333h13.34v1.151a1.982 1.982 0 0 1-.77 1.571L9.15 7.767a.631.631 0 0 0-.19.234.6.6 0 0 0-.07.293v4.474l-1.78 1.27V8.294a.6.6 0 0 0-.07-.293.631.631 0 0 0-.19-.234L2.1 4.055a1.982 1.982 0 0 1-.77-1.571Z"
                    data-name="Path 104967"
                />
            </g>
        </svg>
    )
}
