
import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const MailIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <SvgIcon xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
            <g data-name="Group 111416">
                <path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 57807" />
                <path
                    fill="#b9b9b9"
                    d="M8.659 6a2.446 2.446 0 0 0-2.438 2.438v7.125A2.446 2.446 0 0 0 8.659 18h10.125a2.446 2.446 0 0 0 2.437-2.437V8.438A2.446 2.446 0 0 0 18.784 6Zm0 1.125h10.125a1.3 1.3 0 0 1 1.313 1.313v.415L13.721 12.3 7.346 8.852v-.415a1.3 1.3 0 0 1 1.313-1.312Zm-1.313 3.006 6.108 3.3a.563.563 0 0 0 .535 0l6.108-3.3v5.432a1.3 1.3 0 0 1-1.312 1.313H8.659a1.3 1.3 0 0 1-1.312-1.312Z"
                />
            </g>
        </SvgIcon>
    )
}
