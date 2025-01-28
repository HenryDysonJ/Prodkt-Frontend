import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const CrayondLogoIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={36}
            height={36}
            {...props}
        >
            <defs>
                <pattern
                    id="a"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 220 218"
                >
                    <image
                        xlinkHref="data:image/png;base64,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"
                        width={220}
                        height={218}
                    />
                </pattern>
            </defs>
            <g data-name="Group 102541" transform="translate(-1176 -12)">
                <rect
                    width={36}
                    height={36}
                    fill="#fff"
                    data-name="Rectangle 44820"
                    rx={6}
                    transform="translate(1176 12)"
                />
                <path
                    fill="url(#a)"
                    d="M0 0h28v28H0z"
                    data-name="Crayon'd-Logo-Vector 1"
                    transform="translate(1180 16)"
                />
            </g>
        </svg>
    )
}
