import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const CategoryDummyIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} {...props}>
        <g data-name="Group 115442">
          <path fill="#fff" d="M0 0h100v100H0z" data-name="Rectangle 59353" />
          <path
            fill="#b8d4f6"
            d="M32.639 25A7.671 7.671 0 0 0 25 32.639v34.722A7.671 7.671 0 0 0 32.639 75h34.722A7.671 7.671 0 0 0 75 67.361V32.639A7.671 7.671 0 0 0 67.361 25Zm0 4.167h34.722a3.442 3.442 0 0 1 3.472 3.472v28.41l-8.35-8.078a5.618 5.618 0 0 0-7.812 0l-2.846 2.753-8.583-8.3a5.608 5.608 0 0 0-7.815 0l-6.255 6.052V32.639a3.442 3.442 0 0 1 3.467-3.472Zm26.389 5.556a6.258 6.258 0 0 0-4.682 2 6.539 6.539 0 0 0 0 8.5 6.476 6.476 0 0 0 9.364 0 6.539 6.539 0 0 0 0-8.5 6.258 6.258 0 0 0-4.682-2.001Zm0 4.167a1.833 1.833 0 0 1 1.568.6 2.386 2.386 0 0 1 0 2.962 2.342 2.342 0 0 1-3.136 0 2.386 2.386 0 0 1 0-2.962 1.833 1.833 0 0 1 1.568-.601ZM39.331 50a1.429 1.429 0 0 1 1.009.412l8.483 8.206L36.2 70.833h-3.561a3.442 3.442 0 0 1-3.472-3.472v-8.092l9.152-8.854A1.436 1.436 0 0 1 39.331 50Zm19.244 5.556a1.425 1.425 0 0 1 1.012.41l11.246 10.88v.515a3.442 3.442 0 0 1-3.472 3.472H42.2l15.37-14.868a1.428 1.428 0 0 1 1.005-.409Z"
          />
        </g>
      </svg>
    )
}