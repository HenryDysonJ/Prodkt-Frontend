
import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const PhoneIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <SvgIcon xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
            <g data-name="Group 120967">
                <path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 57807" />
                <path
                    fill="#b9b9b9"
                    d="M11.088 4a2.209 2.209 0 0 0-2.2 2.2v11.6a2.209 2.209 0 0 0 2.2 2.2h6a2.209 2.209 0 0 0 2.2-2.2V6.2a2.209 2.209 0 0 0-2.2-2.2h-6Zm0 1.2h.63l.234 1.324a.6.6 0 0 0 .537.332h3.2a.6.6 0 0 0 .537-.332l.232-1.324h.63a.991.991 0 0 1 1 1v11.6a.991.991 0 0 1-1 1h-6a.991.991 0 0 1-1-1V6.2a.991.991 0 0 1 1-1Z"
                />
            </g>
        </SvgIcon>
    )
}
