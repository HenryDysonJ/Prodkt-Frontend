import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const InfoIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={29} height={29} {...props}>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M.488 0h29v29h-29z" data-name="Rectangle 60207" />
                </clipPath>
            </defs>
            <g clipPath="url(#a)" data-name="Group 121252" transform="translate(-.488)">
                <path
                    fill="#0e70eb"
                    stroke="#0e70eb"
                    strokeWidth={0.2}
                    d="M14.8 1.658a3.234 3.234 0 0 0-2.857 1.619l-11.2 19.9a3.248 3.248 0 0 0 2.858 4.77h22.4a3.248 3.248 0 0 0 2.858-4.77l-11.2-19.9A3.234 3.234 0 0 0 14.8 1.658Zm0 2.061a1.1 1.1 0 0 1 .958.592l11.2 19.9a1.049 1.049 0 0 1-.958 1.6H3.6a1.049 1.049 0 0 1-.958-1.6l11.2-19.9a1.1 1.1 0 0 1 .958-.592Zm-.017 5.712a1.093 1.093 0 0 0-.762.324 1.058 1.058 0 0 0-.306.759v7.114a1.052 1.052 0 0 0 .078.413 1.066 1.066 0 0 0 .234.351 1.087 1.087 0 0 0 .354.235 1.1 1.1 0 0 0 .838 0 1.087 1.087 0 0 0 .354-.235 1.066 1.066 0 0 0 .234-.351 1.052 1.052 0 0 0 .078-.413v-7.114a1.051 1.051 0 0 0-.08-.417 1.067 1.067 0 0 0-.239-.354 1.085 1.085 0 0 0-.36-.234 1.1 1.1 0 0 0-.423-.078Zm.017 11.4a1.459 1.459 0 0 0-1.023.417 1.406 1.406 0 0 0 0 2.012 1.465 1.465 0 0 0 2.047 0 1.406 1.406 0 0 0 0-2.012 1.46 1.46 0 0 0-1.024-.418Z"
                    data-name="Path 105154"
                />
            </g>
        </svg>
    )
}
